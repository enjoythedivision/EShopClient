import { useParams } from "react-router-dom";
import useEffect from "react";
import getProductById from "../api/products.js";
export default function Product() {

  const { id } = useParams();
  
  useEffect(() => {
    getProductById(id);
  }, [id]);
  
  // Template data — replace with the product returned by the API when ready.
  const product = {
    title: "Album title",
    artist: "Artist name",
    description: "Add the album description here, including details about the music, the artist, and this release.",
    price: 29.99,
    stock: 5,
    imageUrl: "",
    productCategory: 0,
  };
  const categories = ["Rock", "Metal", "Jazz", "Hip hop", "Electronic"];

  return (
    <main className="product-page container" id="main" tabIndex={-1}>
      <a className="product-back" href="/products">← Back to products</a>

      <article className="product-detail">
        <div className="product-artwork">
          {product.imageUrl ? (
            <img src={product.imageUrl} alt={`${product.title} by ${product.artist}`} />
          ) : (
            <span className="product-artwork-placeholder">Album artwork</span>
          )}
        </div>

        <div className="product-info">
          <p className="product-category">{categories[product.productCategory] ?? product.productCategory}</p>
          <h1>{product.title}</h1>
          <p className="product-artist">{product.artist}</p>
          <p className="product-price">€{product.price.toFixed(2)}</p>

          <div className="product-description">
            <h2>About this release</h2>
            <p>{product.description}</p>
          </div>

          <dl className="product-facts">
            <div>
              <dt>Category</dt>
              <dd>{categories[product.productCategory] ?? product.productCategory}</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>{product.stock > 0 ? `In stock · ${product.stock} available` : "Out of stock"}</dd>
            </div>
          </dl>
        </div>
      </article>
    </main>
  );
}

//todo: fetch product by id and display it
