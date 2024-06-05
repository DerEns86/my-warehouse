import {Product} from "../model/Product.ts";
import {useNavigate} from "react-router-dom";

type ProductListProps = {
    products?: Product[]
}

export default function ProductList(props: ProductListProps) {
 const navigate = useNavigate();

    function onOpenAddProductForm() {
        console.log('Opening add product form')
        navigate('/add-product')
    }

    return (
        <>
        <div>
            <h1>Product List</h1>

            <ul>
                {props.products?.map(product => (
                    <li key={product.id}>
                        {product.title} - {product.amount}
                    </li>
                ))}
            </ul>
        </div>
        <button className="btn-add" onClick={onOpenAddProductForm}>Add item</button>
        </>
    )
}