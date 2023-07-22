import React from 'react';
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { REMOVE_FROM_CART } from '../Redux/ActionTypes/actionTypes';
import { removeFromCart } from '../Redux/ActionCreators/productActions';



const ProductsOnCart = ({ product }) => {
    
    const dispatch = useDispatch();

    return (
        <div>
            <div
                className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
                key={product._id}
            >
                <div className='h-52 w-52 mx-auto'>
                    <img src={product.image} alt={product.model} />
                </div>
                <h1 className='font-bold text-center'>{product.model}</h1>
                <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
                <div className=' flex-1'>
                    <ul className='space-y-2'>
                        {product.keyFeature.map((feature, index) => {
                            return <li key={index} className='text-sm '>{feature}</li>;
                        })}
                    </ul>
                </div>
                <div className='flex gap-2 mt-5'>

                    {/* <button
                        onClick={() => dispatch(removeFromCart(product))}
                        
                        className='bg-red-600 rounded-full py-1 px-2 flex-1 text-white text-bold'>
                        Remove From Cart
                    </button> */}

                    <button
                        onClick={() => dispatch({type: REMOVE_FROM_CART, payload: product})}
                        
                        className='bg-red-600 rounded-md py-1 px-2 flex-1 text-white text-bold' title="Remove Product">
                        Remove From Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductsOnCart;