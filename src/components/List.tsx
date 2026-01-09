import { shuffle } from "@/lib/utils";
import { useQuestionStore } from "@/store/questionStore";
import { IQuestion, TEndpoints } from "@/types";
import { File, Files } from "lucide-react";
import { useNavigate } from "react-router";

interface IListProps {
  variants: Array<IQuestion[]>;
  endpoint: TEndpoints;
}

export const List = ({ endpoint, variants }: IListProps) => {
  const { start } = useQuestionStore();
  const navigate = useNavigate();

  const onStart = (variant: IQuestion[], index: number | string) => {
    const shuffledVariant = shuffle(variant);
    start(shuffledVariant);
    navigate(`/${endpoint}/${index}/${shuffledVariant[0].id}`);
  };

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 my-5">
      {variants.map((variant, index) => {
        return (
          <li
            key={index}
            className="border border-border rounded hover:bg-foreground/15 transition-colors flex flex-col items-center p-6"
            onClick={() => onStart(variant, index)}
          >
            <File size="48px" />
            <span className="text-lg mt-4 font-medium">Вариант {index + 1}</span>
          </li>
        );
      })}
      <li
        className="border border-border rounded hover:bg-foreground/15 transition-colors flex flex-col items-center p-6"
        onClick={() => onStart(variants.flat(), "total")}
      >
        <Files size="48px" />
        <span className="text-lg mt-4 font-medium">Общий</span>
      </li>
    </ul>
  );
};
