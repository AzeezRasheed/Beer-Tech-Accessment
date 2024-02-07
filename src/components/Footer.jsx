import React, { useContext } from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
// import Logo_White from "../assets/SHOP FOR IT.png";
// import Logo_Black from "../assets/SHOP FOR IT BLACK.png";
import tw from "twin.macro";
import FooterLinks from "./FooterLinks";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeContext from "../themes/ThemeContext";

function Footer() {
  const location = useRouter();
  const pathname = location.pathname;

  const { theme } = useContext(ThemeContext);

  return (
    <footer
      style={{
        backgroundColor: "#041706",
        ...styles.container,
      }}
    >
      <div className="flex flex-col gap-6 items-center justify-center m-auto">
        <div className="flex w-full  md:flex-col-reverse items-start m-auto justify-center lg:justify-between md:items-start  gap-8 lg:gap-20 md:p-8 lg:flex-row  flex-col   ">
          <div className="flex flex-col gap-5 items-start w-full max-w-[248px] ">
            {/* Logo */}
            <div style={styles.brand}>
              <Link href={"/"}>
                <span>Shop It All</span>
                <span className="dot">.</span>
              </Link>
            </div>

            <h2
              className={` ${
                theme === "dark" ? "text-[#8eecf5]" : "text-[#FFFFFF]"
              }`}
            >
              Lekki, Lagos, Nigeria
            </h2>
            <div className="flex flex-col items-start">
              <h3
                className={`font-semibold  text-[16px] leading-[20px] ${
                  theme === "dark" ? "text-[#8eecf5]" : "text-[#FFFFFF]"
                } font-Montserrat mb-1`}
              >
                Call Us: +234 703 687 4722
              </h3>
              <h3
                className={`font-bold  text-[16px] leading-[20px] ${
                  theme === "dark" ? "text-[#8eecf5]" : "text-[#FFFFFF]"
                } font-Montserrat`}
              >
                Email:
                <span
                  className={` font-semibold ml-1 ${
                    theme === "dark" ? "text-[#8eecf5] " : "text-[#FFFFFF]"
                  }`}
                >
                  rayshmanazeez@gmail.com
                </span>
              </h3>
            </div>
          </div>

          <FooterLinks />
        </div>

        <div className="flex flex-wrap  text-start justify-between w-full items-start md:items-center md:text-center pl-6 ">
          <div className="flex space-x-6 sm:justify-center mb-4 md:mb-0">
            <Link
              href="/"
              style={{
                color: theme === "light" ? "#FFFFFF" : "#C0C0C0",
                ...styles.socialMediaLink,
              }}
            >
              <BsTwitter />
              <span className="sr-only">Twitter page</span>
            </Link>

            <Link
              href="/"
              style={{
                color: theme === "light" ? "#FFFFFF" : "#C0C0C0",
                ...styles.socialMediaLink,
              }}
            >
              <BsInstagram />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link
              href="/"
              style={{
                color: theme === "light" ? "#FFFFFF" : "#C0C0C0",
                ...styles.socialMediaLink,
              }}
            >
              <BsFacebook />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="/"
              style={{
                color: theme === "light" ? "#FFFFFF" : "#C0C0C0",
                ...styles.socialMediaLink,
              }}
            >
              <BsYoutube />
              <span className="sr-only">Youtube account</span>
            </Link>
          </div>
          <h2
            className={`text-[20px] leading-[20px]font-normal font-Montserrat  ${
              theme === "dark" ? "text-[#8eecf5]" : "text-[#FFFFFF]"
            }`}
          >
            &copy;{new Date().getFullYear()} Shop It All. All Rights Reserved.
          </h2>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const styles = {
  brand: tw`flex justify-center gap-1.5 text-2xl text-red font-bold font-inter`,
  logoLink: tw`flex items-center cursor-pointer`,
  socialMediaLink: tw` hover:text-slate-200 `,
  container: tw`p-10 sm:px-2 sm:pt-14  `,
};
