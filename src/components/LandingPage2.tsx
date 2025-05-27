import { useEffect } from 'react';

const LandingPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Delay to wait for layout
      }
    }
  }, []);
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute left-0 top-0 z-[-2] h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[-1] bg-black opacity-60" />

      {/* Navbar
      <header className="absolute left-0 right-0 top-0 z-20 flex h-20 items-stretch justify-between border-b border-white bg-black/50 text-white backdrop-blur-sm">
        <div className="flex items-center border-r border-white px-6">
          <span className="text-2xl font-bold">Ailit Rail</span>
        </div>
        <nav className="flex">
          {['About', 'Product', 'Hiring'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="flex items-center border-l border-white px-6 text-sm font-medium hover:underline"
            >
              {item}
            </a>
          ))}
        </nav>
      </header> */}

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 text-white md:px-12 lg:px-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-10 md:flex-row">
          {/* Left Side */}
          <div className="max-w-lg">
            <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl">
              Building the <br />
              Next Generation Rail
            </h1>
          </div>

          {/* Right Side */}
          <div className="max-w-md">
            <p className="mb-6 text-lg">
              We’re making rail fossil-free for good by converting mainline
              locomotives into battery-electric ones using our turnkey battery
              and charging system.
            </p>
            {/* <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200">
              Contact Us →
            </button> */}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <footer className="text-md absolute bottom-6 left-8 z-10 text-white">
        2025 &nbsp;|&nbsp; Based in Stockholm, SE
      </footer>
    </div>
  );
};

export default LandingPage;
