import { useParams } from "react-router";
import { Quiz } from "@/components/Quiz";
import { cyber } from "@/data/cyber";

export const CyberQuiz = () => {
  const { index, id } = useParams();
  const questions = cyber[Number(index)];
  const question = questions.find((question) => question.id === Number(id))!;
  const isLast = question.id === questions[questions.length - 1].id;

  return <Quiz question={question} isLast={isLast} endpoint="cyber" />;
};
