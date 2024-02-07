import React from 'react';
import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  
  const {isOpen, handleClose} = useContext(SidebarContext);
  const {cart, handleClear, itemAmount, total} = useContext(CartContext);

  return (
    <div className={`flex flex-col fixed top-0 ${isOpen ? 'right-0' : '-right-full'} w-full h-full md:w-[35vw] xl:max-w-[30vw] bg-white shadow-2xl transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between p-1 border-b'>
        <div className='uppercase font-semibold text-sm'>Shopping Bag ({itemAmount})</div>
        <div onClick={handleClose} className='cursor-pointer text-2xl'><i className="ri-close-line"></i></div>
      </div>
      <div className='flex-1 overflow-y-auto overflow-x-hidden flex flex-col gap-y-2 h-[520px] lg:h-[640px] border-b'>
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex justify-between items-center w-full uppercase'>
          <div><span className='font-semibold'>Total: $ {total}</span></div>
          <div onClick={handleClear} className='flex justify-center items-center h-12 w-12 bg-red-500 cursor-pointer text-white text-xl'><i class="ri-delete-bin-line"></i></div>
        </div>
        <Link to={'/'} className='p-4 w-full font-medium flex items-center justify-center bg-gray-200'>View Cart</Link>
        <Link to={'/'} className='p-4 w-full font-medium flex items-center justify-center bg-primary text-white'>Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
