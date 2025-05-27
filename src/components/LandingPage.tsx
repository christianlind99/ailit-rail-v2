import React from 'react';
// import './LandingPage.css'; // For custom CSS fallback

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-70 z-0" />


      {/* Overlay content */}
      <header className="flex justify-between items-center px-8 py-6 text-white z-10 relative">
        <div className="text-2xl font-bold">Ailit Rail</div>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Product</a>
          <a href="#" className="hover:underline">Tech</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Careers</a>
        </nav>
      </header>

      <div className="absolute inset-0 flex items-center justify-center text-white text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold">Building the future of rail - fully electric</h1>
      </div>
    </div>
  );
};

export default LandingPage;
