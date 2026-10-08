import { Quiz } from "@/components/Quiz";
import { mta } from "@/data/mta";
import { useQuestions } from "@/hooks/useQuestions";

export const MtaQuiz = () => {
  const { isLast, question } = useQuestions(mta);

  return <Quiz question={question} isLast={isLast} endpoint="mta" />;
};
