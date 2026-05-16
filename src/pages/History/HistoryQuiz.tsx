import { useParams } from "react-router";
import { history } from "@/data/history.ts";
import { Quiz } from "@/components/Quiz";

export const HistoryQuiz = () => {
  const { index, id } = useParams();
  const questions = history[Number(index)];
  const question = questions.find((question) => question.id === Number(id))!;
  const isLast = question.id === questions[questions.length - 1].id;

  return <Quiz question={question} isLast={isLast} endpoint="history" />;
};
