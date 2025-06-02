const CallToActionSection = () => {
  return (
    <section className="w-full px-4 py-16 md:px-8">
      <div className="mx-auto flex w-full flex-col items-start justify-between gap-8 rounded-2xl bg-black p-8 text-white md:flex-row md:items-center md:p-16">
        {/* Text Content */}
        <div className="max-w-3xl space-y-6">
          <p className="text-sm leading-snug text-gray-300 md:text-base">
            <strong className="font-semibold text-white">
              Transform the way your goods move.
            </strong>{' '}
            Lower emissions, increase efficiency and reduce costs with
            intelligent rail freight at scale. All with Ailit Rail.
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Move Smarter. <br />
            Move Cleaner. <br />
            Move Cheaper.
          </h2>
        </div>

        {/* CTA Button */}
        <div className="shrink-0">
          <a href="/contact">
            <button className="rounded-full bg-[#001AFF] px-6 py-3 font-medium text-white transition hover:bg-[#0015CC]">
              Learn more
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
