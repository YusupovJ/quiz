import { Link } from "react-router";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface IHeadingProps {
  endpoint: "history" | "philosophy";
  orderNumber: number;
}

export const Heading = ({ endpoint, orderNumber }: IHeadingProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <Button size="icon" asChild>
        <Link to={`/${endpoint}`}>
          <ArrowLeft />
        </Link>
      </Button>
      <h3 className="text-2xl font-semibold">Вопрос {orderNumber}</h3>
      <div className="w-10 h-10" />
    </div>
  );
};
