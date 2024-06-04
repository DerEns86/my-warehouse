import './App.css'
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList.tsx";
import {useEffect, useState} from "react";
import {Product} from "./model/Product.ts";
import axios from "axios";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";


export default function App() {

    const [products, setProducts] = useState<Product[]>([])


    function getProducts() {
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data)
            }).catch(error => {
            console.error('Error fetching products:', error)

        })
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<ProductList products={products}/>}/>
            </Routes>
            <Footer />

        </>
    )
}

