import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Product = ({product}) => {

  const {addToCart} = useContext(CartContext);

  const {id, image, title, category, price} = product;
  return <div>
    <div className='border border-black h-[300px] mb-4 overflow-hidden relative group transition'>
      <div className='flex justify-center items-center h-full w-full'>
        <div className='w-[200px] mx-auto flex items-center justify-center'>
          <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt='product image'/>
        </div>
      </div>
      <div className='absolute p-2 top-1 right-1 flex flex-col gap-2 justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
        <button onClick={() => {addToCart(product, id)}} className='w-12 h-12 drop-shadow-xl text-white bg-red-500'><i className="ri-add-line"></i></button>
        <Link className='w-12 h-12 drop-shadow-xl flex justify-center items-center bg-white' to={`/product/${id}`}><i className="ri-eye-fill"></i></Link>
      </div>
    </div>
    <div>
      <div className='capitalize text-gray-500 mb-1 text-sm'>{category}</div>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{title}</h2>
      </Link>
      <h2 className='font-semibold'>$ {price}</h2>
    </div>
  </div>;
};

export default Product;
