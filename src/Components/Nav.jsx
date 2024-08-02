import React, { useState } from 'react';
import ShoeSVG from '../assets/images/shoesvg.svg';
import { navLinks } from '../constants';
import hamburger from '../assets/icons/hamburger.svg';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='padding-x py-8 sticky top-0 z-30 bg-white shadow-md'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={ShoeSVG}
            alt='logo'
            width={129}
            height={50}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img
            src={hamburger}
            alt='hamburger icon'
            width={25}
            height={25}
            onClick={toggleMenu}
            className='cursor-pointer'
          />
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <div className='fixed inset-0 bg-black opacity-50 z-20' onClick={toggleMenu}></div>
          <div className='absolute top-16 left-0 right-0 bg-white z-30 shadow-lg p-4'>
            <ul className='flex flex-col items-center gap-6'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray'
                    onClick={toggleMenu} // Close menu on click
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Nav;
