import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import NavbarLinks from "./NavbarLinks";
import Link from "next/link";
import DrawerRight from "./DrawerRight";
import { Drawer } from "@mui/material";
import NavbarIsMobile from "./NavbarIsMobile";
import { useMediaQuery } from "react-responsive";
import NavbarButton from "./NavbarButton";

const styles = {
  container: tw`flex flex-col w-full z-50 relative`,
  innerWrapper: tw`flex w-full justify-between items-center py-4 px-2 `,
  brand: tw`flex justify-center gap-1.5 text-2xl text-red font-bold font-inter`,
  icons: tw`flex items-center justify-center px-2 z-50 `,
  iconButton: tw`mr-5 items-center relative  z-50 h-full py-2`,
  navigationLinks: tw`flex items-center justify-between gap-[60px] m-auto`,
  list: tw`text-[14px] font-semibold  leading-[16px] flex items-center font-OpenSans`,
};

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: "425px" });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        {/* Icon Links for social media */}
        {!isMobile && <NavbarLinks />}

        {/* {!isMobile && ( */}
        <div style={styles.brand}>
          <Link href={"/"}>
            <span>Shop It All</span>
            <span className="dot">.</span>
          </Link>
        </div>
        {/* )} */}

        <NavbarButton
          setIsDrawerOpen={setIsDrawerOpen}
          setHamburgerOpen={setHamburgerOpen}
        />

        <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
          <DrawerRight />
        </Drawer>
      </div>

      {!isMobile && (
        <div
          style={{
            ...styles.navbarDown,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div style={styles.innerWrapper}>
            <ul style={styles.navigationLinks}>
              <li style={{ ...styles.list }}>
                <Link href="/">Home</Link>
              </li>
              <li style={{ ...styles.list }}>
                <a href="/"></a>
                <Link href="/products">Shop All</Link>
              </li>{" "}
              <li style={{ ...styles.list }}>
                <a href="/"></a>
                <Link href="/">About Us</Link>
              </li>
              <li style={{ ...styles.list }}>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {isMobile && (
        <NavbarIsMobile
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
        />
      )}
    </div>
  );
}

export default Navbar;
