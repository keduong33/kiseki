import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
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
          <NavBar />
        </div>
        <div className="flex flex-col w-full mx-4 mt-4">
          <div className="flex justify-between w-full">
            <h1>{pageTitle}</h1>
            <ModeToggle />
          </div>
          <main className="h-full overflow-y-scroll">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Page;
