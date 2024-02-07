import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import ImageZoom from "react-image-zooom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import CurrencyFormat from "react-currency-format";
import { InfinitySpin } from "react-loader-spinner";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import BackgroundLayout from "@/layouts/BackgroundLayout";
import { useRouter } from "next/router";
import { useGetProduct } from "@/reducers/slice/product.slice";
import Stack from "@/components/Stack";
import ProductInfoShowPopup from "@/components/ProductInfoShowPopup";
import Typography from "@/components/Typography";
import StarRating from "@/components/StarRating";
import Button from "@/components/Button";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  useGetCart,
} from "@/reducers/slice/cart.slice";
import { getProduct } from "@/reducers/actions/product.dispatch";

const SocialMediaLink = styled.a`
  ${tw`
hover:text-slate-500 
`}
`;
const ProductInfo = () => {
  const dispatch = useDispatch();
  const [inchesType, setInchesType] = useState("select");
  const [isLoading, setIsLoading] = useState(true);
  const [isStretchedLength, setIsStretchedLength] = useState(false);
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const singleProduct = useGetProduct();
  const cart = useGetCart();
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setProduct([]);
        await dispatch(getProduct(id));
      } catch (error) {
        // Handle errors
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, dispatch]);

  useEffect(() => {
    const updateProduct = async () => {
      try {
        await setProduct(singleProduct);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        // Handle errors
      }
    };

    updateProduct();
  }, [singleProduct, id]);

  const isItemInCart = cart.some((cartItem) => cartItem.id === product?.id);

  const itemInCart = cart.find((cartItem) => cartItem.id === product?.id);

  console.log(product);
  return (
    <BackgroundLayout>
      <div className="w-full">
        {product?.length < 1 || !product || isLoading ? (
          <div className="flex items-center justify-center m-auto py-6">
            <InfinitySpin
              visible={true}
              width="200"
              color="#4fa94d"
              ariaLabel="infinity-spin-loading"
            />{" "}
          </div>
        ) : (
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            className={"px-4 lg:px-14 py-10"}
          >
            <ProductInfoShowPopup
              title={product?.title}
              inchesType={inchesType}
              isItemInCart={isItemInCart}
            />
            <Stack className=" flex-col items-center lg:items-start justify-center max-w-[1000px] lg:justify-between lg:flex-row  mt-0 gap-12 mb-10 ">
              {/* Left Row */}
              <ImageZoom
                height="100%"
                zoom="200"
                alt={product?.title}
                width={isMobile ? "100%" : "423px"}
                src={product?.image}
              />

              {/* Right Row */}
              <div className="flex flex-col items-start gap-4 justify-start">
                <div className="flex flex-col items-start gap-[2px] ">
                  <Typography
                    className={"text-[42px]  font-Poppins font-[500] "}
                  >
                    {product?.title}
                  </Typography>

                  <CurrencyFormat
                    value={product?.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"#"}
                    renderText={(value) => (
                      <Typography
                        className={"font-Poppins text-[24px] font-[500]  "}
                      >
                        {value}
                      </Typography>
                    )}
                  />
                </div>
                <StarRating rating={[]} />

                <div className="flex  w-full flex-wrap gap-2 items-center ">
                  {/*  */}
                  {!isItemInCart ? (
                    <Button
                      ripple={true}
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: product?.id,
                            quantity: 1,
                            item: product,
                            stretchedLength: inchesType,
                          })
                        );
                      }}
                    >
                      <div
                        style={{
                          border: "1px solid ",
                          padding: "16px 30px",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "15px",
                          background: "transparent",
                        }}
                      >
                        <Typography size="heading6">Add to cart</Typography>
                      </div>
                    </Button>
                  ) : (
                    <p className="notification    text-[14px] text-center leading-[16px] font-light font-Roboto ">
                      Item added to cart!
                    </p>
                  )}

                  {/*  */}
                  {isItemInCart && (
                    <Button ripple={true} onClick={() => {}}>
                      <div
                        style={{
                          border: "1px solid ",
                          padding: "16px 30px",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "15px",
                          background: "transparent",
                        }}
                      >
                        <Typography size="heading6">Buy Now</Typography>
                      </div>
                    </Button>
                  )}

                  {/* increament and decreament button */}
                  {isItemInCart && (
                    <div
                      style={{
                        border: "1px solid ",
                        padding: "12px 14px",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "5px",
                      }}
                    >
                      <div className="flex flex-wrap gap-2 items-center">
                        <Button
                          ripple={true}
                          onClick={() => {
                            dispatch(decrementQuantity(itemInCart?.id));
                          }}
                        >
                          <AiOutlineMinus size={12} />
                        </Button>

                        <Typography size="heading6">
                          {itemInCart?.quantity ? itemInCart?.quantity : 1}
                        </Typography>
                        <Button
                          ripple={true}
                          onClick={() => {
                            dispatch(incrementQuantity(itemInCart?.id));
                          }}
                        >
                          <AiOutlinePlus size={12} />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/*  */}
                  {/* <AiOutlineHeart size={20} color="#000000" /> */}
                </div>

                <div className="flex flex-col w-full gap-4 py-10 border-t border-t-[#D9D9D9] items-start mt-4">
                  <div className="w-full flex gap-6 items-start">
                    <div className="flex justify-between gap-4 w-[100px] ">
                      <Typography
                        className={
                          "text-[16px] text-[#9F9F9F] font-[400] font-Poppins  "
                        }
                      >
                        SKU
                      </Typography>
                      <Typography
                        className={
                          "text-[16px] text-[#9F9F9F] font-[400] font-Poppins  "
                        }
                      >
                        :
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        className={
                          "text-[16px] text-[#9F9F9F] font-[400] font-Poppins  "
                        }
                      >
                        {product?.id}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Stack>
          </Stack>
        )}
      </div>

    </BackgroundLayout>
  );
};

export default ProductInfo;
