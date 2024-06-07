import {useParams} from "react-router-dom";
import {getProductById} from "../API/ProductServiceApi";
import {Product} from "../model/Product.ts";
import {useEffect, useState} from "react";

export default function EditProductForm() {
    const [product, setProduct] = useState({} as Product);
    const params = useParams();
    const id = params.id;


   function getEditableProduct() {
       if (id) {
           getProductById(id).then(response => {
               setProduct(response.data);
           }).catch(error => {
               console.error('Error fetching data:', error)
           });
       }else {
           console.error('No id provided')
       }
   }

    useEffect(() => {
        getEditableProduct();
    }, [id]);

    return (
        <>
            <h1>Edit Product</h1>
            <p>{product.title}</p>
            <p>{product.amount}</p>
        </>
    )
}