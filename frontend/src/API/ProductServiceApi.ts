import axios from "axios";
import {Product} from "../model/Product.ts";

export async function getAllProducts() {
    return await axios.get("/api/products")
}

export async function addProduct(product : Product) {
    return await axios.post("/api/products", product)
}

export async function getProductById(id : string) {
    return await axios.get(`/api/products/${id}`)
}

export async function updateProduct(product : Product) {
    return await axios.put(`/api/products/${product.id}`, product)
}

export async function deleteProduct(id : string) {
    return await axios.delete(`/api/products/${id}`)
}