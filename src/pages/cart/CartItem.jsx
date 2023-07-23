import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, removeToCart, addToCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem" key={id}>
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button
            onClick={() => {
              removeToCart(id);
            }}
          >
            -
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => {
              updateCartItemCount(Number(e.target.value));
            }}
          />
          <button
            onClick={() => {
              addToCart(id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
