import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  convertBackendQuestionToFullInfo,
  type FullInfoQuestion,
  type QuestionFromBackend,
} from "../../../types/Quiz/Question";
import type { QuizMetaData } from "../../../types/Quiz/Quiz";
import { Subject } from "../../../types/Subject/Subject";
import { backendEndpoint } from "../../../types/endpoints";
import { useQuizState } from "../../states/Quiz.state";
import DiagnosticQuizCard from "./QuizCard/DiagnosticQuizCard";
import StartQuizDialog from "./QuizCard/StartQuizDialog";

function Assessments() {
  const [
    setQuestions,
    setUserAnswers,
    setCurrentQuestionIndex,
    setQuizMetaData,
  ] = useQuizState((state) => [
    state.setQuestions,
    state.setUserAnswers,
    state.setCurrentQuestionIndex,
    state.setQuizMetaData,
  ]);
  const [showStartQuiz, setShowStartQuiz] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<Subject | undefined>();

  const query = useQuery({
    queryKey: ["questions", selectedSubject],
    queryFn: async () =>
      await axios.get(
        `${backendEndpoint.getDiagnosticQuiz}/${selectedSubject}`
      ),
    enabled: !!selectedSubject,
    staleTime: 0,
  });

  const receivedQuestions = query.data?.data as QuestionFromBackend[];

  const setUpQuiz = (questions: FullInfoQuestion[], subject: Subject) => {
    const quizMetaData: QuizMetaData = {
      subject: subject,
      //TODO: add different mode
      mode: "Diagnostic Test",
      numberOfQuestions: questions.length,
      status: "not submitted",
    } satisfies QuizMetaData;

    setQuestions(questions);
    setUserAnswers(new Array(questions.length));
    setCurrentQuestionIndex(0);
    setQuizMetaData(quizMetaData);
  };

  useEffect(() => {
    if (query.isSuccess && !query.isFetching && !!selectedSubject) {
      if (receivedQuestions && receivedQuestions.length !== 0) {
        const questions = receivedQuestions.map((question) =>
          convertBackendQuestionToFullInfo(question)
        );
        setShowStartQuiz(true);
        setUpQuiz(questions, selectedSubject);
      }
      setSelectedSubject(undefined);
    }
  }, [query.isSuccess, query.isFetching, selectedSubject]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 pt-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center">
        <DiagnosticQuizCard
          subjectTitle={Subject["Mathematics"]}
          setSelectedSubject={setSelectedSubject}
          selectedSubject={selectedSubject}
        />
        <DiagnosticQuizCard
          subjectTitle={Subject["Numerical Reasoning"]}
          setSelectedSubject={setSelectedSubject}
          selectedSubject={selectedSubject}
        />
        <DiagnosticQuizCard
          subjectTitle={Subject["Reading Comprehension"]}
          setSelectedSubject={setSelectedSubject}
          selectedSubject={selectedSubject}
        />
        <DiagnosticQuizCard
          subjectTitle={Subject["Science Reasoning"]}
          setSelectedSubject={setSelectedSubject}
          selectedSubject={selectedSubject}
        />
        <DiagnosticQuizCard
          subjectTitle={Subject["Verbal Reasoning"]}
          setSelectedSubject={setSelectedSubject}
          selectedSubject={selectedSubject}
        />
      </div>
      <StartQuizDialog
        setShowStartQuiz={setShowStartQuiz}
        showStartQuiz={showStartQuiz}
      />
    </>
  );
}

export default Assessments;
