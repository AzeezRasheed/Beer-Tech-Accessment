import React, { useState } from "react";
import Popup from "./Popup";
import Stack from "./Stack";
import Button from "./Button";
import Multiplier from "../assets/X.svg";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import Typography from "./Typography";
import { calculateSubtotal } from "@/utils/CalculateSubtotal";
import { useRouter } from "next/router";
import { removeItem, useGetCart } from "@/reducers/slice/cart.slice";
import Image from "next/image";

const CartItemStack = ({ item, cartItem, openModal }) => {
  const dispatch = useDispatch();
  // const router.push = userouter.push()
  const price = item?.price;
  const totalPrice = price * cartItem?.quantity;
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="spacebetween"
      className="p-4 border-y border-y-[#A7A7A7]"
    >
      <Stack direction="row" alignItems="center" className="gap-4">
        {item?.image && (
          <div className="w-[105px] h-full  rounded-md">
            <Image
              src={item?.image}
              className="w-full h-full bg-transparent"
              alt={item?.title}
              width={100}
              height={100}
            />
          </div>
        )}
        <Stack direction="column" alignItems="start">
          <Typography
            variant="black"
            className="text-[16px] font-[500] mb-3 uppercase font-Poppins"
          >
            {item?.title}
          </Typography>
          <div className="flex flex-row gap-4 items-center  text-center  ">
            <Typography className=" text-[16px] font-[300] uppercase font-Poppins">
              {cartItem?.quantity}
            </Typography>

            <Typography className="text-[12px]  font-[500] uppercase font-Poppins">
              #{totalPrice}
            </Typography>
          </div>
          {/* <div className="flex gap-4 items-center">
            <Typography className="text-[#9F9F9F] text-[13px] leading-[16px] font-normal uppercase font-OpenSans">
              QTY:
            </Typography>
            <div className="flex flex-wrap gap-2 items-center">
              <Button
                ripple
                onClick={() => dispatch(decrementQuantity(item?.id))}
              >
                <AiOutlineMinus size={12} color="#000000" />
              </Button>
              <div
                style={{
                  display: "flex",
                  padding: "4px 10px",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "auto",
                  border: "1px solid #C0C0C0",
                }}
              >
                <Typography
                  variant="black"
                  className="text-[#9F9F9F] text-[10px] leading-[16px] font-[400] font-Roboto"
                >
                  {cartItem?.quantity ? cartItem?.quantity : 1}
                </Typography>
              </div>
              <Button
                ripple
                onClick={() => dispatch(incrementQuantity(item?.id))}
              >
                <AiOutlinePlus size={12} color="#000000" />
              </Button>
            </div>
          </div> */}
        </Stack>
      </Stack>

      <Button ripple onClick={openModal}>
        <MdCancel size={24} />
      </Button>
    </Stack>
  );
};

const DrawerRight = () => {
  const router = useRouter();
  const cart = useGetCart();
  const dispatch = useDispatch();
  const cartTotal = cart.length;

  const [itemId, setItemId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (id) => {
    setItemId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onAccept = () => {
    dispatch(removeItem(itemId));
    setIsModalOpen(false);
  };

  const renderCartItem = (item) => (
    <button
      key={item.id}
      className="w-full"
      onClick={() => router.push(`/products/${item.id}`)}
    >
      <CartItemStack
        item={item}
        cartItem={cart.find((cartItem) => cartItem.id === item.id)}
        openModal={() => openModal(item.id)}
      />
    </button>
  );

  const cartSubtotal = calculateSubtotal(cart);
  return (
    <Stack
      direction="column"
      alignItems="center"
      className="gap-4 w-[360px] md:w-[433px] py-10 px-1 md:px-6"
    >
      <Popup isOpen={isModalOpen} onClose={closeModal} onAccept={onAccept}>
        <p className="text-[#000] text-[12px] font-[400] font-Montserrat leading-[130%]">
          Are you sure you would like to remove this item from the shopping
          cart?
        </p>
      </Popup>

      <Typography size="heading3" variant="black">
        Shopping Cart ({cartTotal})
      </Typography>

      <Stack direction="column" alignItems="center" className="gap-4">
        {cartTotal > 0 ? (
          cart.map((item) => renderCartItem(item.item))
        ) : (
          <span className="text-[#000000] text-center text-[16px] leading-[130%] font-semibold font-Roboto">
            You have no items in your shopping cart.
          </span>
        )}
      </Stack>

      {cartTotal > 0 && (
        <>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className="flex-wrap gap-2"
          >
            <Typography
              className="text-[#000000] text-center text-[14px] leading-[16px] font-light font-Roboto"
              size="regular"
            >
              Cart Subtotal:
            </Typography>
            <Typography
              className="text-[#000000] text-center text-[18px] leading-[160%] font-bold font-Roboto"
              size="heading5"
            >
              #{cartSubtotal}
            </Typography>
          </Stack>
        </>
      )}

      {cartTotal > 0 && (
        <Button
          ripple
          className="w-[343px]"
          onClick={() => {
            router.push("/checkout");
          }}
        >
          <div className="px-[20px] py-4 w-full bg-[#033514] rounded-[5px] items-center text-center">
            <Typography variant="white" size="buttons">
              Proceed to Checkout
            </Typography>
          </div>
        </Button>
      )}

      {cartTotal > 0 && (
        <Typography
          className="font-medium text-[11px] leading-[130%] text-center text-[#000000] font-Montserrat"
          size="small"
        >
          View and Edit Cart
        </Typography>
      )}
    </Stack>
  );
};

export default DrawerRight;
