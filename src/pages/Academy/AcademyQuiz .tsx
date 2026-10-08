import { Quiz } from "@/components/Quiz";
import { academy } from "@/data/academy";
import { useQuestions } from "@/hooks/useQuestions";

export const AcademyQuiz = () => {
  const { isLast, question } = useQuestions(academy);

  return <Quiz question={question} isLast={isLast} endpoint="academy" />;
};
