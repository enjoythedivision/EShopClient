export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <h2>{product.title}</h2>
      <h2>{product.artist}</h2>
      <p>€{product.price}</p>
    </article>
  );
}
