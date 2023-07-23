import "./Shop.css";
import { PRODUCTS } from "../../products";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shopper Stop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((item) => (
          <Product data={item} key={PRODUCTS.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
