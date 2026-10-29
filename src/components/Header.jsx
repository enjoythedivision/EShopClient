import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header container">
      <a className="wordmark" href="/" aria-label="Eshop home">E-shop</a>
      <nav aria-label="Main navigation">
        <a className="nav-link" href="#main">Shop</a>
        <Link to="/cart" className="nav-link">Cart</Link>
      </nav>
    </header>
  )
}
