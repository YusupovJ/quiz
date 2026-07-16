import { useParams } from "react-router";
import { Quiz } from "@/components/Quiz";
import { literature } from "@/data/literature";

export const LiteratureQuiz = () => {
  const { index, id } = useParams();
  const questions = index === "total" ? literature.flat() : literature[Number(index)];
  const question = questions.find((question) => question.id === Number(id))!;
  const isLast = question.id === questions[questions.length - 1].id;

  return <Quiz question={question} isLast={isLast} endpoint="literature" />;
};
