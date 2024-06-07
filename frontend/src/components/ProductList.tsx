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

    const onOpenProductDetails = (id:string):string=> {
        console.log("click" + id);
        return id;
    }



    return (
        <>
            <h1>Product List</h1>
            <section className="list-content">


                {props.products?.map(product => (
                    <div key={product.id} className="list-item" onClick={onOpenProductDetails}>
                       <p> {product.title} - {product.amount} </p>

                    </div>
                ))}

        </section>
        <button className="btn-add" onClick={onOpenAddProductForm}>Add item</button>
        </>
    )
}