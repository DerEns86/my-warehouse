import {Product} from "../model/Product.ts";

type ProductListProps = {
    products?: Product[]
}

export default function ProductList(props: ProductListProps) {
    return (
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
    )
}