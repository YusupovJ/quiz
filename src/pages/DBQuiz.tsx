import { useParams } from "react-router";
import { Quiz } from "@/components/Quiz";
import { db } from "@/data/db";

export const DBQuiz = () => {
  const { index, id } = useParams();
  const questions = db[Number(index)];
  const question = questions.find((question) => question.id === Number(id))!;
  const isLast = question.id === questions[questions.length - 1].id;

  return <Quiz question={question} isLast={isLast} endpoint="db" />;
};
