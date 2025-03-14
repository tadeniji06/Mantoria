import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import gsap from "gsap";
import { services } from '../../utils/consts';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const sectionRef = useRef(null);



  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.service-card');

    cards.forEach((card, index) => {
      gsap.fromTo(card,
        { 
          y: 100,
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-green/5 to-primary-purple/5">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering exceptional luxury real estate services with unmatched attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mb-4">
                  <Icon 
                    icon={service.icon} 
                    className="text-4xl text-primary-green"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary-green">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
