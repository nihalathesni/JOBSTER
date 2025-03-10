import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faTimes, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
    setMobileMenuOpen(false);
    setMoreMenuOpen(false);
  };

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setSearchVisible(false);
    setMoreMenuOpen(false);
  };

  const handleMoreMenuClick = () => {
    setMoreMenuOpen(!isMoreMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest('.more-menu')) {
        setMoreMenuOpen(false);
      }
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  return (
    <nav className='bg-[#45577E] text-white px-6 py-4 shadow-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>

        {/* Logo */}
        <div className='flex items-center'>
          <Link to='/'>
            <img className='h-20' src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex space-x-12'>
          <Link to='/' className='hover:text-gray-300 transition duration-300'>Home</Link>
          <Link to='/messages' className='hover:text-gray-300 transition duration-300'>Messages</Link>
          <Link to='/aboutus' className='hover:text-gray-300 transition duration-300'>About</Link>

          {/* More Dropdown */}
          <div className='relative more-menu'>
            <button
              onClick={handleMoreMenuClick}
              className='hover:text-gray-300 transition duration-300 flex items-center'
            >
              More <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </button>
            {isMoreMenuOpen && (
              <div className='absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg'>
                <Link to='/faqs' className='block px-4 py-2 hover:bg-gray-200'>FAQs</Link>
                <Link to='/help' className='block px-4 py-2 hover:bg-gray-200'>Help</Link>
                <Link to='/contact' className='block px-4 py-2 hover:bg-gray-200'>Contact Us</Link>
              </div>
            )}
          </div>
        </div>

        {/* Search and Profile */}
        <div className='flex items-center space-x-6'>
          {/* Search Bar */}
          {isSearchVisible && (
            <form onSubmit={handleSearchSubmit} className='flex items-center'>
              <input
                type='text'
                placeholder='Search...'
                value={searchQuery}
                onChange={handleSearchChange}
                className='bg-transparent border-b-2 border-white focus:outline-none text-white placeholder-white w-full md:w-auto'
              />
              <button type='submit' className='ml-2 text-white hover:text-gray-300'>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          )}

          {/* Search Button */}
          <button
            aria-label='Search'
            onClick={handleSearchClick}
            className='text-white hover:text-gray-300 transition duration-300'
          >
            <FontAwesomeIcon icon={isSearchVisible ? faTimes : faSearch} />
          </button>

          {/* Profile Button */}
          <Link to='/profile'>
            <button aria-label='Profile' className='text-white hover:text-gray-300 transition duration-300'>
              <FontAwesomeIcon icon={faUser} />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            aria-label='Menu'
            onClick={handleMobileMenuClick}
            className='text-white focus:outline-none'
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden mt-4'>
          <div className='flex flex-col space-y-4'>
            <Link to='/' className='hover:text-gray-300 transition duration-300'>Home</Link>
            <Link to='/messages' className='hover:text-gray-300 transition duration-300'>Messages</Link>
            <Link to='/aboutus' className='hover:text-gray-300 transition duration-300'>About Us</Link>

            {/* More Dropdown in Mobile Menu */}
            <div className='relative'>
              <button onClick={handleMoreMenuClick} className='hover:text-gray-300 transition duration-300 flex items-center'>
                More <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </button>
              {isMoreMenuOpen && (
                <div className='mt-2 bg-white text-black shadow-lg rounded-lg'>
                  <Link to='/faqs' className='block px-4 py-2 hover:bg-gray-200'>FAQs</Link>
                  <Link to='/help' className='block px-4 py-2 hover:bg-gray-200'>Help</Link>
                  <Link to='/contact' className='block px-4 py-2 hover:bg-gray-200'>Contact Us</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
