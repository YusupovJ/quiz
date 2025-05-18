import { Route, Routes } from "react-router";
import { useTheme } from "./hooks/useTheme";
import { MainPage } from "./pages/MainPage";
import { HistoryPage } from "./pages/HistoryPage";
import { HistoryQuiz } from "./pages/HistoryQuiz";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PhilosophyPage } from "./pages/PhilosophyPage";
import { PhilosophyQuiz } from "./pages/PhilosophyQuiz";
import { AcademyPage } from "./pages/AcademyPage";
import { AcademyQuiz } from "./pages/AcademyQuiz ";

export const App = () => {
  useTheme();
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/philosophy" element={<PhilosophyPage />} />
      <Route path="/academy" element={<AcademyPage />} />
      <Route path="/history/:index/:id" element={<HistoryQuiz />} />
      <Route path="/philosophy/:index/:id" element={<PhilosophyQuiz />} />
      <Route path="/academy/:index/:id" element={<AcademyQuiz />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
