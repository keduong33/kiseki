import { ClerkProvider } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import { config } from "./common/config";
import { VerticalNavBar } from "./components/page/NavigationBar";
import { ThemeProvider } from "./components/page/Theme/ThemeProvider";

const { clerk } = config;

function App() {
  const navigate = useNavigate();

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
        <div className="flex flex-row w-screen">
          <VerticalNavBar />
          <main>
            <Outlet />
          </main>
        </div>
      </ClerkProvider>
    </ThemeProvider>
  );
}

export default App;
