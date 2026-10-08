import { Quiz } from "@/components/Quiz";
import { db } from "@/data/db";
import { useQuestions } from "@/hooks/useQuestions";

export const DBQuiz = () => {
  const { isLast, question } = useQuestions(db);

  return <Quiz question={question} isLast={isLast} endpoint="db" />;
};
