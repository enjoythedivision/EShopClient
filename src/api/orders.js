import { API_BASE_URL } from "./client";

export async function createOrder(order) {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Error creating order.");
  }

  return response.json();
}
