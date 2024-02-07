import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {

  const {id, title, price, amount, image} = item;
  const {handleDecrement, handleIncrement, handleDelete} = useContext(CartContext);

  return <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
    <div className='flex items-center w-full min-h-[150px] gap-x-4'>
      <Link to={`/product/${id}`}>
        <img src={image} alt='product image' className='max-w-[80px]'/>
      </Link>
      <div className='w-full flex flex-col'>
        <div className='flex justify-between mb-2'>
          <Link to={`/product/${id}`} className='max-w-[240px] text-sm font-medium text-primary uppercase hover:underline'>{title}</Link>
          <div><i className="ri-delete-bin-line text-xl cursor-pointer text-gray-500 hover:text-red-500 transition" onClick={() => handleDelete(id)}></i></div>
        </div>
        <div className='flex items-center text-sm h-[36px] gap-x-2'>
          <div className='flex flex-1 max-w-[100px] justify-between items-center h-full border text-primary font-medium'>
            <div className='flex-1 flex justify-center items-center cursor-pointer hover:bg-red-500 hover:text-white h-full' onClick={() => handleDecrement(id)}>-</div>
            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
            <div className='h-full flex-1 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-white' onClick={() => handleIncrement(id)}>+</div>
          </div>
          <div className='flex-1 flex justify-around items-center'>$ {price}
          </div>
          <div className='flex-1 flex justify-end items-center text-primary font-medium'>$ {parseFloat(price*amount).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
