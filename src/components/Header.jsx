import { Link } from "react-router-dom";

export default function Header({cartItems}) {
  return (
    <header className="site-header container">
      <a className="wordmark" href="/" aria-label="Eshop home">E-shop</a>
      <nav aria-label="Main navigation">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link">Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})</Link>
      </nav>
    </header>
  )
}
