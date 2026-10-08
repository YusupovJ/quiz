import { Quiz } from "@/components/Quiz";
import { philosophy } from "@/data/philosophy";
import { useQuestions } from "@/hooks/useQuestions";

export const PhilosophyQuiz = () => {
  const { isLast, question } = useQuestions(philosophy);

  return <Quiz question={question} isLast={isLast} endpoint="philosophy" />;
};
