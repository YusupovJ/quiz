import { IQuestion, QuestionStatus, TEndpoints } from "@/types";
import { useNavigate, useParams } from "react-router";
import { shuffle } from "@/lib/utils";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Heading } from "./Heading";
import { Options } from "./Options";
import { Alert } from "./Alert";
import { useQuestionStore } from "@/store/questionStore";
import { Actions } from "./Actions";

interface IQuizProps {
  question: IQuestion;
  isLast: boolean;
  endpoint: TEndpoints;
}

export const Quiz = ({ question, endpoint }: IQuizProps) => {
  const { index } = useParams();
  const navigate = useNavigate();

  const { questions, currentOrder, next, correct, wrong, result } = useQuestionStore();
  const isLast = questions.length - 1 === currentOrder;
  const nextQuestion = questions[currentOrder + 1];

  const [answer, setAnswer] = useState<number | null>(null);
  const [options, setOptions] = useState(question.options);
  const [status, setStatus] = useState<QuestionStatus>("NOT_GIVEN");
  const [correctAnswer, setCorrectAnswer] = useState<string>("");

  useEffect(() => {
    setOptions(shuffle(question.options));
    setCorrectAnswer("");
    setStatus("NOT_GIVEN");
  }, [question.options]);

  useEffect(() => {
    const currentResult = result[currentOrder];

    if (currentResult) {
      const isCorrect = currentResult === "1";
      setStatus(isCorrect ? "CORRECT" : "WRONG");
    }
  }, [result, currentOrder]);

  const checkAnswer = () => {
    if (!answer) {
      return toast.warning("На вопрос отвечай");
    }

    const correctOption = options.find((option) => option.isRight)!;
    const isCorrect = correctOption.id === answer;

    if (isCorrect) {
      setStatus("CORRECT");
      correct();
    } else {
      setCorrectAnswer(String(correctOption.content));
      setStatus("WRONG");
      wrong();
    }
  };

  const onNext = () => {
    next();
    navigate(`/${endpoint}/${index}/${nextQuestion.id}`);
  };

  return (
    <div className="container flex justify-center my-10">
      <div className="border border-border rounded sm:py-10 sm:px-5 py-6 px-3 max-w-[800px] w-full">
        <Heading endpoint={endpoint} />
        <p className="md:text-lg leading-7 font-medium">{question.content}</p>

        <Options answer={answer} options={options} setAnswer={setAnswer} status={status} />
        <Alert correctAnswer={correctAnswer} status={status} />

        <Actions checkAnswer={checkAnswer} isLast={isLast} onNext={onNext} status={status} />
      </div>
    </div>
  );
};
