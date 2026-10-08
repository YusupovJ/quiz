import { Quiz } from "@/components/Quiz";
import { religia } from "@/data/religia";
import { useQuestions } from "@/hooks/useQuestions";

export const ReligiaQuiz = () => {
  const { isLast, question } = useQuestions(religia);

  return <Quiz question={question} isLast={isLast} endpoint="religia" />;
};
