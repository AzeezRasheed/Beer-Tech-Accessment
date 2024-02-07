import React, { useContext } from "react";
import tw from "twin.macro";
import Typography from "./Typography";
import Button from "./Button";
import Shoe from "../assets/Shoe.jpeg";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import Image from "next/image";
import ThemeContext from "../themes/ThemeContext";

const styles = {
  container: tw`
    w-full px-0 mx-0  z-10
    `,
  innerContainer: tw`
    relative overflow-hidden bg-no-repeat px-4  object-cover bg-cover mx-auto py-12 lg:pt-0 md:py-20 flex flex-wrap w-full gap-10 lg:h-screen items-center justify-center lg:justify-between`,
  left: tw`px-0 mx-0  items-start w-full max-w-[700px]  `,
  right: tw`px-0 mx-0 flex-1 items-center w-full flex`,
  title: tw`md:text-[85px]  text-[48px] font-normal capitalize font-Artifika w-full leading-tight `,
  naturally: tw`absolute md:right-20 md:-bottom-16 lg:-bottom-[80px] lg:right-[44px] -bottom-24 right-0 text-[90px] text-[#079627] font-normal font-Sacramento w-full leading-[130%]  `,
};

function HeroSection() {
  const { theme } = useContext(ThemeContext);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 425px)" });
  const router = useRouter();

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.innerContainer,
        }}
      >
        {/* left */}
        <div style={styles.left}>
          <div className="w-full max-w-[650px] mb-[80px] relative ">
            <h2
              className={
                "md:text-[85px]  text-[48px] t font-normal capitalize font-Artifika w-full leading-tight  "
              }
            >
              The Best Gift For Him
            </h2>

            <div className="absolute md:right-20 md:-bottom-16 lg:-bottom-[80px] lg:right-[44px] -bottom-24 right-0 ">
              <h2
                className={
                  "text-[90px] text-[#079627] font-normal font-Sacramento w-full leading-[130%]  "
                }
              >
                nature love
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-start">
            <Typography
              variant={theme === "dark" ? "white" : undefined}
              size="heading6"
              className="capitalize"
            >
              premium “shop it all” product designed exclusively for you.
            </Typography>
            <Button
              ripple={true}
              onClick={() => {
                router.push("/products");
              }}
              className="bg-[#033514] text-white py-[14px] px-[21px] gap-[10px] inline-flex "
            >
              SHOP NOW
            </Button>
          </div>
        </div>

        {/* right */}
        <div style={styles.right}>
          <div className="w-full max-w-[585px] h-full ">
            <Image
              src={Shoe}
              className=" bg-transparent"
              alt="Shoe"
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
