import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { PageLocation } from "../../../../types/PageLocation";

type navBarLink = {
  title: string;
  destination: PageLocation;
  icon?: LucideIcon;
};
const mainLinks: navBarLink[] = [
  { title: "Dashboard", destination: PageLocation.Dashboard },
  { title: "Assessments", destination: PageLocation.Assessments },
  { title: "Study Plan", destination: PageLocation.StudyPlan },
  { title: "Insights", destination: PageLocation.Insights },
  { title: "Diagnostic Quiz", destination: PageLocation.Assessments },
  { title: "Community", destination: PageLocation.Error },
];

const utilityLinks: navBarLink[] = [
  { title: "Profile", destination: PageLocation.Profile },
  { title: "Settings", destination: PageLocation.Error },
];

function NavigationBar() {
  return (
    <aside className="2xl:w-[300px] w-[250px] h-screen ">
      <div>Logo</div>
      <nav className="sidebar">
        {mainLinks.map((link) => (
          <Link to={link.destination}>{link.title}</Link>
        ))}
        <hr />
        {utilityLinks.map((link) => (
          <Link to={link.destination}>{link.title}</Link>
        ))}
      </nav>
    </aside>
  );
}

export default NavigationBar;
