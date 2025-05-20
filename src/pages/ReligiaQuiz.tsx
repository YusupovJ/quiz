import { useParams } from "react-router";
import { Quiz } from "@/components/Quiz";
import { religia } from "@/data/religia";

export const ReligiaQuiz = () => {
  const { index, id } = useParams();
  const questions = religia[Number(index)];
  const question = questions.find((question) => question.id === Number(id))!;
  const isLast = question.id === questions[questions.length - 1].id;

  return <Quiz question={question} isLast={isLast} endpoint="religia" />;
};
