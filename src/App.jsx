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
import NotFound from "./pages/NotFound.jsx";
import OrderStatus from "./pages/OrderStatus.jsx";

export default function App() {
  const [products, setProducts] = useState([]);
  const [productsError, setProductsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
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
    getProducts()
      .then(setProducts)
      .catch((error) => setProductsError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header cartItems={cartItems}/>
        {isLoading ? (
          <main className="products container" id="main" tabIndex={-1}>
            <h1>Loading the shop…</h1>
            <p role="status">
              The server may need a minute to wake up after inactivity. Thanks for waiting!
            </p>
          </main>
        ) : (
        <Routes>
          <Route path="/" element={<Home products={products} error={productsError} />} />
          <Route path="/order-complete" element={<OrderStatus />} />
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
          <Route path="/products" element={<Products products={products} error={productsError} />} />
          <Route
            path="/products/:id"
            element={<Product addToCart={addToCart} />}
          />
          <Route path="/category/:category" element={<Category/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        )}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
