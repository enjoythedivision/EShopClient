export default function Cart({ cartItems, setCartItems }) {
  return (
    <main className="container" id="main">
      <h1>Your cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((i, index) => (
            <div key={index}>
              <img src={i.imageUrl} alt="" />
              <span>{i.title}</span>
              <span>{i.artist}</span>
            </div>
          ))}
        </>
      )}
    </main>
  );
}
