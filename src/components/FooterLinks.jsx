import React, { useContext, useState } from "react";
import tw from "twin.macro";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeContext from "../themes/ThemeContext";

function FooterLinks() {
  const { theme } = useContext(ThemeContext);

  const location = useRouter();
  const pathname = location.pathname;

  const [email, setEmail] = useState();

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* first grid */}

        <div style={styles.linksWrapper}>
          <div style={styles.headerWrapper}>
            <h2
              className={` ${
                theme === "dark" ? "text-[#8eecf5]" : "text-[#FFFFFF]"
              } `}
              style={{
                ...styles.header,
              }}
            >
              Links
            </h2>
          </div>
          <ul style={styles.linkWrapper}>
            <li
              className={`mb-6 ${
                theme === "dark" ? "text-blue" : "text-[#FFFFFF]"
              }`}
              style={{
                ...styles.link,
              }}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`mb-6 ${
                theme === "dark" ? "text-blue" : "text-[#FFFFFF]"
              }`}
              style={{
                ...styles.link,
              }}
            >
              <Link href="/products">Shops</Link>
            </li>
            <li
              className={`mb-6 ${
                theme === "dark" ? "text-blue" : "text-[#FFFFFF]"
              }`}
              style={{
                ...styles.link,
              }}
            >
              <Link href="/about-us">About</Link>
            </li>
            <li
              className={`mb-6 ${
                theme === "dark" ? "text-blue" : "text-[#FFFFFF]"
              }`}
              style={{
                ...styles.link,
              }}
            >
              <Link href="/contact"> Contact us</Link>
            </li>
          </ul>
        </div>

        {/* second grid */}
        <div style={styles.linksWrapper}>
          <div style={styles.headerWrapper}>
            <h2
              className={` ${
                theme === "dark" ? "text-[#8eecf5]" : "text-[#FFFFFF]"
              }`}
              style={{
                ...styles.header,
              }}
            >
              Help
            </h2>
          </div>
          <ul style={styles.linkWrapper}>
            <li
              className={`mb-6 ${
                theme === "dark" ? "text-blue" : "text-[#FFFFFF]"
              }`}
              style={{
                ...styles.link,
              }}
            >
              <Link href="/">Payment Options</Link>
            </li>
            <li
              className={`mb-6 ${
                theme === "dark" ? "text-blue" : "text-[#FFFFFF]"
              }`}
              style={{
                ...styles.link,
              }}
            >
              <Link href="/">Returns</Link>
            </li>
            <li
              className={`mb-6 ${
                theme === "dark" ? "text-blue" : "text-[#FFFFFF]"
              }`}
              style={{
                ...styles.link,
              }}
            >
              <Link href="/">Privacy Policies</Link>
            </li>
          </ul>
        </div>

        {/* third grid */}
        <div style={styles.linksWrapper}>
          <div style={styles.headerWrapper}>
            <h2
              className={` ${
                theme === "dark" ? "text-[#8eecf5]" : "text-[#FFFFFF]"
              }`}
              style={{
                ...styles.header,
              }}
            >
              Newsletter
            </h2>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-3 ">
            <input
              placeholder="Enter your email here..."
              className={`border-b border-b-solid  px-2 bg-transparent items-center text-start py-2 w-full placeholder:font-Montserrat placeholder:text-[${
                theme === "dark" ? "#FFFFFF" : "#FFFFFF"
              }] placeholder:text-[12px] outline-none text-[${
                theme === "dark" ? "#FFFFFF" : "#FFFFFF"
              }] `}
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{
                borderBottomColor: theme === "dark" ? "#FFFFFF" : "#000",
              }}
            />
            <button
              className="border-b  border-b-solid font-Poppins text-[14px] font-[500]"
              onClick={() => {}}
              style={{
                color: theme === "dark" ? "#FFFFFF" : "#000",
                borderBottomColor: theme === "dark" ? "#FFFFFF" : "#000",
              }}
            >
              SUBSCRIBE
            </button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;

const styles = {
  container: tw`flex items-baseline w-full`,
  wrapper: tw`flex justify-between w-full flex-wrap  gap-10 md:gap-10  `,
  linksWrapper: tw`text-start items-start`,
  headerWrapper: tw`mb-6 pb-2 text-start items-start border-b border-solid border-[#5B5959]`,
  header: tw`text-[20px] mr-2 leading-[20px] w-full font-normal font-Montserrat `,
  linkWrapper: tw`text-gray-600`,
  link: tw`hover:underline mb-6 font-Montserrat font-normal text-[16px]  leading-[20px] cursor-pointer`,
};
