import React from "react";
// import CurrencyFormat from "react-currency-format";
import { useRouter } from "next/router";
import Image from "next/image";

const ProductsGrid = ({ key, data }) => {
  const router = useRouter();
  return (
    <button
      key={key}
      onClick={() => {
        router.push(`/products/${data.id}`);
      }}
      className="productGridButtonClass  flex flex-col w-[182.5px] md:w-full items-start p-[14px] rounded-sm cursor-pointer text-start justify-start mb-6"
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "6px",
          position: "relative",
        }}
        className="w-full"
      >
        <div className="md:w-[232px] w-full h-full  md:h-[300px] items-center  ">
          <Image
            src={data?.image}
            alt="..."
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col items-start  text-start">
        <h2 className="  text-[12px] font-[400] font-OpenSans leading-[16px] mb-[1px]">
          {data?.category}
        </h2>
        <h2 className=" text-[14px] font-[600] font-OpenSans leading-[16px] mb-[10px]">
          {data?.title}
        </h2>
        {/* <CurrencyFormat
          value={data?.newPrice}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"#"}
          renderText={(value) => (
            <h2 className=" text-[16px] font-[600] font-OpenSans leading-[16px] mb-[1px]">
              #{value}
            </h2>
          )}
        /> */}
        <h2 className=" text-[16px] font-[600] font-OpenSans leading-[16px] mb-[1px]">
          #{data?.price}
        </h2>
      </div>
      {/* <div className="flex gap-2 items-center">
        <span className=" text-[#CFCFCF] text-[14px] leading-[16px] font-medium font-Roboto ">
          {data?.quantity} Unit in Stock
        </span>
        <AiOutlineHeart size={20} color="#000000" />
      </div> */}
    </button>
  );
};

export default ProductsGrid;
