import ProductGrid from "../components/ProductGrid"

export default function Products({ products }) {
  return (
    <main className="products container" id="main" tabIndex={-1}>
      <div className="page-heading">
        <h1>Products</h1>
      </div>
      <ProductGrid products={products} />
    </main>
  )
}