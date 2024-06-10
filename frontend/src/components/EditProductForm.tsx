import {useParams} from "react-router-dom";
import {getProductById, updateProduct} from "../API/ProductServiceApi";
import {Product} from "../model/Product.ts";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";

export default function EditProductForm() {
    const [product, setProduct] = useState({title: '', amount: 0} as Product);
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

   const saveProduct = (e: FormEvent) => {
       e.preventDefault();
       updateProduct(product).then(response => {
              console.log('Product saved:', response.data);
         }).catch(error => {
              console.error('Error saving product:', error);
       })
         console.log('Saving product:', product);
   }

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {

         const {name, value} = e.target;
         setProduct(prevState => ({
              ...prevState,
              [name]: value
         }));

   }

    useEffect(() => {
        getEditableProduct();
    }, [id]);

    return (
        <>
            <h1>Edit Product</h1>

            <form onSubmit={saveProduct}>
                <input value={product.title} name="title" onChange={onChange}/>
                <input value={product.amount} name="amount" onChange={onChange}/>
                <button>Save</button>
            </form>

        </>
    )
}