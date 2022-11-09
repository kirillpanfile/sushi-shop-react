import React from 'react';
import { Link } from 'react-router-dom';

import payments from '../../assets/images/payments.png';

export default function Footer() {
  return (
    <div className="bg-black h-[70px] w-full py-4">
      <div className="max-w-[1200px] h-full mx-auto text-white flex flex-wrap justify-between items-center">
        <h3 className="text-xs">
          <Link to="/" className="font-bold">
            NORISUSHI.MD
          </Link>{' '}
          &copy; 2022. Creat de Empreus Software. Solutii. Web. Premium
        </h3>
        <div className="flex items-center">
          <small>Termeni si conditii | Confidentialitate</small>
          <img src={payments} alt="" className="max-w-[210px]" />
        </div>
      </div>
    </div>
  );
}
