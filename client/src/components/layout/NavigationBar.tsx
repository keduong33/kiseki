import { Book1, Bookmark, Chart1, Firstline, People } from "iconsax-react";
import { LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { PageLocation } from "../../../../types/PageLocation";

type navBarLink = {
  title: string;
  destination: PageLocation;
  icon?: React.ReactNode;
  disabled?: boolean;
};
const mainLinks: navBarLink[] = [
  {
    title: "Dashboard",
    destination: PageLocation.Dashboard,
    icon: <LayoutDashboard size="22" />,
    disabled: true,
  },
  {
    title: "Assessments",
    destination: PageLocation.Assessments,
    icon: <Bookmark size="22" />,
    disabled: true,
  },
  {
    title: "Study Plan",
    destination: PageLocation.StudyPlan,
    icon: <Firstline size="22" />,
  },
  {
    title: "Insights",
    destination: PageLocation.Insights,
    icon: <Chart1 size="22" />,
  },
  {
    title: "Diagnostic Quiz",
    destination: PageLocation.Assessments,
    icon: <Book1 size="22" />,
  },
  {
    title: "Community",
    destination: PageLocation.Error,
    icon: <People size="22" />,
    disabled: true,
  },
];

const utilityLinks: navBarLink[] = [
  { title: "Profile", destination: PageLocation.Profile },
  { title: "Settings", destination: PageLocation.Error },
];

function NavigationBar() {
  const { pathname } = useLocation();
  return (
    <aside className="2xl:w-[328px] w-[250px] bg-violet-darker">
      <div className="flex flex-col h-[80%] pt-20 gap-11">
        {mainLinks.map((link, index) => {
          const onPage = pathname === link.destination;
          return (
            <div key={index} className="flex w-full">
              {onPage && <div className="border-2 border-white rounded-r-md" />}
              <Link
                to={link.destination}
                className={`flex gap-5 pl-7 ${
                  !onPage && "text-violet-inactive"
                }`}
              >
                {link.icon}
                {`${link.title} ${link.disabled ? "(Coming Soon)" : ""}`}
              </Link>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="flex flex-col pt-12 pl-12 gap-11">
        {utilityLinks.map((link, index) => (
          <Link to={link.destination} key={index}>
            {link.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default NavigationBar;
