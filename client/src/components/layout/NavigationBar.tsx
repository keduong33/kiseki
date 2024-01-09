import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

import { Book1, Bookmark, Chart1, Firstline, People } from "iconsax-react";
import { LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { PageLocation } from "../../../../types/PageLocation";
import { NavigationMenuLink } from "../shadcn/ui/navigation-menu";

type navBarLink = {
  title: string;
  destination: PageLocation;
  icon?: React.ReactNode;
};
const mainLinks: navBarLink[] = [
  {
    title: "Dashboard",
    destination: PageLocation.Dashboard,
    icon: <LayoutDashboard size="22" />,
  },
  {
    title: "Assessments",
    destination: PageLocation.Assessments,
    icon: <Bookmark size="22" />,
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
  },
];

const utilityLinks: navBarLink[] = [
  { title: "Profile", destination: PageLocation.Profile },
  { title: "Settings", destination: PageLocation.Error },
];

function NavigationBar() {
  const { pathname } = useLocation();
  return (
    <NavigationMenu orientation="vertical" className="2xl:w-[328px] w-[250px] ">
      <NavigationMenuList>
        <div className="flex flex-col pt-20 pb-[150px] gap-11">
          {mainLinks.map((link, index) => {
            const onPage = pathname === link.destination;
            return (
              <NavigationMenuItem key={index} className="flex w-full">
                {onPage && (
                  <div className="border-2 border-white rounded-r-md" />
                )}
                <NavigationMenuLink
                  asChild
                  className={`flex gap-5 pl-7 ${
                    onPage ? "text-white" : "text-secondary"
                  }`}
                >
                  <Link to={link.destination}>
                    {link.icon}
                    {link.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </div>
        <hr />
        <div className="flex flex-col pt-12 pl-12 gap-11">
          {utilityLinks.map((link, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Link to={link.destination} key={index}>
                  {link.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavigationBar;
