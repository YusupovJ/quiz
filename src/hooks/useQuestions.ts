import { IQuestion } from "@/types";
import { useParams } from "react-router";

export const useQuestions = (data: Array<IQuestion[]>) => {
  const { index, id } = useParams();
  const questions = index === "total" ? data.flat() : data[Number(index)];
  
  const question = questions.find((question) => question.id === Number(id))!;
  const isLast = question.id === questions[questions.length - 1].id;

  return { question, isLast };
};
