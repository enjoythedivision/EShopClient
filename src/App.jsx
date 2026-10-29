import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart.jsx'
import Products from './pages/Products.jsx'
import { useEffect, useState } from 'react'
import { getProducts } from './api/products.js'
import Product from './pages/Product.jsx'

export default function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
};