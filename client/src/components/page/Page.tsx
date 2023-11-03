import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { PageLocation } from "./PageLocation";
import { ModeToggle } from "./Theme/ModeToggle";
import { ThemeProvider } from "./Theme/ThemeProvider";

const isLoggedIn = true;
const Page = ({
  children,
  pageTitle,
}: {
  children: ReactNode;
  pageTitle?: string;
}) => {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate(PageLocation.Authentication);
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex">
        <div className="w-fit">
          <NavBar />
        </div>
        <div className="flex flex-col w-full h-full px-4 pt-4 overflow-y-scroll">
          <div className="flex justify-between w-full">
            <h1>{pageTitle}</h1>
            <ModeToggle />
          </div>
          <main>{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Page;
