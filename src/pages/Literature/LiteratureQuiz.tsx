import { Quiz } from "@/components/Quiz";
import { literature } from "@/data/literature";
import { useQuestions } from "@/hooks/useQuestions";

export const LiteratureQuiz = () => {
  const { isLast, question } = useQuestions(literature);
  return <Quiz question={question} isLast={isLast} endpoint="literature" />;
};
