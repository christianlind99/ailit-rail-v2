import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react'; // or your icon lib

interface NavbarProps {
  isLandingPage?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLandingPage = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const landingPageItems = ['Product', 'Get in Touch'];

  const bgClass = isLandingPage
    ? 'bg-black/50 text-white border-white'
    : 'bg-black text-white border-gray-200';

  return (
    <>
      <header
        className={`absolute left-0 right-0 top-0 z-20 flex h-20 items-stretch justify-between border-b ${bgClass} backdrop-blur-sm`}
      >
        {/* Logo */}
        <div className="flex items-center border-r px-6">
          <a href="/" className="group relative text-2xl font-semibold">
            Ailit Rail
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          {landingPageItems.map((item) => {
            const isContact = item.toLowerCase().includes('touch');
            const isProduct = item.toLowerCase() === 'product';
            const href = isContact
              ? '/contact'
              : isProduct
                ? '/#product'
                : `#${item.toLowerCase().replace(/\s/g, '')}`;

            return (
              <a
                key={item}
                href={href}
                onClick={(e) => {
                  if (isProduct) {
                    e.preventDefault();
                    if (window.location.pathname !== '/') {
                      window.location.href = '/#product';
                    } else {
                      const el = document.getElementById('product');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="flex items-center border-l px-6 text-sm font-medium hover:underline"
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* Hamburger Menu */}
        <button
          className="flex items-center px-6 md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black text-white transition-opacity duration-300 ease-in-out ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute right-0 top-0 p-6">
          <button
            className="text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex h-full flex-col items-center justify-center space-y-8 text-2xl font-semibold">
          {landingPageItems.map((item) => {
            const isContact = item.toLowerCase().includes('touch');
            const isProduct = item.toLowerCase() === 'product';
            const href = isContact
              ? '/contact'
              : isProduct
                ? '/#product'
                : `#${item.toLowerCase().replace(/\s/g, '')}`;

            return (
              <a
                key={item}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  if (isProduct) {
                    if (window.location.pathname !== '/') {
                      window.location.href = '/#product';
                    } else {
                      const el = document.getElementById('product');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    window.location.href = href;
                  }
                }}
                className="hover:underline"
              >
                {item}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
