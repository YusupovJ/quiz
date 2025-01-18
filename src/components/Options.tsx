import { cn } from "@/lib/utils";
import { IOption, QuestionStatus } from "@/types";

interface IOptionProps {
  options: IOption[];
  answer: number | null;
  setAnswer: (answer: number | null) => void;
  status: QuestionStatus;
}

export const Options = ({ answer, options, setAnswer, status }: IOptionProps) => {
  return (
    <div className="space-y-3 mt-4 flex flex-col">
      {options.map((option) => (
        <button
          type="button"
          key={option.id}
          className={cn(
            "border rounded text-left py-3 px-4 enabled:cursor-pointer enabled:hover:bg-foreground/15 font-bold transition-colors",
            answer === option.id && "bg-foreground text-background",
            status !== "NOT_GIVEN" && option.isRight && "border-green-600 bg-transparent text-foreground",
            status === "WRONG" && option.id === answer && "border-destructive bg-transparent text-foreground"
          )}
          disabled={status !== "NOT_GIVEN" || answer === option.id}
          onClick={() => setAnswer(option.id)}
        >
          {option.content}
        </button>
      ))}
    </div>
  );
};
