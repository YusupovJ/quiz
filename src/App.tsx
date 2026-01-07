import { Route, Routes } from "react-router";
import { useTheme } from "./hooks/useTheme";
import { MainPage } from "./pages/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage";
// import { HistoryPage } from "./pages/HistoryPage";
// import { HistoryQuiz } from "./pages/HistoryQuiz";
// import { PhilosophyPage } from "./pages/PhilosophyPage";
// import { PhilosophyQuiz } from "./pages/PhilosophyQuiz";
// import { AcademyPage } from "./pages/AcademyPage";
// import { AcademyQuiz } from "./pages/AcademyQuiz ";
// import { ReligiaPage } from "./pages/ReligiaPage";
// import { ReligiaQuiz } from "./pages/ReligiaQuiz";
// import { MtaPage } from "./pages/MtaPage";
// import { MtaQuiz } from "./pages/MtaQuiz";
import { DBPage } from "./pages/DBPage";
import { DBQuiz } from "./pages/DBQuiz";

export const App = () => {
  useTheme();
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/history" element={<HistoryPage />} />
      <Route path="/history/:index/:id" element={<HistoryQuiz />} />
      <Route path="/philosophy" element={<PhilosophyPage />} />
      <Route path="/philosophy/:index/:id" element={<PhilosophyQuiz />} />
      <Route path="/academy" element={<AcademyPage />} />
      <Route path="/academy/:index/:id" element={<AcademyQuiz />} />
      <Route path="/religia" element={<ReligiaPage />} />
      <Route path="/religia/:index/:id" element={<ReligiaQuiz />} />
      <Route path="/mta" element={<MtaPage />} />
      <Route path="/mta/:index/:id" element={<MtaQuiz />} /> */}
      <Route path="/db" element={<DBPage />} />
      <Route path="/db/:index/:id" element={<DBQuiz />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
