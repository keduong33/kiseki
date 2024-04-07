import { SignIn } from "@clerk/clerk-react";
import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { PageLocation } from "../../../types/PageLocation";
import App from "../App";
import Assessments from "../pages/Assessments/Assessments";
import ComingSoon from "../pages/ComingSoon/ComingSoon";
import Dashboard from "../pages/Dashboard/Dashboard";
import Quiz from "../pages/Quiz/Quiz";

const StudyPlan = lazy(() => import("../pages/StudyPlan/StudyPlan"));
const QuizSummary = lazy(() => import("../pages/QuizSummary/QuizSummary"));
const SubjectVisualiser = lazy(
  () => import("../pages/MySubjects/SubjectVisualiser/SubjectVisualiser")
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <Suspense>
          <App />
        </Suspense>
      }
      errorElement={<>Uh Oh</>}
    >
      <Route path="*" element={<>Something wrong</>} />
      <Route path={PageLocation.ComingSoon} element={<ComingSoon />} />

      <Route path={PageLocation.Dashboard} element={<Dashboard />} />

      <Route path={PageLocation.DiagnosticQuiz} element={<Assessments />} />
      <Route path={PageLocation.Quiz} element={<Quiz />} />
      <Route path={PageLocation.QuizSummary} element={<QuizSummary />} />

      <Route
        path={`${PageLocation.MySubjects}/:subject`}
        element={<SubjectVisualiser />}
      />
      <Route path={PageLocation.StudyPlan} element={<StudyPlan />} />

      <Route
        path="/sign-in/*"
        element={<SignIn routing="path" path="/sign-in" />}
      />
    </Route>
  )
);
