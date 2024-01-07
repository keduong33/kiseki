import { SignIn } from "@clerk/clerk-react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { PageLocation } from "../../../types/PageLocation";
import App from "../App";
import ProtectedPage from "../components/layout/ProtectedPage";
import AddQuestions from "../pages/AddQuestions/AddQuestions";
import Assessments from "../pages/Assessments/Assessments";
import Dashboard from "../pages/Dashboard/Dashboard";
import Insights from "../pages/Insights/Insights";
import MySubjects from "../pages/MySubjects/MySubjects";
import SubjectVisualiser from "../pages/MySubjects/SubjectVisualiser/SubjectVisualiser";
import Profile from "../pages/Profile/Profile";
import Quiz from "../pages/Quiz/Quiz";
import QuizSummary from "../pages/QuizSummary/QuizSummary";
import StudyPlan from "../pages/StudyPlan/StudyPlan";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<>Uh Oh</>}>
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

      <Route
        path="/sign-in/*"
        element={<SignIn routing="path" path="/sign-in" />}
      />
      <Route
        path={PageLocation.Profile}
        element={
          <ProtectedPage>
            <Profile />
          </ProtectedPage>
        }
      />
    </Route>
  )
);
