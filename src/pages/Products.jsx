import { useState } from "react";
import ProductGrid from "../components/ProductGrid";

export default function Products({ products }) {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const categories = [...new Set(products.map(product => String(product.productCategory)))];

  const visibleProducts = products.filter(
    (product) =>
      category === "" || String(product.productCategory) === category,
  );

  if (sort === "ascending") {
    visibleProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "descending") {
    visibleProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <main className="products container" id="main" tabIndex={-1}>
      <div className="page-heading">
        <h1>Products</h1>
      </div>
      <div className="product-filters">
        <fieldset>
          <legend>Category</legend>
          <label>
            <input
              type="radio"
              name="category"
              value=""
              checked={category === ""}
              onChange={(e) => setCategory(e.target.value)}
            />
            All categories
          </label>
          {categories.map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="category"
                value={value}
                checked={category === value}
                onChange={(e) => setCategory(e.target.value)}
              />
              {value}
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>Price order</legend>
          <label>
            <input
              type="radio"
              name="sort"
              value=""
              checked={sort === ""}
              onChange={(e) => setSort(e.target.value)}
            />
            Default
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="ascending"
              checked={sort === "ascending"}
              onChange={(e) => setSort(e.target.value)}
            />
            Low to high
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="descending"
              checked={sort === "descending"}
              onChange={(e) => setSort(e.target.value)}
            />
            High to low
          </label>
        </fieldset>
      </div>
      <ProductGrid products={visibleProducts} />
    </main>
  );
}
