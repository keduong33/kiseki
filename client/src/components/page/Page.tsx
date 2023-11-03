import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { PageLocation } from "./PageLocation";
import { ThemeProvider } from "./ThemeProvider";

const isLoggedIn = true;
const Page = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate(PageLocation.Authentication);
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex">
        <Navbar />
        <div className="w-full">
          <main>{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Page;
