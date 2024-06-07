import React, {useState} from "react";
import {Product, ProductDTO} from "../model/Product.ts";

import { addProduct } from "../API/ProductServiceApi.ts";




export default function AddProductForm(){

    const [product, setProduct] = useState<ProductDTO>({title: '', amount: 0});

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setProduct({title: '', amount: 0})
        await addProduct(product as Product);
        console.log(product.amount, product.title);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={product.title} name="title" onChange={e => setProduct({...product, title: e.target.value})}/>
            </label>
            <label>
                Amount:
                <input type="number" value={product.amount} name="amount"
                       onChange={e => setProduct({...product, amount: parseInt(e.target.value)})}/>
            </label>
            <button type="submit">Add</button>
        </form>
    )
}