import './App.css'
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList.tsx";
import {useEffect, useState} from "react";
import {Product, ProductDTO} from "./model/Product.ts";

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import AddProductForm from "./components/AddProductForm.tsx";
import {addProduct, getAllProducts} from "./API/ProductServiceApi.ts";


export default function App() {

    const [products, setProducts] = useState<Product[]>([]);


  const fetchAllProducts =  () => {
    getAllProducts().then(response => {
        setProducts(response.data);
    }).catch(error => {
        console.error('Error fetching data:', error)
    });
  }

  function onAddProductDTO(newProduct : ProductDTO) {
      addProduct(newProduct).then(response => {
          setProducts([...products, response.data]);
      }).catch(error => {
          console.error('Error adding data:', error)
      });
  }




    useEffect(() => {
        fetchAllProducts();
    }, [])


    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<ProductList products={products}/>}/>
                <Route path="/add-product" element={<AddProductForm  onAddProductDTO={onAddProductDTO}/> }/>
            </Routes>
            <Footer />

        </>
    )
}

