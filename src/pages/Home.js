import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";



const Home = () => {
  
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])


const state = useSelector((state) => state);
console.log("Home State:", state);



  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        products.map((product, index) => <ProductCard product={product} key={index}></ProductCard>)
      }
    </div>
  );
};

export default Home;
