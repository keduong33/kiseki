import { ChevronLeft } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { HorizontalNavBar, VerticalNavBar } from "./NavigationBar";
import { PageLocation } from "./PageLocation";
import { ModeToggle } from "./Theme/ModeToggle";
import { ThemeProvider } from "./Theme/ThemeProvider";

const isLoggedIn = true;

type pageProps = {
  children: ReactNode;
  pageTitle?: string;
  hideNavBar?: boolean;
  showBackButton?: boolean;
};

const Page = ({
  children,
  pageTitle,
  hideNavBar,
  showBackButton,
}: pageProps) => {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate(PageLocation.Authentication);
  }

  useEffect(() => {
    document.title = pageTitle ?? "Edupath";
  }, [pageTitle]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col w-screen h-screen lg:flex-row">
        {!hideNavBar && <VerticalNavBar />}
        <div className="flex flex-col w-full mb-auto lg:h-full">
          <div className="flex justify-between px-2 pt-4 sm:px-4">
            {pageTitle && <h1>{pageTitle}</h1>}
            {showBackButton && (
              <ChevronLeft
                onClick={() => {
                  navigate(-1);
                }}
              />
            )}
            <ModeToggle />
          </div>
          <main className="flex flex-col p-4 overflow-y-auto">{children}</main>
        </div>
        {!hideNavBar && <HorizontalNavBar />}
      </div>
    </ThemeProvider>
  );
};

export default Page;
