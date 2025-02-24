import { Link, useLocation } from 'react-router-dom';
import JuridentLogo from "../assets/JuridentLogo.png";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-4 border-none border-gray-800">
      <div className="flex sm:flex-row justify-between">
        {/* Logo on the left */}
        <div className="headlog">
          <NavLink to="/">
            <img className="flex justify-center items-center p-1 w-auto h-12" src={JuridentLogo} alt="logo" />
          </NavLink>
        </div>
        
        
        <div className='flex-col justify-between place-items-end'>
          {/* Hamburger Menu Button on the right for mobile */}
          <div className="sm:hidden" >
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                {/* Hamburger Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className={`flex-col sm:flex-row justify-center place-items-end sm:justify-end gap-4 sm:gap-10 ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}>          
            <Link to="/" className={`${location.pathname === '/' ? 'text-yellow-500' : 'text-white'} text-lg sm:text-base`}>
              Home
            </Link>
            <Link to="/calendar" className="text-white text-lg sm:text-base">Calendar</Link>
            <Link to="/news" className="text-white text-lg sm:text-base">News</Link>
            <Link to="/about" className="text-white text-lg sm:text-base">About Us</Link>
            <Link to="/bare-act" className="text-white text-lg sm:text-base">Bare Act PDF</Link>
            <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-yellow-500' : 'text-white'} text-lg sm:text-base`}>
            Contact Us
            </Link>
            <Link to="/account" className="text-white text-lg sm:text-base">Account</Link>
          </div>
        </div>  
      </div>
    </nav>
  );
}

export default Navbar;