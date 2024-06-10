import './App.css'
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList.tsx";
import {useEffect, useState} from "react";
import {Product, ProductDTO} from "./model/Product.ts";

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import AddProductForm from "./components/AddProductForm.tsx";
import {addProduct, getAllProducts, deleteProduct } from "./API/ProductServiceApi.ts";
import EditProductForm from "./components/EditProductForm.tsx";
import axios from "axios";


export default function App() {

    const [products, setProducts] = useState<Product[]>([]);


  const fetchAllProducts =  () => {
    getAllProducts().then(response => {
        setProducts(response.data);
    }).catch(error => {
        console.error('Error fetching data:', error)
    });
  }

  function addProductDTO(newProduct : ProductDTO) {
      addProduct(newProduct).then(response => {
          setProducts([...products, response.data]);
      }).catch(error => {
          console.error('Error adding data:', error)
      });
  }

  function deleteProductById(id : string) {
      setProducts(products.filter(product => product.id !== id));
      deleteProduct(id).catch(error => {
          console.error('Error deleting data:', error)
      });
    }

    const loadUser = () => {
        axios.get("/api/auth/me")
            .then(response => {
                console.log(response.data)
            })
    }

    function login() {
        const host = window.location.host === "localhost:5173" ? "http://localhost:8080": window.location.origin
        window.open(host + "/oauth2/authorization/github", "_self")
    }


    useEffect(() => {
        fetchAllProducts();
    }, [])


    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<ProductList products={products} deleteProduct={deleteProductById}/>}/>
                <Route path="/add-product" element={<AddProductForm onAddProductDTO={addProductDTO}/>}/>
                <Route path="/edit/:id" element={<EditProductForm/>}/>
            </Routes>
            <button onClick={login}>Login</button>
            <button onClick={loadUser}>Me</button>
            <Footer/>

        </>
    )
}

