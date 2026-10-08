import { Quiz } from "@/components/Quiz";
import { cyber } from "@/data/cyber";
import { useQuestions } from "@/hooks/useQuestions";

export const CyberQuiz = () => {
  const { isLast, question } = useQuestions(cyber);

  return <Quiz question={question} isLast={isLast} endpoint="cyber" />;
};
