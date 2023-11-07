import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { HorizontalNavBar, VerticalNavBar } from "./NavigationBar";
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

  useEffect(() => {
    document.title = pageTitle ?? "Edupath";
  }, [pageTitle]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col w-screen h-screen sm:flex-row ">
        <VerticalNavBar />
        <div className="flex flex-col w-full h-auto sm:h-full">
          <div className="flex justify-between px-2 pt-4 sm:px-4">
            <h1>{pageTitle}</h1>
            <ModeToggle />
          </div>
          <main className="flex flex-col p-4 overflow-y-auto">{children}</main>
        </div>
        <HorizontalNavBar />
      </div>
    </ThemeProvider>
  );
};

export default Page;
