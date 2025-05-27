import React from 'react';

const ContactPage = () => {
  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="mx-auto mt-12 max-w-3xl">
        {/* Heading */}
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Get in touch</h1>
        <p className="mb-12 text-lg text-gray-600">
          Have a question or comment? Submit your message through our contact
          form and a member of our team will get back to you as soon as
          possible.
        </p>

        {/* Form */}
        <form
          className="space-y-6"
          action="https://formspree.io/f/mqaqrzkv"
          method="POST"
        >
          {/* Topic */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              Topic <span className="text-red-500">*</span>
            </label>
            <select
              name="topic"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option>Become a customer</option>
              <option>Partner with us</option>
              <option>Media inquiry</option>
              <option>Other</option>
            </select>
          </div>

          {/* Inputs */}
          {[
            ['First name', 'firstName'],
            ['Last name', 'lastName'],
            ['Company', 'company'],
            ['Work Email', 'email'],
            ['Phone number', 'phone'],
          ].map(([label, name]) => (
            <div key={name}>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                {label}
                {name !== 'phone' && <span className="text-red-500"> *</span>}
              </label>
              <input
                name={name}
                required={name !== 'phone'}
                type={
                  name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'text'
                }
                placeholder={label === 'Work Email' ? 'you@work.com' : label}
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          ))}

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="rounded-full bg-black px-8 py-3 font-medium text-white transition hover:bg-gray-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
