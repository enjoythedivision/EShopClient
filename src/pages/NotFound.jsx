import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="products container" id="main" tabIndex={-1}>
      <h1>404: Page not found</h1>
      <p>The page you requested does not exist.</p>
      <p>
        <Link to="/">Go to the homepage</Link> or{" "}
        <Link to="/products">browse products</Link>.
      </p>
    </main>
  );
}
