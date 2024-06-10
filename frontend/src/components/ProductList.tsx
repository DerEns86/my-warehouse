import {Product} from "../model/Product.ts";
import { useNavigate } from "react-router-dom";

type ProductListProps = {
    products?: Product[]
    deleteProduct: (id: string) => void
}

export default function ProductList(props: ProductListProps) {
    const navigate = useNavigate();


    function onOpenAddProductForm() {
        console.log('Opening add product form')
        navigate('/add-product')
    }


    return (
        <>
            <h1>Product List</h1>
            <section className="list-content">


                {props.products?.map(product => (
                    <div key={product.id} className="list-item">
                        <p> {product.title} - {product.amount} </p>
                        <div>
                            <button className="btn-delete" onClick={() => props.deleteProduct(product.id)}>X</button>
                            <button className="btn-edit" onClick={()=> navigate(`/edit/${ product.id }`)}>Edit</button>
                        </div>
                    </div>
                ))}

            </section>
            <button className="btn-add" onClick={onOpenAddProductForm}>Add item</button>
        </>
    )
}