import { IQuestion, QuestionStatus } from "@/types";
import { Button } from "./ui/button";
import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { cn, shuffle } from "@/lib/utils";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface IQuizProps {
  question: IQuestion;
  isLast: boolean;
  endpoint: "history" | "philosophy";
}

export const Quiz = ({ question, isLast, endpoint }: IQuizProps) => {
  const { index } = useParams();
  const [answer, setAnswer] = useState<number | null>(null);
  const [options, setOptions] = useState(question.options);
  const [status, setStatus] = useState<QuestionStatus>("NOT_GIVEN");
  const [correctAnswer, setCorrectAnswer] = useState<string>("");

  useEffect(() => {
    setOptions(shuffle(question.options));
    setCorrectAnswer("");
    setStatus("NOT_GIVEN");
  }, [question.options]);

  const checkAnswer = () => {
    if (!answer) {
      return toast.warning("На вопрос отвечай");
    }

    const correctOption = options.find((option) => option.isRight)!;
    const isCorrect = correctOption.id === answer;
    setStatus(isCorrect ? "CORRECT" : "WRONG");
    if (!isCorrect) setCorrectAnswer(String(correctOption.content));
  };

  return (
    <div className="container flex justify-center my-10">
      <div className="border border-border rounded sm:py-10 sm:px-5 py-6 px-3 max-w-[800px] w-full">
        <div className="flex items-center justify-between mb-4">
          <Button size="icon" asChild>
            <Link to={`/${endpoint}`}>
              <ArrowLeft />
            </Link>
          </Button>
          <h3 className="text-2xl font-semibold">Вопрос {question.id - Number(index) * 20}</h3>
          <div className="w-10 h-10" />
        </div>
        <p className="md:text-lg leading-7 font-medium">{question.content}</p>

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

        {status !== "NOT_GIVEN" && (
          <div
            className={cn(
              "w-full py-5 px-7 mt-8 text-xl font-medium",
              status === "CORRECT" ? "bg-green-600" : "bg-destructive"
            )}
          >
            {status === "CORRECT" ? "Верно!!" : `Правильный ответ: ${correctAnswer}`}
          </div>
        )}

        {status === "NOT_GIVEN" ? (
          <Button className="w-full mt-10 text-lg" onClick={checkAnswer}>
            Проверить
          </Button>
        ) : (
          <Button asChild className="w-full mt-10 text-lg">
            <Link to={isLast ? `/${endpoint}` : `/${endpoint}/${index}/${question.id + 1}`}>
              {isLast ? "Закончить" : "Следующий"}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
