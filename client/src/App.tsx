import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageLocation } from "./components/page/PageLocation";
import AddQuestions from "./pages/AddQuestions/AddQuestions";
import Assessments from "./pages/Assessments/Assessments";
import Dashboard from "./pages/Dashboard/Dashboard";
import Insights from "./pages/Insights/Insights";
import MySubjects from "./pages/MySubjects/MySubjects";
import SubjectVisualiser from "./pages/MySubjects/SubjectVisualiser/SubjectVisualiser";
import Profile from "./pages/Profile/Profile";
import Quiz from "./pages/Quiz/Quiz";
import QuizSummary from "./pages/QuizSummary/QuizSummary";
import StudyPlan from "./pages/StudyPlan/StudyPlan";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<>Something wrong</>} />
          <Route path={PageLocation.Dashboard} element={<Dashboard />} />

          <Route path={PageLocation.Assessments} element={<Assessments />} />
          <Route path={PageLocation.Quiz} element={<Quiz />} />
          <Route path={PageLocation.QuizSummary} element={<QuizSummary />} />

          <Route path={PageLocation.MySubjects} element={<MySubjects />} />
          <Route
            path={`${PageLocation.MySubjects}/:subject`}
            element={<SubjectVisualiser />}
          />
          <Route path={PageLocation.StudyPlan} element={<StudyPlan />} />
          <Route path={PageLocation.Insights} element={<Insights />} />

          <Route path={PageLocation.AddQuestions} element={<AddQuestions />} />

          <Route path={PageLocation.Profile} element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
