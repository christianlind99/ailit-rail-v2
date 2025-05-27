import React from 'react';

interface NavbarProps {
  isLandingPage?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLandingPage = false }) => {
  const landingPageItems = ['Product', 'Get in Touch'];

  const bgClass = isLandingPage
    ? 'bg-black/50 text-white border-white'
    : 'bg-black text-white border-gray-200';

  return (
    <header
      className={`absolute left-0 right-0 top-0 z-20 flex h-20 items-stretch justify-between border-b ${bgClass} backdrop-blur-sm`}
    >
      {/* Logo / Brand */}
      <div className="flex items-center border-r px-6">
        <a href="/" className="group relative text-2xl font-semibold">
          Ailit Rail
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
        </a>
      </div>
      <nav className="flex">
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
    </header>
  );
};

export default Navbar;
