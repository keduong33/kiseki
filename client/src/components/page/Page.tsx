import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
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
      <div className="flex w-screen h-screen">
        <div className="w-fit">
          <NavigationBar />
        </div>
        <div className="flex flex-col w-full mx-2 mt-4 lg:mx-4">
          <div className="flex justify-between w-full">
            <h1>{pageTitle}</h1>
            <ModeToggle />
          </div>
          <main className="w-full h-full pb-4 overflow-y-auto">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Page;
