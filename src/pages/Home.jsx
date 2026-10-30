import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";

export default function Home({ products }) {
  return (
    <main className="home container" id="main" tabIndex={-1}>
      <div className="page-heading">
        <h1>Shop</h1>
      </div>
      <ProductGrid products={products.slice(0, 6)} />
      <Link className="view-all" to="/products">View all products →</Link>
    </main>
  )
}
