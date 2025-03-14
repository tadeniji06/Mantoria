import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { properties } from "../../utils/consts";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ActiveListing = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className='py-20 px-4 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div ref={headerRef} className='text-center mb-16 space-y-4'>
          <h2 className='text-4xl md:text-5xl font-bold text-primary-green'>
            Featured Properties
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Discover our exclusive collection of luxury properties designed
            for sophisticated living
          </p>
        </div>

        {/* Properties Grid */}
        <div
          ref={cardsRef}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {properties.slice(0, 3).map((property) => (
            <div
              key={property.id}
              className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'
            >
              {/* Property Image */}
              <div className='h-64 overflow-hidden'>
                <img
                  src={property.image}
                  alt={property.name}
                  className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-700'
                />
              </div>

              {/* Property Details */}
              <div className='p-6 space-y-4'>
                <div className='flex justify-between items-start'>
                  <h3 className='text-xl font-bold text-primary-green'>
                    {property.name}
                  </h3>
                  <span className='md:text-xl font-bold text-primary-purple'>
                    {property.price}
                  </span>
                </div>

                <div className='flex items-center text-gray-600'>
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>{property.location}</span>
                </div>

                <p className='text-gray-600 line-clamp-3'>
                  {property.description}
                </p>

                <Link
                  to={`/property/${property.id}`}
                  className='block mt-4'
                >
                  <button className='w-full bg-primary-green text-white py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300'>
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className='text-center mt-16'>
          <Link to='/properties'>
            <button className='bg-white text-primary-green border-2 border-primary-green px-8 py-3 rounded-lg font-bold hover:bg-primary-green hover:text-white transition-all duration-300 transform hover:scale-105'>
              View All Listings
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActiveListing;
