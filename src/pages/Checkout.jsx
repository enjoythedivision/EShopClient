import { useState } from "react";
import { createOrder } from "../api/orders";
export default function Checkout({ cartItems, setCartItems }) {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");

  const sendOrder = async (e) => {
    e.preventDefault();

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
      await createOrder(order);
      setCartItems([]);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <main className="checkout container">
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

        <button type="submit">Place order</button>
      </form>
    </main>
  );
}
