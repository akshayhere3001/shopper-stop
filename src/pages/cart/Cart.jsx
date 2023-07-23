import { PRODUCTS } from "../../products";
import "./Cart.css";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmout = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem data={item} key={item.id} />;
          }
        })}
      </div>

      {totalAmout > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmout}</p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Continue Shopping
          </button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
