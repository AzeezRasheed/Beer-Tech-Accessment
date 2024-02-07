import React, { useState } from "react";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";
import Link from "next/link";
import MenuStyles from "@/utils/MenuStyles";

const styles = {
  brand: tw`flex justify-center gap-1.5 text-2xl text-red font-bold font-inter`,
  container: tw`
    flex
    flex-wrap
    items-center
    list-none
    gap-6
  `,
  listContainer: tw``,
  navItems: (menu) => css`
    ${tw`
      block
      py-2
      pl-3
      pr-4
      text-white
      text-[16px]
      leading-[28px]
      md:hover:bg-transparent
      md:p-0
    `}

    ${menu &&
    tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `}
  `,
  buttonMd: tw`
    flex
    flex-row
    items-start
    py-[12px]
    px-[24px]
    gap-[12px]
    bg-white
    rounded-full
  `,
  buttonSm: tw`
    flex
    flex-row
    items-start
    py-[16px]
    px-[16px]
    gap-[12px]
    bg-white
    rounded-full
  `,
};

const Container = styled.div`
  ${styles.container}
`;

const ListContainer = styled.ul`
  ${styles.listContainer}
`;

const NavItems = styled.a`
  ${styles.navItems}
`;

const ButtonSm = styled.a`
  ${styles.buttonSm}
`;

const LogoContainer = styled.div``;

function NavbarIsMobile({ hamburgerOpen, setHamburgerOpen }) {
  return (
    <Menu
      isOpen={hamburgerOpen}
      onClose={() => {
        setHamburgerOpen(false);
      }}
      customBurgerIcon={false}
      right
      styles={MenuStyles}
    >
      <Container>
        <LogoContainer>
          <div style={styles.brand}>
            <Link href={"/"}>
              <span>Shop It All</span>
              <span className="dot">.</span>
            </Link>
          </div>
        </LogoContainer>
        <ListContainer>
          <li>
            <NavItems menu href="/">
              Home
            </NavItems>
          </li>

          <li>
            <NavItems menu href="/products">
              Shop All
            </NavItems>
          </li>
          <li>
            <NavItems menu href="/">
              About Us
            </NavItems>
          </li>
          <li>
            <NavItems menu href="/">
              Contact Us
            </NavItems>
          </li>
        </ListContainer>
      </Container>
    </Menu>
  );
}

export default NavbarIsMobile;
