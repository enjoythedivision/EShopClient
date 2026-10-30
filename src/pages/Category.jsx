import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";

export default function Category({ products }) {
  const { id } = useParams();

  const categoryProducts = products.filter(
    product => String(product.productCategory) === id
  );

  return (
    <main className="products container" id="main">
      <h1>{id}</h1>
      <ProductGrid products={categoryProducts} />
    </main>
  );
}