import './App.css'
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList.tsx";
import {useEffect, useState} from "react";
import {Product, ProductDTO} from "./model/Product.ts";
import axios from "axios";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import AddProductForm from "./components/AddProductForm.tsx";


export default function App() {

    const [products, setProducts] = useState<Product[]>([])
    const [newProduct, setNewProduct] = useState<ProductDTO>({title: '', amount: 0})


    function getProducts() {
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data)
            }).catch(error => {
            console.error('Error fetching products:', error)

        })
    }

    function addProduct(newProduct: ProductDTO){
        axios.post('/api/products', newProduct)
            .then(response => {
                console.log(`Product added successfully:`, response.data)
                setNewProduct({title: '', amount: 0})
            }).catch(error => {
            console.error('Error adding product:', error)
        })
    }

    useEffect(() => {
        getProducts()
    }, [addProduct])


    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<ProductList products={products}/>}/>
                <Route path="/add-product" element={<AddProductForm addProduct={addProduct}/> }/>
            </Routes>
            <Footer />

        </>
    )
}

