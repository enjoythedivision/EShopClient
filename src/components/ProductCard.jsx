import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`}>
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.title} />
        ) : (
          <div>Cover not available</div>
        )}
        <h2>{product.title}</h2>{" "}
      </Link>
      <h2>{product.artist}</h2>
      <p>€{product.price}</p>
    </article>
  );
}
