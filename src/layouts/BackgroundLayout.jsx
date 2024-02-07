// BackgroundLayout.js

import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import ThemeContext from "@/themes/ThemeContext";

const BackgroundLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  // Add or remove a class from the document body based on the theme
  useEffect(() => {
    // This will run only on the client-side
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, [theme]);

  return (
    <div  data-theme={theme}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default BackgroundLayout;
