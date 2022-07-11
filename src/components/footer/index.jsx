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
        <div className="flex mt-568:flex-row flex-col items-center justify-between mt-10">
          <p>&#169; 2022 DHAAZ</p>
          <div className="space-x-4">        
        </div>
      </div>
    </footer>
  );
};
