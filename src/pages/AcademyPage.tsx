import { List } from "@/components/List";
import { Button } from "@/components/ui/button";
import { academy } from "@/data/academy";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export const AcademyPage = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between my-4">
        <Button asChild variant="secondary">
          <Link to="/">
            <ArrowLeft /> <span className="hidden md:inline">На главную</span>
          </Link>
        </Button>
        <h3 className="lg:text-4xl md:text-2xl text-xl font-bold">Тесты по академическому писанию</h3>
        <div className="md:w-[134px] w-10 h-10 hidden sm:block" />
      </div>
      <List endpoint="academy" variants={academy} />
    </div>
  );
};
