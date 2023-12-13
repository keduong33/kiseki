import Papa from "papaparse";
import { useRef } from "react";
import {
  convertParsedQuestionToFullInfo,
  type FullInfoQuestion,
} from "../../../types/Quiz/Question";
import { Button } from "../../components/shadcn/ui/button";
import { Input } from "../../components/shadcn/ui/input";
import { Label } from "../../components/shadcn/ui/label";

type ParsedResult = {
  data: Array<ParsedFromCSVQuestion>;
  errors: Array<unknown>;
  meta: object;
};

export type ParsedFromCSVQuestion = {
  Name: string;
  Question: string;
  "Option A": string;
  "Option B": string;
  "Option C": string;
  "Option D": string;
  "Option E": string;
  "Option A Image URL": string;
  "Option B Image URL": string;
  "Option C Image URL": string;
  "Option D Image URL": string;
  "Option E Image URL": string;
  "Correct Options": string;
  Feedback: string;
  Subject: string;
  Topic: string;
  Subtopic: string;
  Skill: string;
  "Time in ms": number;
  "Randomise Options": boolean;
};

function AddQuestions() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnComplete = (results: ParsedResult) => {
    const parsedQuestions = results.data;

    console.log("Parsed Questions", parsedQuestions);
    const fullInfoQuestions: FullInfoQuestion[] = [];

    for (let i = 0; i < parsedQuestions.length; i++) {
      const parsedQuestion = parsedQuestions[i];
      if (parsedQuestion) {
        const convertedQuestion =
          convertParsedQuestionToFullInfo(parsedQuestion);
        fullInfoQuestions.push(convertedQuestion);
      }
    }

    console.log("Full Info Questions", fullInfoQuestions);
  };

  const parseFile = () => {
    const file = inputRef.current?.files && inputRef.current.files[0];
    if (file) {
      Papa.parse(file, {
        complete: handleOnComplete,
        error: console.error,
        skipEmptyLines: "greedy",
        header: true,
      });
    } else {
      console.error("file is empty");
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="csv">Check inspector after parsing the CSV</Label>
      <Input id="csv" type="file" ref={inputRef} />
      <Button onClick={parseFile}>Parse</Button>
    </div>
  );
}

export default AddQuestions;
