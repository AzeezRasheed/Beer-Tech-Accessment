import React, { useContext, useEffect, useState } from "react";
import LandingPage from "@/components/LandingPage";
import ScrollTop from "@/components/ScrollTop";
import ThemeContext from "../themes/ThemeContext";

const Page = () => {
  const { theme } = useContext(ThemeContext);

  // Add or remove a class from the document body based on the theme
  useEffect(() => {
    // This will run only on the client-side
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, [theme]);

  return (
    <div data-theme={theme}>
      <ScrollTop />
      <LandingPage />
    </div>
  );
};

export default Page;
