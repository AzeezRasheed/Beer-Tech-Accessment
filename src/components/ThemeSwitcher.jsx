import React, { useState, useEffect, useContext } from "react";
import { FaMoon } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import ThemeContext from "../themes/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      data-theme={theme}
      onClick={toggleTheme}
      className={`rounded-md items-center justify-center m-auto ${theme !== "dark" && "text-black"}`}
    >
      {theme === "dark" ? <IoMdSunny size={22} /> : <FaMoon size={22} />}
    </button>
  );
};

export default ThemeSwitcher;
