import { useParams } from "react-router";
import { Quiz } from "@/components/Quiz";
import { academy } from "@/data/academy";

export const AcademyQuiz = () => {
  const { index, id } = useParams();
  const questions = academy[Number(index)];
  const question = questions.find((question) => question.id === Number(id))!;
  const isLast = question.id === questions[questions.length - 1].id;

  return <Quiz question={question} isLast={isLast} endpoint="academy" />;
};
