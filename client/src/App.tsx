import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageLocation } from "./components/page/PageLocation";
import Assessments from "./pages/Assessments/Assessments";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path={PageLocation.Assessments} element={<Assessments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
