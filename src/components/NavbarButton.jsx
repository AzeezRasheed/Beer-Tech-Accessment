import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import ThemeSwitcher from "./ThemeSwitcher";
import CollapsibleInput from "./CollapsibleButton";
import Button from "./Button";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FILTER_PRODUCTS } from "@/reducers/slice/filter.slice";
import { useGetCart } from "@/reducers/slice/cart.slice";
import { useDispatch } from "react-redux";
import { useGetProducts } from "@/reducers/slice/product.slice";
import { useMediaQuery } from "react-responsive";
import { FaHamburger } from "react-icons/fa";

const styles = {
  icons: tw`flex items-center justify-center px-2 z-50  `,
  iconButton: tw`mr-5 items-center relative  z-50 h-full py-2`,
};

function NavbarButton({ setIsDrawerOpen, setHamburgerOpen }) {
  const isMobile = useMediaQuery({ maxWidth: "425px" });

  const cart = useGetCart();
  // const location = useLocation();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const products = useGetProducts();
  // const pathname = location.pathname;
  const [search, setSearch] = useState("");

  const cartTotal = cart?.length;

  useEffect(() => {
    dispatch(FILTER_PRODUCTS({ products, search }));
  }, [products, dispatch, search]);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div style={styles.icons}>
      {!isMobile && (
        <CollapsibleInput placeholder="Search for products, categories..." />
      )}
      <Button
        ripple={true}
        onClick={handleDrawerOpen}
        style={{ position: "relative" }}
      >
        <div style={{ ...styles.iconButton }}>
          <span>
            <HiOutlineShoppingCart size={22} />
          </span>
          <div className="absolute w-full justify-center flex m-auto z-50 -top-1  text-[#079627] font-normal text-[13px] items-center uppercase ">
            <span className="z-50 text-center">{cartTotal}</span>
          </div>
        </div>
      </Button>
      <div style={{ ...styles.iconButton }}>
        <ThemeSwitcher />
      </div>

      {isMobile && (
        <Button
          ripple={true}
          onClick={() => {
            setHamburgerOpen(true);
          }}
          style={{ position: "relative" }}
        >
          <div style={{ ...styles.iconButton }}>
            <FaHamburger size={22} />
          </div>
        </Button>
      )}
    </div>
  );
}

export default NavbarButton;
