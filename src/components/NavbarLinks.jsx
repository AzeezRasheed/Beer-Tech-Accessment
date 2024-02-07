import React from "react";
import tw from "twin.macro";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import Link from "next/link";

const styles = {
  socialMediaWrapper: tw`flex gap-6 justify-center`,
};

const NavbarLinks = () => {
  return (
    <div style={styles.socialMediaWrapper}>
      <Link style={styles.socialMediaAction} href="/">
        <BsInstagram size={20} />
        <span className="sr-only">Instagram page</span>
      </Link>
      <Link style={styles.socialMediaAction} href="/">
        <BsTwitter size={20} />
        <span className="sr-only">Twitter page</span>
      </Link>
      <Link style={styles.socialMediaAction} href="/">
        <BsFacebook size={20} />
        <span className="sr-only">Facebook page</span>
      </Link>
      <Link style={styles.socialMediaAction} href="/">
        <BsYoutube size={20} />
        <span className="sr-only">Youtube account</span>
      </Link>
    </div>
  );
};

export default NavbarLinks;
