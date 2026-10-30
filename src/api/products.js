import { API_BASE_URL } from './client'

async function getProducts() {
    const response = await fetch(`${API_BASE_URL}/products`, {
        method: "GET"
    })

    if (!response.ok) throw new Error("Error fetching products.")

    return response.json();
}

async function getProduct(id) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: "GET"
    })

    if (!response.ok) throw new Error("Error fetching product.")

    return response.json();
}

//Below are CREATE, UPDATE, DELETE functions for products, meant to be used in the admin panel.
//The endpoints are implemented in the backend, but not yet used in the frontend. 
// They are included here for future use when user roles and authorisation are implemented.

async function deleteProduct(id) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: "DELETE"
    })

    if (!response.ok) throw new Error("Error deleting product.")

}

async function createProduct(productData) {
    const response = await fetch(`${API_BASE_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productData)
    })

    if (!response.ok) throw new Error("Error creating product.")

    return response.json();
}

async function updateProduct(id, productData) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productData)
    })

    if (!response.ok) throw new Error("Error updating product.")

    return response.json();
}

export { getProducts, getProduct }
