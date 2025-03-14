import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExclusiveUpdates = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(
      formRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-primary-green/10 to-primary-purple/10"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-4">
            Get Exclusive Updates
          </h2>
          <p className="text-lg text-gray-600">
            Stay informed about our latest luxury properties and market insights
          </p>
        </div>

        <div 
          ref={formRef}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Interests
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition">
                <option value="">Select your interests</option>
                <option value="luxury-homes">Luxury Homes</option>
                <option value="investments">Investment Properties</option>
                <option value="market-updates">Market Updates</option>
                <option value="all">All Updates</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-primary-green border-gray-300 rounded focus:ring-primary-green"
              />
              <label htmlFor="terms" className="ml-2 text-gray-600">
                I agree to receive updates.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-green text-white py-4 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300 transform hover:scale-105"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveUpdates;
