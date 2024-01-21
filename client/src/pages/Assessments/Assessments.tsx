import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  convertBackendQuestionToFullInfo,
  type FullInfoQuestion,
  type QuestionFromBackend,
} from "../../../../types/Quiz/Question";
import type { QuizMetaData } from "../../../../types/Quiz/Quiz";
import type { Subject } from "../../../../types/Subject/Subject";
import { backendEndpoint } from "../../../../types/endpoints";
import { PageHeader } from "../../components/kiseki/PageHeader";
import { useQuizState } from "../../states/Quiz.state";
import DiagnosticQuizCard from "./QuizCard/DiagnosticQuizCard";
import StartQuizDialog from "./QuizCard/StartQuizDialog";

function Assessments() {
  const [
    setQuestions,
    setUserAnswers,
    setCurrentQuestionIndex,
    setQuizMetaData,
    resetQuizState,
  ] = useQuizState((state) => [
    state.setQuestions,
    state.setUserAnswers,
    state.setCurrentQuestionIndex,
    state.setQuizMetaData,
    state.resetState,
  ]);
  const [showStartQuiz, setShowStartQuiz] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<Subject | undefined>();

  const query = useQuery({
    queryKey: ["questions", selectedSubject],
    queryFn: async () => {
      const response = await axios.get(
        `${backendEndpoint.getDiagnosticQuiz}/${selectedSubject}`
      );
      return response.data as QuestionFromBackend[];
    },

    enabled: !!selectedSubject,
    retry: 1,
    staleTime: 0,
    select: (receivedQuestions) =>
      receivedQuestions.map((question) =>
        convertBackendQuestionToFullInfo(question)
      ),
  });

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
      if (query.data.length !== 0) {
        setShowStartQuiz(true);
        setUpQuiz(query.data, selectedSubject);
      }
      setSelectedSubject(undefined);
    } else if (!query.isSuccess && !query.isFetching && !!selectedSubject) {
      setSelectedSubject(undefined);
    }
  }, [query.isSuccess, query.isFetching, selectedSubject]);

  useEffect(() => {
    resetQuizState();
  }, []);

  return (
    <>
      <PageHeader className="pb-8">Diagnostic Quiz</PageHeader>
      <div>
        <p className=" w-[110px] text-center">To do</p>
        <div className="bg-gradient-to-r from-[#FF62E2] via-[#9462FF] to-[#0038FF] w-[110px] h-1" />
      </div>
      <div className="grid grid-cols-1 gap-3 pt-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <DiagnosticQuizCard
          subjectTitle={"Mathematics"}
          setSelectedSubject={setSelectedSubject}
          selectedSubject={selectedSubject}
          timeLimit={15}
          numberOfQuestions={30}
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
