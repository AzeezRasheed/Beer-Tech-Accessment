export const calculateSubtotal = (cart) => {
  return cart.reduce((total, cartItem) => {
    const price = cartItem.item?.price;
    const totalPrice = price * cartItem.quantity;
    return total + totalPrice;
  }, 0);
};
