import type {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { QuestionFromBackend } from "../../../../types/Quiz/Question";

const NotionQuestion: Map<string, string> = new Map();

export const convertNotionPageToQuestion = (
  page: PageObjectResponse
): QuestionFromBackend => {
  const id = page.id;

  const propertyKeys = Object.keys(page.properties);
  propertyKeys.forEach((key) => {
    const property = page.properties[key];

    switch (property.type) {
      case "rich_text": {
        NotionQuestion.set(key, getPlainText(property.rich_text));
        return;
      }
      case "select": {
        NotionQuestion.set(key, property.select?.name ?? "");
        return;
      }
    }
  });

  return {
    id: id,

    question: NotionQuestion.get("Question") ?? "No Question",

    option_a: NotionQuestion.get("Option A"),
    option_b: NotionQuestion.get("Option B"),
    option_c: NotionQuestion.get("Option C"),
    option_d: NotionQuestion.get("Option D"),
    option_e: NotionQuestion.get("Option E"),

    option_a_image_url: NotionQuestion.get("Option A Image URL"),
    option_b_image_url: NotionQuestion.get("Option B Image URL"),
    option_c_image_url: NotionQuestion.get("Option C Image URL"),
    option_d_image_url: NotionQuestion.get("Option D Image URL"),
    option_e_image_url: NotionQuestion.get("Option E Image URL"),

    correct_options: NotionQuestion.get("Correct Options") ?? "No Answer",
    feedback: NotionQuestion.get("Feedback"),
    time_in_s: NotionQuestion.get("Time in s"),

    subject: NotionQuestion.get("Subject") ?? "No Subject",
    topic: NotionQuestion.get("Topic"),
    subtopic: NotionQuestion.get("Sub-topic"),
    skill: NotionQuestion.get("Skill"),
    difficulty: NotionQuestion.get("Difficulty"),
    curriculum: NotionQuestion.get("Curriculum"),
  } satisfies QuestionFromBackend as QuestionFromBackend;
};

export const getPlainText = (
  val: RichTextItemResponse[],
  separator: string = ""
) => {
  return val.map((text) => text.plain_text).join(separator);
};

export const getHeadingText = (val: RichTextItemResponse[]) => {
  return val[0].plain_text;
};
