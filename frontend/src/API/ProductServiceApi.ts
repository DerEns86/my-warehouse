import axios from "axios";
import {Product, ProductDTO} from "../model/Product.ts";

export  function getAllProducts() {
    return  axios.get("/api/products")
}

export async function addProduct(product : ProductDTO) {
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