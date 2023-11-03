import { Moon, Sun } from "lucide-react";
import { Switch } from "../../shadcn/ui/switch";
import { useTheme } from "./ThemeProvider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const changeTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("dark");
  };

  return (
    <div className="flex">
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all " />
      <Switch checked={theme === "dark"} onClick={changeTheme} />
      <Moon className="h-[1.2rem] w-[1.2rem] transition-all " />
    </div>
  );
}
