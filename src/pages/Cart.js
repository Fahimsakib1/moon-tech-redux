import React from "react";
import { useSelector } from "react-redux";
import ProductsOnCart from "../components/ProductsOnCart";




const Cart = () => {

  const state = useSelector((state) => state);
  console.log("Cart State:", state.cart);

  return (
    <div>
      {
        state.cart.length > 0 ?
          <>

            <h1 className="font-bold text-center text-2xl text-green-700 mt-6 mb-10">{state.cart.length} {`${state.cart.length > 1 ? "Products" : 'Product'}`} Added to Cart</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
              {
                state.cart.sort((a, b) => a._id - b._id).map((product, index) => <ProductsOnCart product={product} key={index}></ProductsOnCart>)
              }
            </div>
          </>
          :
          <div>
            <h1 className="font-semibold text-center text-3xl text-gray-500 mt-20">No Products Added to Cart Yet...</h1>
          </div>
      }
    </div>
  );
};

export default Cart;
