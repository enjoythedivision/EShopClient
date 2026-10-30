import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import Products from "./pages/Products.jsx";
import { useEffect, useState } from "react";
import { getProducts } from "./api/products.js";
import Product from "./pages/Product.jsx";
import Checkout from "./pages/Checkout.jsx";
import Category from "./pages/Category.jsx";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header cartItems={cartItems}/>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="/checkout"
            element={
              <Checkout cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/products" element={<Products products={products} />} />
          <Route
            path="/products/:id"
            element={<Product addToCart={addToCart} />}
          />
          <Route path="/category/:id" element={<Category products={products}/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
