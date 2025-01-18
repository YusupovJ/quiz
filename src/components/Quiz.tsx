import { IQuestion, QuestionStatus } from "@/types";
import { Button } from "./ui/button";
import { Link, useParams } from "react-router";
import { shuffle } from "@/lib/utils";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Heading } from "./Heading";
import { Options } from "./Options";
import { Alert } from "./Alert";

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
        <Heading endpoint={endpoint} orderNumber={question.id - Number(index) * 20} />
        <p className="md:text-lg leading-7 font-medium">{question.content}</p>

        <Options answer={answer} options={options} setAnswer={setAnswer} status={status} />
        <Alert correctAnswer={correctAnswer} status={status} />

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
