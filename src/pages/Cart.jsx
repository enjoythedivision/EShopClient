export default function Cart({ cartItems, setCartItems }) {
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
            </div>
          ))}
        </>
      )}
    </main>
  );
}
