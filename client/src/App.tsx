import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageLocation } from "./components/page/PageLocation";
import Assessments from "./pages/Assessments/Assessments";
import Dashboard from "./pages/Dashboard/Dashboard";
import Insights from "./pages/Insights/Insights";
import StudyPlan from "./pages/StudyPlan/StudyPlan";
import SubjectVisualiser from "./pages/SubjectVisualiser/SubjectVisualiser";
import Test from "./pages/Test/Test";
import TestSummary from "./pages/TestSummary/TestSummary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={PageLocation.Dashboard} element={<Dashboard />} />

          <Route path={PageLocation.Assessments} element={<Assessments />} />
          <Route path={PageLocation.Test} element={<Test />} />
          <Route path={PageLocation.TestSummary} element={<TestSummary />} />

          <Route
            path={PageLocation.SubjectVisualiser}
            element={<SubjectVisualiser />}
          />
          <Route path={PageLocation.StudyPlan} element={<StudyPlan />} />
          <Route path={PageLocation.Insights} element={<Insights />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
