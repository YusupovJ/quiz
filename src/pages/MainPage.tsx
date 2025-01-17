import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export const MainPage = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col space-y-5">
        <Button asChild variant="outline" className="text-lg px-16 py-8">
          <Link to="/history">История</Link>
        </Button>
        <Button asChild variant="outline" className="text-lg px-16 py-8">
          <Link to="/philosophy">Философия</Link>
        </Button>
      </div>
    </main>
  );
};
