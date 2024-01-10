import { ClerkProvider } from "@clerk/clerk-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { PageLocation } from "../../types/PageLocation";
import { config } from "./common/config";
import NavigationBar from "./components/layout/NavigationBar";
import { ThemeProvider } from "./components/layout/Theme/ThemeProvider";

const { clerk } = config;

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hideNavigationBar = pathname === PageLocation.Quiz;

  if (!clerk.publisableKey) {
    console.error("Missing Publishable Key");
    return <>Something wrong, please contact me: myemail@email.com</>;
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ClerkProvider
        publishableKey={clerk.publisableKey}
        navigate={(to) => navigate(to)}
      >
        <div className="flex flex-row w-screen h-screen">
          {!hideNavigationBar && <NavigationBar />}
          <main className="w-full h-screen px-[100px] overflow-y-scroll">
            <Outlet />
          </main>
        </div>
      </ClerkProvider>
    </ThemeProvider>
  );
}

export default App;
