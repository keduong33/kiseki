import type { Config, Context } from "@netlify/functions";
import {
  APIErrorCode,
  Client,
  ClientErrorCode,
  isFullPage,
  isNotionClientError,
} from "@notionhq/client";
import { error } from "neo4j-driver";
import type { QuestionFromBackend } from "../../../../types/Quiz/Question";
import { Response500 } from "../../common/responseTemplate";
import { convertNotionPageToQuestion } from "./convertNotionPage";

const algebraDbId = "9bbc76d6569f4fc8bab5e7b7a9db8e4e";

export default async (req: Request, context: Context) => {
  const { subject, subtopic, numberOfQuestions } = context.params;

  try {
    const notion = new Client({ auth: process.env.NOTION_SECRET_KEY });
    const response = await notion.databases.query({
      database_id: algebraDbId,
      // sorts: [{ property: "Random Number", direction: "descending" }],
      page_size: 30,
    });

    const questions: QuestionFromBackend[] = [];
    for (const page of response.results) {
      if (!isFullPage(page)) continue;
      questions.push(convertNotionPageToQuestion(page));
    }

    return Response.json(questions, { status: 200 });
  } catch (e) {
    if (isNotionClientError(error)) {
      switch (error.code) {
        case ClientErrorCode.RequestTimeout:
          return new Response("Request Timeout", { status: 408 });
        case APIErrorCode.ObjectNotFound:
          console.warn("Cannot find the database");
          break;
        case APIErrorCode.Unauthorized:
          return new Response("Unauthorized", { status: 404 });
        // ...
        default:
          console.error(error);
      }
    }
    return Response500("Failed to get quiz");
  }
};

export const config: Config = {
  method: "GET",
  path: ["/api/get-diagnostic-quiz/:subject"],
};
