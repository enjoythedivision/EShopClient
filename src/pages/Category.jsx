import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../api/products";

export default function Category() {
  const { category } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    getProductsByCategory(category).then(setResults);
  }, [category]);

  return (
    <main className="products container" id="main">
      <h1>{category}</h1>
      <ProductGrid products={results} />
    </main>
  );
}
