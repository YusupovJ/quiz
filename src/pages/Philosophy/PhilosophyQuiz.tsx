import { useParams } from "react-router";
import { Quiz } from "@/components/Quiz";
import { philosophy } from "@/data/philosophy";

export const PhilosophyQuiz = () => {
  const { index, id } = useParams();
  const questions = philosophy[Number(index)];
  const question = questions.find((question) => question.id === Number(id))!;
  const isLast = question.id === questions[questions.length - 1].id;

  return <Quiz question={question} isLast={isLast} endpoint="philosophy" />;
};
