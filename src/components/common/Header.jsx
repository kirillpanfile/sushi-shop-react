import React from 'react';

import logo from '../../assets/images/logo.png';
import { clock, user, telephone } from '../../assets/icons/index';
import { Link } from 'react-router-dom';

export default function Header() {
  const infoRefHover = React.useRef();

  const [isOpen, setIsOpen] = React.useState(false);

  const style = 'cursor-pointer ease-in-out duration-200 hover:text-[#d81e3fd9]';

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
        <div className="relative">
          <span className="cursor-pointer" ref={infoRefHover} onKeyDown={() => setActive(!active)}>
            informație
          </span>

          {isOpen && (
            <div className="absolute z-10 w-[220px] right-0 font-medium px-5 py-3">
              <ul className="text-[#848484] text-sm">
                <li className="mb-1 ease-in-out duration-200 hover:text-[#d81e3fd9]">
                  <Link to="/">Puncte Take Away & Restaurante</Link>
                </li>
                <li className="mb-1 ease-in-out duration-200 hover:text-[#d81e3fd9]">
                  <Link to="/">Plata si livrarea</Link>
                </li>
                <li className="mb-1 ease-in-out duration-200 hover:text-[#d81e3fd9]">
                  <Link to="/">Posturi vacante</Link>
                </li>
                <li className="ease-in-out duration-200hover:text-[#d81e3fd9]">
                  <Link to="/">Contacte</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
