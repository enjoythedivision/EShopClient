import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart.jsx'
import Products from './pages/Products.jsx'

export default function App() {

  const products = [
  { id: 1, name: 'Black T-shirt', price: 20 },
  { id: 2, name: 'Blue jeans', price: 45 },
]
  return (
    <BrowserRouter>
      <div className="app">
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products products={products} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}