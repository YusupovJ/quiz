import { List } from "@/components/List";
import { Button } from "@/components/ui/button";
import { history } from "@/data/history";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export const HistoryPage = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between my-4">
        <Button asChild variant="secondary">
          <Link to="/">
            <ArrowLeft /> <span className="hidden md:inline">На главную</span>
          </Link>
        </Button>
        <h3 className="md:text-4xl text-2xl font-bold">Тесты по истории</h3>
        <div className="md:w-[134px] w-10 h-10 hidden sm:block" />
      </div>
      <List endpoint="history" variants={history} />
    </div>
  );
};
