"use client";

import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col gap-2 items-center pt-10">
      Current Theme <span className="uppercase font-semibold">{theme}</span>
      <div className="flex gap-2">
        <button
          className="bg-slate-100 text-black text-bold px-4 py-2 rounded-md shadow-md"
          onClick={() => setTheme("light")}
        >
          Light Mode
        </button>
        <button
          className="bg-slate-800 text-white text-bold px-4 py-2 rounded-md shadow-md"
          onClick={() => setTheme("dark")}
        >
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
