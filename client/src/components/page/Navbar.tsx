import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { PageLocation } from "./PageLocation";

type MenuStructure = {
  title: string;
  src: string;
  onclick: () => void;
  gap?: boolean;
};

const Navbar = () => {
  const navigate = useNavigate();

  const Menus: MenuStructure[] = [
    {
      title: "Dashboard",
      src: "dashboard",
      onclick: () => {
        navigate("/");
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
    <div className="fixed top-0 left-0 flex flex-col w-20 h-screen bg-white shadow-lg dark:bg-gray-900">
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
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default Navbar;
