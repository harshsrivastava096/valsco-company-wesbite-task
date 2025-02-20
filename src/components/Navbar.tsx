import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-[#0A051F] py-4 px-6 border-b border-gray-800">
      
        <div className="flex justify-end gap-9">
          <Link to="/" className={`${location.pathname === '/' ? 'text-yellow-500' : 'text-white'}`}>
            Home
          </Link>
          <Link to="/calendar" className="text-white">Calendar</Link>
          <Link to="/news" className="text-white">News</Link>
          <Link to="/about" className="text-white">About Us</Link>
          <Link to="/bare-act" className="text-white">Bare Act PDF</Link>
          <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-yellow-500' : 'text-white'}`}>
            Contact Us
          </Link>
          <Link to="/account" className="text-white">Account</Link>
        </div> 
      
    </nav>
  );
}

export default Navbar;