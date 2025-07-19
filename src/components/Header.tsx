import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Portfolio',
    path: '/portfolio'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const activeClass = 'text-teal-700 font-medium';
  const normalClass = 'text-gray-800 hover:text-teal-700 transition-colors';
  return <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-medium text-black">
          Erika Nicole Suhr
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => <NavLink key={item.name} to={item.path} className={({
          isActive
        }) => isActive ? activeClass : normalClass} end={item.path === '/'}>
              {item.name}
            </NavLink>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <nav className="md:hidden bg-white absolute top-full left-0 w-full py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map(item => <NavLink key={item.name} to={item.path} className={({
          isActive
        }) => isActive ? activeClass : normalClass} onClick={() => setMobileMenuOpen(false)} end={item.path === '/'}>
                {item.name}
              </NavLink>)}
          </div>
        </nav>}
    </header>;
}