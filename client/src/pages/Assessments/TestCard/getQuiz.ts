import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import {
  safeError,
  safeResult,
  type PromiseSafeResult,
} from "../../../common/error";

import type { Question } from "../../../../types/Question";
import type { Subject, Topic } from "../../../../types/Subject/Subject";
import { db } from "../../../common/firebase";

export const getAllQuestionsOfSubject = async (
  subject: Subject
): PromiseSafeResult<Question[] | null> => {
  try {
    const retrievedList = await getDocs(collection(db, subject));
    const questionsList: Question[] = retrievedList.docs.map((doc) => {
      return doc.data() as Question;
    });

    return safeResult(questionsList);
  } catch (e) {
    const error = e as Error;
    console.error(error);
    return safeError(error);
  }
};

export const getQuestionsOfASubjectByAmount = async (
  subject: Subject,
  amount: number
): PromiseSafeResult<Question[] | null> => {
  try {
    const collectionRoot = collection(db, subject);
    const filteredQuery = query(collectionRoot, limit(amount));

    const retrievedList = await getDocs(filteredQuery);

    const questionsList: Question[] = retrievedList.docs.map((doc) => {
      return doc.data() as Question;
    });
    return safeResult(questionsList);
  } catch (e) {
    const error = e as Error;
    console.error(error);
    return safeError(error);
  }
};

export const getAllQuestionsOfTopic = async (
  subject: Subject,
  topic: Topic
) => {
  try {
    const collectionRoot = collection(db, subject);
    const filteredQuery = query(
      collectionRoot,
      where("topic", "==", topic),
      orderBy("random")
    );

    const retrievedList = await getDocs(filteredQuery);

    const questionsList: Question[] = retrievedList.docs.map((doc) => {
      return doc.data() as Question;
    });
    return safeResult(questionsList);
  } catch (e) {
    const error = e as Error;
    console.error(error);
    return safeError(error);
  }
};

export const getQuestionsOfATopicByAmount = async (
  subject: Subject,
  topic: Topic,
  amount: number
) => {
  try {
    const collectionRoot = collection(db, subject);
    const filteredQuery = query(
      collectionRoot,
      where("topic", "==", topic),
      orderBy("random"),
      limit(amount)
    );

    const retrievedList = await getDocs(filteredQuery);

    const questionsList: Question[] = retrievedList.docs.map((doc) => {
      return doc.data() as Question;
    });
    return safeResult(questionsList);
  } catch (e) {
    const error = e as Error;
    console.error(error);
    return safeError(error);
  }
};

export const getAllQuestionsOfSubTopic = async (
  subject: Subject,
  topic: Topic
) => {
  try {
    const collectionRoot = collection(db, subject);
    const filteredQuery = query(
      collectionRoot,
      where("topic", "==", topic),
      orderBy("random")
    );

    const retrievedList = await getDocs(filteredQuery);

    const questionsList: Question[] = retrievedList.docs.map((doc) => {
      return doc.data() as Question;
    });
    return safeResult(questionsList);
  } catch (e) {
    const error = e as Error;
    console.error(error);
    return safeError(error);
  }
};