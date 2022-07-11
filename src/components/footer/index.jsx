import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import background from '../../assets/images/background.jpg';

// ----------------------------------------------------------------------

export default function Footer() {
  return (
    <footer
      className="footer mt-568:h-380 mt-812:h-60 h-700 bg-cover bg-bottom bg-no-repeat text-gray-300"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full z-10 px-10">
        <div className="grid grid-cols-1 place-items-center gap-10 mt-568:content-start mt-568:grid-cols-2 mt-812:grid-cols-4 mt-6">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                  </svg>
            </div>
          </div>
          
        <div className="flex mt-568:flex-row flex-col items-center justify-between mt-10">
          <p>&#169; 2022 DHAAZ</p>
          <div className="space-x-4">
          </div>
        </div>
      </div>
    </footer>       
  );
};
