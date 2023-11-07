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
        navigate("/");
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
        navigate("/study-plan");
      },
    },
    {
      title: "Insights",
      src: "line-chart",
      onclick: () => {
        navigate("/insights");
      },
    },
    {
      title: "Subject Visualiser",
      src: "route",
      onclick: () => {
        navigate("/subject-visualiser");
      },
    },
  ];

  return (
    <div className="flex flex-row self-center gap-2 bg-transparent h-fit w-fit sm:hidden">
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
        navigate("/");
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
        navigate("/study-plan");
      },
    },
    {
      title: "Insights",
      src: "line-chart",
      onclick: () => {
        navigate("/insights");
      },
    },
    {
      title: "Subject Visualiser",
      src: "route",
      onclick: () => {
        navigate("/subject-visualiser");
      },
    },

    // { title: "Settings", src: "setting", gap: true },
  ];

  return (
    <div className="flex-col hidden w-20 h-screen bg-white shadow-lg dark:bg-gray-900 sm:flex">
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
      <div className="pt-4">
        <Divider />
        <SideBarIcon
          icon={
            <img
              src="/assets/user.svg"
              className={`h-8 cursor-pointer duration-500`}
              alt="User"
              onClick={() => {
                navigate("/user");
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
    <span className="sidebar-tooltip sm:group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;
