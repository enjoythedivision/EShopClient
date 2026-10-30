export default function Cart({ cartItems, setCartItems }) {
  const increaseItem = (product) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseItem = (product) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    );
  };

  return (
    <main className="cart container" id="main">
      <h1>Your cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((i, index) => (
            <div className="cart-row" key={index}>
              <img src={i.imageUrl} alt="" />
              <span className="cart-title">{i.title}</span>
              <span className="cart-artist">{i.artist}</span>
              <span className="cart-row-price">€{(i.quantity * i.price).toFixed(2)}</span>
              <div className="cart-quantity">
                <button aria-label={`Decrease quantity of ${i.title}`} onClick={() => decreaseItem(i)}>-</button>
                <span>{i.quantity}</span>
                <button aria-label={`Increase quantity of ${i.title}`} onClick={() => increaseItem(i)}>+</button>
              </div>
            </div>
          ))}
          <Link className="checkout-button" to="/checkout">Proceed to checkout</Link>
        </>
      )}
    </main>
  );
}
import { Link } from "react-router-dom";

