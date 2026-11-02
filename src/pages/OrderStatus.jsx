import { Link, useLocation } from "react-router-dom";

export default function OrderStatus() {
  const { state } = useLocation();
  const orderComplete = state?.orderComplete === true;

  return (
    <main className="order-status container" id="main" tabIndex={-1}>
      <div className="order-status-content">
        <h1 tabIndex={-1}>
          {orderComplete ? "Order complete" : "No completed order to display"}
        </h1>
        <p>
          {orderComplete
            ? "Your order has been placed successfully."
            : "Browse our products and complete checkout to place an order."}
        </p>
        {orderComplete && state.orderId != null && (
          <p className="order-status-reference">
            Order ID: <strong>{state.orderId}</strong>
          </p>
        )}
        <Link className="view-all" to="/products">
          Continue shopping →
        </Link>
        <Link className="order-status-home" to="/">
          Back to home
        </Link>
      </div>
    </main>
  );
}
