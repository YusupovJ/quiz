import { Button } from "@/components/ui/button";
import { philosophy } from "@/data/philosophy";
import { ArrowLeft, File } from "lucide-react";
import { Link } from "react-router";

export const PhilosophyPage = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between my-4">
        <Button asChild variant="secondary">
          <Link to="/">
            <ArrowLeft /> <span className="hidden md:inline">На главную</span>
          </Link>
        </Button>
        <h3 className="md:text-4xl text-2xl font-bold">Тесты по философии</h3>
        <div className="md:w-[134px] w-10 h-10 hidden sm:block" />
      </div>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 my-5">
        {philosophy.map((variant, index) => {
          return (
            <li key={index} className="border border-border rounded hover:bg-foreground/15 transition-colors">
              <Link to={`/philosophy/${index}/${variant[0].id}`} className="flex flex-col items-center p-6">
                <File size="48px" />
                <span className="text-lg mt-4 font-medium">Вариант {index + 1}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
