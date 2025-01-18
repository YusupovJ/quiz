import { Route, Routes } from "react-router";
import { useTheme } from "./hooks/useTheme";
import { MainPage } from "./pages/MainPage";
import { HistoryPage } from "./pages/HistoryPage";
import { HistoryQuiz } from "./pages/HistoryQuiz";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PhilosophyPage } from "./pages/PhilosophyPage";
import { PhilosophyQuiz } from "./pages/PhilosophyQuiz";

export const App = () => {
  useTheme();
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/philosophy" element={<PhilosophyPage />} />
      <Route path="/history/:index/:id" element={<HistoryQuiz />} />
      <Route path="/philosophy/:index/:id" element={<PhilosophyQuiz />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
