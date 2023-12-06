import { ClerkProvider, SignIn } from "@clerk/clerk-react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { config } from "./common/config";
import { PageLocation } from "./components/page/PageLocation";
import ProtectedPage from "./components/page/ProtectedPage";
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

const { clerk } = config;

function App() {
  const navigate = useNavigate();

  if (!clerk.publisableKey) {
    console.error("Missing Publishable Key");
    return <>Something wrong, please contact me</>;
  }

  return (
    <ClerkProvider
      publishableKey={clerk.publisableKey}
      navigate={(to) => navigate(to)}
    >
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
      </Routes>
    </ClerkProvider>
  );
}

export default App;
