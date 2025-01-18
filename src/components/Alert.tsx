import { cn } from "@/lib/utils";
import { QuestionStatus } from "@/types";

interface IAlertProps {
  status: QuestionStatus;
  correctAnswer: string;
}

export const Alert = ({ status, correctAnswer }: IAlertProps) => {
  if (status === "NOT_GIVEN") return null;

  return (
    <div
      className={cn(
        "w-full py-5 px-7 mt-8 text-xl font-medium",
        status === "CORRECT" ? "bg-green-600" : "bg-destructive"
      )}
    >
      {status === "CORRECT" ? "Верно!!" : `Правильный ответ: ${correctAnswer}`}
    </div>
  );
};
