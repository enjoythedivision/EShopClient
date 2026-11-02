import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../api/products";

export default function Category() {
  const { category } = useParams();
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getProductsByCategory(category)
      .then((products) => {
        setResults(products);
        setError("");
      })
      .catch((error) => {
        setResults([]);
        setError(error.message);
      });
  }, [category]);

  return (
    <main className="products container" id="main">
      <h1>{category}</h1>
      {error && <p role="alert">{error}</p>}
      <ProductGrid products={results} />
    </main>
  );
}
