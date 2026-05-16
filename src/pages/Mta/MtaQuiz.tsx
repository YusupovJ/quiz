import { useParams } from "react-router";
import { Quiz } from "@/components/Quiz";
import { mta } from "@/data/mta";

export const MtaQuiz = () => {
  const { index, id } = useParams();
  const questions = mta[Number(index)];
  const question = questions.find((question) => question.id === Number(id))!;
  const isLast = question.id === questions[questions.length - 1].id;

  return <Quiz question={question} isLast={isLast} endpoint="mta" />;
};
