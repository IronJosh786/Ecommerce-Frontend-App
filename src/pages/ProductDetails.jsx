import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  const product = products.find(item => item.id === parseInt(id));

  if(!product) {
    return <div className='flex items-center justify-center h-screen'>Loading...</div>
  }

  const {title, description, image, price} = product;

  return <div className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center justify-center'>
        <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
          <img className='max-w-[200px] lg:max-w-sm' src={image} alt='product image'/>
        </div>
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
          <div className='text-xl text-red-500 font-medium mb-6'>$ {price}</div>
          <p className='mb-8'>{description}</p>
          <button className='bg-primary py-4 px-8 text-white' onClick={() => addToCart(product, product.id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  </div>;
};

export default ProductDetails;
