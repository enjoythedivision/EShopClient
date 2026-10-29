import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}