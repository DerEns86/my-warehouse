import React, {useState} from "react";
import { ProductDTO } from "../model/Product.ts";



type AddProductFormProps = {
    onAddProductDTO: (newProduct: ProductDTO) => void
}


export default function AddProductForm(props : AddProductFormProps) {

    const [product, setProduct] = useState<ProductDTO>({title: '', amount: 0});

    const handleSubmit =  (event: React.FormEvent) => {
        event.preventDefault();
        props.onAddProductDTO(product);
        console.log(product.amount, product.title);
        setProduct({title: '', amount: 0});
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