// import './LandingPage.css'; // For custom CSS fallback

const LandingPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 z-0 bg-black opacity-70" />

      {/* Overlay content */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 text-white">
        <div className="text-2xl font-bold">Ailit Rail</div>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">
            Product
          </a>
          <a href="#" className="hover:underline">
            Tech
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Careers
          </a>
        </nav>
      </header>

      <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">
          Building the future of rail - fully electric
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
