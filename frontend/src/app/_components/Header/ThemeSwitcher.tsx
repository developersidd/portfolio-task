import Icon from "@/components/common/Icons";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("dark");
  // handle the theme change
  const handleChangeTheme = (theme: string) => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)");
    // update the theme based on the function argument
    const updateTheme = () => {
      const storedTheme = localStorage.getItem("theme");
      const themeSetter = (theme: string) => {
        document.documentElement.setAttribute("data-theme", theme);
        setTheme(theme);
      };
      // if the user has already selected a theme, use it instead of the system preference
      if (storedTheme !== null) {
        themeSetter(storedTheme);
      } else {
        switch (true) {
          case prefersDark.matches:
            themeSetter("dark");
            break;
          case prefersLight.matches:
            themeSetter("light");
            break;
          default:
            break;
        }
      }
    };
    // if there is theme stored in the local storage, use it or use the system preference
    updateTheme();
    // listen for changes in the system preference
    prefersDark.addEventListener("change", updateTheme);
    prefersLight.addEventListener("change", updateTheme);
    return () => {
      // cleanup
      prefersDark.removeEventListener("change", updateTheme);
      prefersLight.removeEventListener("change", updateTheme);
    };
  }, []);
  return (
    <button
      onClick={() => handleChangeTheme(theme)}
      className="size-[32px] md:size-[40px] 2xl:size-[42px] border-[1.5px]  border-primary-light-gray rounded-lg bg-primary-light-gray"
    >
      {theme === "dark" ? (
        <Icon classes="size-[16px] md:size-[18px]" name="sun.svg" alt="hearts" />
      ) : (
        "🌙"
      )}
    </button>
  );
};

export default ThemeSwitcher;
