import { createContext, useState } from "react";
import { PRODUCTS } from "../products";
import PropTypes from "prop-types";

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmout = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmout += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmout;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextVal = {
    cartItems,
    addToCart,
    removeToCart,
    updateCartItemCount,
    getTotalCartAmount,
  };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextVal}>
      {props.children}
    </ShopContext.Provider>
  );
};
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ShopContextProvider;
