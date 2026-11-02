import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../api/orders";
export default function Checkout({ cartItems, setCartItems }) {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderError, setOrderError] = useState("");

  const sendOrder = async (e) => {
    e.preventDefault();
    if (isSubmitting || cartItems.length === 0) return;

    setIsSubmitting(true);
    setOrderError("");

    const order = {
      customerName,
      email,
      shippingAddress,
      items: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      const createdOrder = await createOrder(order);
      setCartItems([]);
      navigate("/order-complete", {
        replace: true,
        state: { orderComplete: true, orderId: createdOrder?.id },
      });
    } catch (error) {
      setOrderError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="checkout container" id="main" tabIndex={-1}>
      <h1>Checkout</h1>

      <section>
        <h2>Your order</h2>

        {cartItems.map((item) => (
          <div key={item.id}>
            <span>{item.title}</span>
            <span> × {item.quantity}</span>
            <span> €{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </section>

      <form onSubmit={sendOrder}>
        <h2>Customer details</h2>

        <label htmlFor="customerName">Full name</label>
        <input
          id="customerName"
          name="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="shippingAddress">Shipping address</label>
        <textarea
          id="shippingAddress"
          name="shippingAddress"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          required
        />

        {orderError && <p role="alert">{orderError}</p>}
        <button type="submit" disabled={isSubmitting || cartItems.length === 0}>
          {isSubmitting ? "Placing order…" : "Place order"}
        </button>
      </form>
    </main>
  );
}
