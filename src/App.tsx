import { Route, Routes } from "react-router";
import { useTheme } from "./hooks/useTheme";
import { MainPage } from "./pages/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LiteraturePage } from "./pages/Literature/LiteraturePage";
import { LiteratureQuiz } from "./pages/Literature/LiteratureQuiz";
import { CyberPage } from "./pages/Cyber/CyberPage";
import { CyberQuiz } from "./pages/Cyber/CyberQuiz ";
import { PhilosophyPage } from "./pages/Philosophy/PhilosophyPage";
import { PhilosophyQuiz } from "./pages/Philosophy/PhilosophyQuiz";
import { AcademyPage } from "./pages/Academy/AcademyPage";
import { AcademyQuiz } from "./pages/Academy/AcademyQuiz ";
import { ReligiaPage } from "./pages/Religia/ReligiaPage";
import { ReligiaQuiz } from "./pages/Religia/ReligiaQuiz";
import { MtaPage } from "./pages/Mta/MtaPage";
import { MtaQuiz } from "./pages/Mta/MtaQuiz";
import { DBPage } from "./pages/DB/DBPage";
import { DBQuiz } from "./pages/DB/DBQuiz";

export const App = () => {
  useTheme();
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/philosophy" element={<PhilosophyPage />} />
      <Route path="/philosophy/:index/:id" element={<PhilosophyQuiz />} />
      <Route path="/academy" element={<AcademyPage />} />
      <Route path="/academy/:index/:id" element={<AcademyQuiz />} />
      <Route path="/religia" element={<ReligiaPage />} />
      <Route path="/religia/:index/:id" element={<ReligiaQuiz />} />
      <Route path="/mta" element={<MtaPage />} />
      <Route path="/mta/:index/:id" element={<MtaQuiz />} />
      <Route path="/db" element={<DBPage />} />
      <Route path="/db/:index/:id" element={<DBQuiz />} />
      <Route path="/cyber" element={<CyberPage />} />
      <Route path="/cyber/:index/:id" element={<CyberQuiz />} />
      <Route path="/literature" element={<LiteraturePage />} />
      <Route path="/literature/:index/:id" element={<LiteratureQuiz />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
