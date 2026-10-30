import { useState } from "react";
export default function Checkout({ cartItems, setCartItems }) {
  
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");

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

      <form>
        <h2>Customer details</h2>

        <label htmlFor="customerName">Full name</label>
        <input id="customerName" name="customerName" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="shippingAddress">Shipping address</label>
        <textarea id="shippingAddress" name="shippingAddress" required />

        <button type="submit">Place order</button>
      </form>
    </main>
  );
}
