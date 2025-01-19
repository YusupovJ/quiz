import { QuestionStatus } from "@/types";
import { Button } from "./ui/button";
import { OnFinish } from "./OnFinish";

interface IActionsProps {
  status: QuestionStatus;
  checkAnswer: () => void;
  isLast: boolean;
  onNext: () => void;
}

export const Actions = ({ status, checkAnswer, isLast, onNext }: IActionsProps) => {
  if (status === "NOT_GIVEN") {
    return (
      <Button className="w-full mt-10 text-lg" onClick={checkAnswer}>
        Проверить
      </Button>
    );
  }

  if (!isLast) {
    return (
      <Button className="w-full mt-10 text-lg" onClick={onNext}>
        Следующий
      </Button>
    );
  }

  return <OnFinish />;
};
