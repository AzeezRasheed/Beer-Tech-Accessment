import "@/styles/globals.css";
import GlobalStyles from "./../styles/GlobalStyles";
import { useEffect } from "react";
import { ThemeProvider } from "../themes/ThemeContext";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "@/reducers/store";
import { getProducts } from "@/reducers/actions/product.dispatch";
// import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);


  return (
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  );
}
