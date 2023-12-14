import { describe, expect, it } from "vitest";
import type { FullInfoQuestion } from "../../../../types/Quiz/Question";
import { markQuiz } from "./markQuiz";

describe("markQuiz", () => {
  // describe.todo("for Text marking");

  describe("for MCQ", () => {
    it("should mark user answers correctly", () => {
      const [result, error] = markQuiz(mockUserAnswers, mockQuestions);

      expect(result?.numberOfCorrectAnswers).toEqual(2);
      expect(result?.numberOfQuestions).toEqual(mockQuestions.length);
      expect(error).toBeNull();
    });

    it("should return error when user answers and question have != length ", () => {
      const slicedMockedUserAnswer = mockUserAnswers.slice(0, 2);
      const [result, error] = markQuiz(slicedMockedUserAnswer, mockQuestions);
      expect(slicedMockedUserAnswer.length).not.toEqual(mockQuestions.length);
      expect(result).toBeNull();
      expect(error).toBeDefined();
    });

    it("should return error when no user answers", () => {
      const [result, error] = markQuiz([], mockQuestions);
      expect(result).toBeNull();
      expect(error?.message).toContain("User Answers");
    });

    it("should return error when no question list", () => {
      const [result, error] = markQuiz(mockUserAnswers, []);
      expect(result).toBeNull();
      expect(error?.message).toContain("Questions List");
    });

    it.todo("should mark multiple answers correctly");
  });
});

const mockUserAnswers: string[] = ["Answer 1A", "Answer 2B", "URL 3C"];

// Force type to make shorter mock
const mockQuestions: FullInfoQuestion[] = [
  {
    options: ["Answer 1A", "Answer 1B", "Answer 1C"],
    correctOptions: ["A"],
    optionImageUrls: ["URL 1A", "URL 1B", "URL 1C"],
  } as FullInfoQuestion,
  {
    options: ["Answer 2A", "Answer 2B", "Answer 2C"],
    correctOptions: ["A"],
    optionImageUrls: ["URL 2A", "URL 2B", "URL 2C"],
  } as FullInfoQuestion,
  {
    options: ["Answer 3A", "Answer 3B", "Answer 3C"],
    correctOptions: ["C"],
    optionImageUrls: ["URL 3A", "URL 3B", "URL 3C"],
  } as FullInfoQuestion,
];

// const multipleAnswersQuestions: FullInfoQuestion[] = [
//   {
//     options: ["Answer 1A", "Answer 1B", "Answer 1C"],
//     correctOptions: ["A,B"],
//   } as FullInfoQuestion,
//   {
//     options: ["Answer 2A", "Answer 2B", "Answer 2C"],
//     correctOptions: ["A,C"],
//   } as FullInfoQuestion,
//   {
//     options: ["Answer 3A", "Answer 3B", "Answer 3C"],
//     correctOptions: ["C,A"],
//   } as FullInfoQuestion,
// ];
