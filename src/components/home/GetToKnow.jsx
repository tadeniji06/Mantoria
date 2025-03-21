import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { hero6 } from "../../utils/media";
import { getToKnowMe } from "../../utils/consts";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GetToKnow = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className='py-20 px-4 md:px-8 max-w-7xl mx-auto'>
      <h2
        ref={titleRef}
        className='font-bold text-4xl md:text-5xl text-primary-green text-center mb-16'
      >
        Get to know the CEO
      </h2>

      <div className='flex flex-col md:flex-row gap-12 items-center'>
        <div
          ref={imageRef}
          className='w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl'
        >
          <img
            src={hero6}
            className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-700'
            alt='Profile'
          />
        </div>

        <div
          ref={textRef}
          className='w-full md:w-1/2 space-y-6 bg-white p-8 rounded-2xl shadow-lg'
        >
          <p className='text-lg text-gray-700 leading-relaxed'>
            {getToKnowMe.body}
          </p>
          <div className='pt-6'>
            <Link to={"/contact"}>
              <button className='bg-primary-green text-white px-8 py-3 rounded-lg hover:bg-secondary-green transition-colors duration-300 shadow-md'>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetToKnow;
