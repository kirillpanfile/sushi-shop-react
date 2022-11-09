import React from 'react';

import logo from '../../assets/images/logo.png';
import { clock, user, telephone } from '../../assets/icons/index';
import { Link } from 'react-router-dom';

export default function Header() {
  const style = 'cursor-pointer ease-in-out duration-200 hover:text-[#d81e3fd9]';
  const [show, setShow] = React.useState(false);

  const showDropdown = () => {
    setShow(!show);
  };

  const hideDropdown = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="flex justify-between my-3">
        <img src={logo} className="object-contain w-[150px] h-full" alt="logo" />
        <div className="flex gap-5">
          <div className="flex items-center">
            <img src={clock} className="object-contain w-[25px] h-max mt-1" alt="clock" />
            <p className="font-semibold text-xl">11:00 - 23:00</p>
          </div>
          <div className="flex items-center">
            <img src={telephone} className="object-contain w-[25px] h-max mt-1" alt="clock" />
            <a href="tel:078199299" className="font-semibold text-[#242424] text-xl">
              078 199 299
            </a>
          </div>
          <img src={user} className="object-contain w-[25px] align-middle" alt="user" />
        </div>
      </div>
      <div className="flex justify-between font-bold text-[#242424]">
        <ul className="inline-flex gap-4">
          <li className={`${style} mr-2`}>ROLLS</li>
          <li className={`${style} mx-2`}>SETURI</li>
          <li className={`${style} mx-2`}>WOK</li>
          <li className={`${style} mx-2`}>NIGIRI & GUNKAN</li>
          <li className={`${style} mx-2`}>MAKI</li>
          <li className={`${style} mx-2`}>SALATE</li>
          <li className={`${style} mx-2`}>DESERT</li>
          <li className={`${style} mx-2`}>BĂUTURI</li>
          <li className={`${style} text-[#d81e3fd9] mx-2`}>
            <img src="" alt="" /> PROMOȚII
          </li>
        </ul>
        {/* <select className="cursor-pointer">informație</select> */}

        <div className="relative" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
          <Link href="/" className="px-4 py-2 text-md hover:text-[#d81e3fd9]">
            Informație
          </Link>
          {show && (
            <div className="absolute right-0 top-2 z-10 w-56 mt-4 origin-top-right bg-white">
              <div className="p-2">
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-[#848484] font-semibold hover:text-[#d81e3fd9]"
                >
                  Puncte Take Away & Restaurante
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-[#848484] font-semibold hover:text-[#d81e3fd9]"
                >
                  Plata și livrarea
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-[#848484] font-semibold hover:text-[#d81e3fd9]"
                >
                  Posturi vacante
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-[#848484] font-semibold hover:text-[#d81e3fd9]"
                >
                  Contacte
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
