import PropTypes from "prop-types";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product" key={id}>
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          {" "}
          <b> {productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button
        className="addToCartBttn"
        onClick={() => {
          addToCart(id);
        }}
      >
        {" "}
        Add to Cart {cartItemAmount > 0 ? `(${cartItemAmount})` : ""}
      </button>
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
