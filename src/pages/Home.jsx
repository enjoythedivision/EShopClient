import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";

export default function Home({ products }) {
  const categories = [...new Set(products.map(p => p.productCategory))];

  return (
    <main className="home container" id="main" tabIndex={-1}>
      <div className="page-heading">
        <h1>Shop</h1>
      </div>
      <ProductGrid products={products.slice(0, 6)} />
      <Link className="view-all" to="/products">
        View all products →
      </Link>
      <div>
        Browse by category:
        {categories.map((category) => (
          <Link to={`/category/${category}`}>{category}</Link>
        ))}
      </div>
    </main>
  );
}
