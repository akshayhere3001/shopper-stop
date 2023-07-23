import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart.jsx";
import Shop from "./pages/shop/Shop";
import ShopContextProvider from "./context/ShopContext";

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
};

export default App;
