import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  return (
    <div className={`fixed w-full bg-white z-10 py-2 ${isActive ? 'shadow-md' : 'shadow-none'}`}>
      <div className='container mx-auto flex justify-between items-center h-full'>
        <Link to={'/'}>
          <div>
            <img className='w-[40px]' src={Logo} alt='logo'/>
          </div>
        </Link>
        <div className='text-2xl flex cursor-pointer relative'>
          <i onClick={() => setIsOpen(!isOpen)} className="ri-shopping-bag-fill"></i>
          <div onClick={() => setIsOpen(!isOpen)} className='flex justify-center items-center absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white bg-red-500 rounded-full'>{itemAmount}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
