import { useEffect } from "react";

import { useProductsContext } from "../hooks/useProductsContext";

// components

import Productdetails from "../components/ProductDetails";

import ProductFrom from "../components/Productform";


const Home = () => {
    const {products, dispatch} = useProductsContext()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/products');
            const json = await response.json();

            if (response.ok) {
                dispatch({type:'SET_PRODUCT', payload:json})
            }
        };
        fetchData();
    },[dispatch]);

    return (
        <div className="home">
            <div className="product" >
                {products && products.map((product) => {
                    return(
                        <Productdetails key={product._id} product={product} />
                        
                    )
                })}
                
            </div>
            <ProductFrom />
        </div>
    );
};

export default Home;
