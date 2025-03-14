import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { mediaLinks, info } from '../../utils/consts';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
  const sectionRef = useRef(null);
  const socialsRef = useRef(null);

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
      socialsRef.current.children,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: socialsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-6">
          Let's Connect
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Follow us on social media for the latest updates on luxury properties, market insights, and exclusive offerings
        </p>

        <div 
          ref={socialsRef}
          className="flex justify-center items-center gap-8 flex-wrap"
        >
          {mediaLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:bg-primary-green group-hover:scale-110">
                <Icon 
                  icon={social.icon} 
                  className="text-3xl text-primary-green group-hover:text-white transition-colors duration-300"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.name}
              </span>
            </a>
          ))}
        </div>
            <hr className='mt-16 border-t border-gray-400'></hr>
        <div className="mt-16 p-0">
          <h3 className="text-2xl font-bold text-primary-green mb-4">
            Direct Contact
          </h3>
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-medium">Email: </span>
              <a href="mailto:mantorialuxuryhome@gmail.com" className="text-primary-green hover:underline">
          {info.email}
              </a>
            </p>
            <p className="text-lg">
              <span className="font-medium">Phone: </span>
              <a href="tel:+2348138871193" className="text-primary-green hover:underline">
          {info.phone}
              </a>
            </p>
            <p className="text-lg">
              <span className="font-medium">Address: </span>
              {info.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
