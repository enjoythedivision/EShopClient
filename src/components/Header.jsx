import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header container">
      <a className="wordmark" href="/" aria-label="Eshop home">E-shop</a>
      <nav aria-label="Main navigation">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
      </nav>
    </header>
  )
}
