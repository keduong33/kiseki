import { Book1, Bookmark, Firstline, People } from "iconsax-react";
import { LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { PageLocation } from "../../../../types/PageLocation";

type navBarLink = {
  title: string;
  destination: PageLocation;
  icon?: React.ReactNode;
  comingSoon?: boolean;
  disabled?: boolean;
};

export enum IconSize {
  small = 12,
  medium = 22,
}

const mainLinks: navBarLink[] = [
  {
    title: "Dashboard",
    destination: PageLocation.Dashboard,
    icon: <LayoutDashboard size={IconSize.medium} />,
    comingSoon: true,
  },
  {
    title: "Study Plan",
    destination: PageLocation.StudyPlan,
    icon: <Firstline size={IconSize.medium} />,
  },
  {
    title: "Diagnostic Quiz",
    destination: PageLocation.DiagnosticQuiz,
    icon: <Book1 size={IconSize.medium} />,
  },
  {
    title: "Assessments",
    destination: PageLocation.ComingSoon,
    icon: <Bookmark size={IconSize.medium} />,
    comingSoon: true,
  },
  {
    title: "Community",
    destination: PageLocation.Error,
    icon: <People size={IconSize.medium} />,
    comingSoon: true,
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
    <aside className="2xl:w-[328px] w-[250px] bg-violet-darker flex flex-col overflow-auto pb-6">
      <div className="flex flex-col flex-1 pt-10 2xl:pt-20 gap-11">
        {mainLinks.map((link, index) => {
          const onPage = pathname === link.destination;
          if (!link.disabled)
            return (
              <div key={index} className="flex w-full">
                {onPage && (
                  <div className="border-2 border-white rounded-r-md" />
                )}
                <Link
                  to={link.destination}
                  className={`flex gap-5 pl-7  ${
                    !onPage && "text-violet-inactive"
                  }`}
                >
                  {link.icon}
                  {`${link.title}`}
                  <br />
                  {link.comingSoon ? "(Coming Soon)" : ""}
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
