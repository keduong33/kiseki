import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { PageLocation } from "./PageLocation";

type MenuStructure = {
  title: string;
  src: string;
  onclick: () => void;
  gap?: boolean;
};

export const HorizontalNavBar = () => {
  const navigate = useNavigate();

  const Menus: MenuStructure[] = [
    {
      title: "Dashboard",
      src: "dashboard",
      onclick: () => {
        navigate(PageLocation.Dashboard);
      },
    },

    {
      title: "Assessments",
      src: "book-open-check",
      onclick: () => {
        navigate(PageLocation.Assessments);
      },
    },

    // { title: "Practice", src: "practice" },
    {
      title: "Study Plan",
      src: "study",
      onclick: () => {
        navigate(PageLocation.StudyPlan);
      },
    },
    {
      title: "Insights",
      src: "line-chart",
      onclick: () => {
        navigate(PageLocation.Insights);
      },
    },
    {
      title: "Subject Visualiser",
      src: "route",
      onclick: () => {
        navigate(PageLocation.SubjectVisualiser);
      },
    },
  ];

  return (
    <div className="flex flex-row self-center gap-2 bg-transparent h-fit w-fit lg:hidden">
      {Menus.map((menu, index) => (
        <div key={index} onClick={menu.onclick}>
          <SideBarIcon
            icon={<img src={`/assets/${menu.src}.svg`} alt={menu.title} />}
            text={menu.title}
          />
        </div>
      ))}
    </div>
  );
};

export const VerticalNavBar = () => {
  const navigate = useNavigate();

  const Menus: MenuStructure[] = [
    {
      title: "Dashboard",
      src: "dashboard",
      onclick: () => {
        navigate(PageLocation.Dashboard);
      },
    },

    {
      title: "Assessments",
      src: "book-open-check",
      onclick: () => {
        navigate(PageLocation.Assessments);
      },
    },

    // { title: "Practice", src: "practice" },
    {
      title: "Study Plan",
      src: "study",
      onclick: () => {
        navigate(PageLocation.StudyPlan);
      },
    },
    {
      title: "Insights",
      src: "line-chart",
      onclick: () => {
        navigate(PageLocation.Insights);
      },
    },
    {
      title: "Subject Visualiser",
      src: "route",
      onclick: () => {
        navigate(PageLocation.SubjectVisualiser);
      },
    },

    // { title: "Settings", src: "setting", gap: true },
  ];

  return (
    <div className="flex-col hidden w-20 h-screen bg-white shadow-lg dark:bg-gray-900 lg:flex">
      <SideBarIcon
        icon={
          <img
            src="/assets/bb.svg"
            className={`h-8 cursor-pointer duration-500`}
            alt="Big Brain"
            onClick={() => navigate(PageLocation.Dashboard)}
          />
        }
        text="BigBrain"
      />
      <Divider />
      <ul>
        {Menus.map((menu, index) => (
          <li key={index} className={`text-gray-900`} onClick={menu.onclick}>
            <SideBarIcon
              icon={<img src={`/assets/${menu.src}.svg`} alt={menu.title} />}
              text={menu.title}
            />
          </li>
        ))}
      </ul>
      <div className="">
        <Divider />
        <SideBarIcon
          icon={
            <img
              src="/assets/user.svg"
              className={`h-8 cursor-pointer duration-500`}
              alt="User"
              onClick={() => {
                navigate(PageLocation.User);
              }}
            />
          }
          text="User"
        />
      </div>
    </div>
  );
};

const SideBarIcon = ({
  icon,
  text = "tooltip 💡",
}: {
  icon: unknown;
  text?: string;
}) => (
  <div className="sidebar-icon group">
    {icon as ReactNode}
    <span className="sidebar-tooltip lg:group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;
