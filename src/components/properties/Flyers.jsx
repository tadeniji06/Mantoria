import React, { useEffect, useRef } from "react";
import {
  Flyer1,
  Flyer2,
  Flyer3,
  Flyer4,
  Flyer5,
  Flyer6,
  Flyer7,
} from "../../utils/media";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Flyers = () => {
  const headerRef = useRef(null);
  const flyersRef = useRef(null);
  const [selectedFlyer, setSelectedFlyer] = React.useState(null);

  const flyers = [
   Flyer6,
   Flyer2,
   Flyer4,
   Flyer1,
   Flyer5,
   Flyer7,
   Flyer3
  ];

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
        },
      }
    );

    gsap.fromTo(
      flyersRef.current.children,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: flyersRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className='py-20 bg-gradient-to-br from-primary-green/5 to-primary-purple/5'>
      <div className='max-w-7xl mx-auto px-4'>
        <div ref={headerRef} className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-primary-green mb-4'>
            Special Promotions
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Discover exclusive offers and limited-time deals on our luxury
            properties
          </p>
        </div>

        <div
          ref={flyersRef}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
        >
          {flyers.map((flyer, index) => (
            <div
              key={index}
              className='group relative cursor-pointer'
              onClick={() => setSelectedFlyer(flyer)}
            >
              <div className='aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl'>
                <img
                  src={flyer}
                  alt={`Promotion ${index + 1}`}
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6'>
                  <span className='text-white font-semibold'>
                    Click to view details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged view */}
        {selectedFlyer && (
          <div
            className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
            onClick={() => setSelectedFlyer(null)}
          >
            <div className='relative max-w-4xl w-full'>
              <button
                className='absolute -top-12 right-0 text-white text-4xl hover:text-primary-green transition-colors'
                onClick={() => setSelectedFlyer(null)}
              >
                ×
              </button>
              <img
                src={selectedFlyer}
                alt='Promotion details'
                className='w-full h-auto rounded-lg'
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Flyers;
