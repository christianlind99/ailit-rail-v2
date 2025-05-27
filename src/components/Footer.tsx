import React from 'react';
// import { FaLocationDot } from 'react-icons/fa6';
// import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black px-6 py-16 text-white md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
        {/* Logo + Tagline */}
        <div>
          <div className="mb-4 text-xl font-bold">Ailit Rail</div>
          <p className="mb-4 text-gray-300">
            Electrifying Locomotives with Large Scale Battery Packs.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            {/* <FaLocationDot className="text-lg" /> */}
            <span>Stockholm, SE</span>
          </div>
        </div>

        {/* Menu
        <div>
          <h4 className="mb-4 font-semibold text-violet-400">Menu</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Vision</a>
            </li>
            <li>
              <a href="#">Challenge</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div> */}

        {/* Contact */}
        <div className="ml-auto">
          <h4 className="mb-4 font-semibold text-gray-400">Contact us</h4>
          {/* <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-gray-700 px-4 py-2 text-sm text-white">
            <FaLocationDot className="text-white" />
            <span>info@ailitrail.com</span>
          </div> */}
          <p className="text-gray-200">info@ailitrail.com</p>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-violet-300">
              {/* <FaXTwitter /> */}
            </a>
            <a href="#" className="hover:text-violet-300">
              {/* <FaLinkedin /> */}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 flex items-center justify-between border-t border-gray-800 pt-6 text-xs text-gray-500">
        <p>© 2025 Ailit Rail. All rights reserved</p>
        <a href="#" className="hover:underline">
          {/* Policy service */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
