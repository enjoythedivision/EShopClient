import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../api/products.js";
export default function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then(setProduct);
  }, [id]);

  const categories = ["Rock", "Metal", "Jazz", "Hip hop", "Electronic"];

  return (
    <main className="product-page container" id="main" tabIndex={-1}>
      <Link className="product-back" to="/products">
        ← Back to products
      </Link>

      {!product ? (
        <p>Loading product...</p>
      ) : (
        <article className="product-detail">
          <div className="product-artwork">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
              />
            ) : (
              <span className="product-artwork-placeholder">
                No image available
              </span>
            )}
          </div>

          <div className="product-info">
            <p className="product-category">
              {categories[product.productCategory] ?? product.productCategory}
            </p>
            <h1>{product.title}</h1>
            <p className="product-artist">{product.artist}</p>
            <p className="product-price">€{product.price.toFixed(2)}</p>

            <div className="product-description">
              <h2>Description</h2>
              <p>{product.description}</p>
            </div>

            <button className="product-button" disabled={product.stock === 0}>
              {product.stock === 0 ? "Out of stock" : "Add to cart"}
            </button>

            <dl className="product-facts">
              <div>
                <dt>Availability</dt>
                <dd>
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </dd>
              </div>
            </dl>
          </div>
        </article>
      )}
    </main>
  );
}
