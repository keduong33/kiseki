import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import type { AnalysedResult } from "../../../types/Quiz/Result";

function Insights() {
  const [results, setResults] = useState<AnalysedResult[]>();

  const query = useQuery({
    queryKey: ["results"],
    queryFn: async () => await axios.get("/api/get-results"),
  });

  useEffect(() => {
    if (query.status === "success") {
      const results = query.data.data as AnalysedResult[];
      setResults(results);
    }
  }, [query.status]);

  return (
    <>
      {results?.map((result, index) => {
        return (
          <div key={`Result-${index}`}>
            <p>
              Datetime of the test:{" "}
              {new Date(result.createdAt ?? "").toLocaleString()}
            </p>
            <p>
              Total: {result.totalNumberOfCorrectAnswers}/
              {result.totalNumberOfQuestions} ~
              {Math.round(
                (result.totalNumberOfCorrectAnswers /
                  result.totalNumberOfQuestions) *
                  100
              )}
              %
            </p>
            <p>Subject: {result.subject}</p>
            <div>
              <p>--------Topic--------</p>
              {result.topics?.map((topic) => (
                <div key={topic.topic}>
                  <p>
                    {topic.topic}: {topic.numberOfCorrectAnswers}/
                    {topic.numberOfQuestions}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p>--------Subtopic--------</p>
              {result.subtopics?.map((subtopic) => (
                <div key={subtopic.subtopic}>
                  <p>
                    {subtopic.subtopic}: {subtopic.numberOfCorrectAnswers}/
                    {subtopic.numberOfQuestions}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Insights;
