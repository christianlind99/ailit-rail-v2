const MissionSection = () => {
  return (
    <section
      id="product"
      className="w-full bg-white px-6 py-24 font-sans md:px-12"
    >
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-12 md:flex-row md:items-start">
        {/* Left: Large heading */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold leading-tight text-black md:text-6xl">
            Fully electric
            <br />
            from beginning to end
          </h2>
        </div>

        {/* Right: Paragraph and button */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-800 md:w-1/2">
          <p>
            We provide a heavy-duty battery locomotive system that gets freight
            moving faster, smarter, and cleaner than ever before. Wherever you
            need to go, we’ve got you.
          </p>
          <p>
            Say goodbye to the high costs and emissions of diesel. Our
            integrated software platform enables smart charging, real-time
            telematics, and advanced fleet management to help you optimize
            energy use, charging schedules, and train operations—so you can move
            more freight, with less waste and lower total cost of ownership.
          </p>
          <p>
            This is decarbonization with reduced costs. This is next-generation
            rail & freight intelligence.
          </p>
          <a href="/contact">
            <button className="mt-4 rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-900">
              Learn more
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
