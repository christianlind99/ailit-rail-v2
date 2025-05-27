import React from 'react';

const VisionSection = () => {
  return (
    <section
      id="product"
      className="flex min-h-screen items-center bg-white px-6 text-gray-900 md:px-16 lg:px-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          {/* Left Text Content */}
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-slate-800" />
              <span className="font-medium tracking-wide text-slate-500">
                Vision
              </span>
            </div>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              100% Renewable Rail Industry
            </h2>
            <h2 className="ml-1 mt-2 max-w-xl text-sm font-semibold leading-tight md:text-lg">
              Developing next-generation battery and locomotive technology for a
              100% sustainable rail transportation system.
            </h2>
          </div>

          {/* Metrics */}
          {/* <div className="flex flex-col gap-8 text-right md:flex-row md:gap-14 md:text-left">
            <div>
              <div className="border-l-2 border-violet-500 pl-4 text-2xl font-semibold">
                1000x
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Faster experiments
              </div>
            </div>
            <div>
              <div className="border-l-2 border-violet-500 pl-4 text-2xl font-semibold">
                &gt; 1 Million
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Unique experiments per hour
              </div>
            </div>
          </div> */}
        </div>

        {/* Image or Video */}
        <div className="align-items mt-16 flex flex-col">
          <img
            src="/super_wagon_blur.png"
            alt="super wagon"
            className="mx-auto w-full max-w-4xl rounded-2xl object-cover shadow-lg"
          />
          <p className="mt-4 max-w-xl text-lg text-slate-800">
            The Ailit SuperWagon integrates with current diesel-electric
            locomotives to be able to run on 100% electric power.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
