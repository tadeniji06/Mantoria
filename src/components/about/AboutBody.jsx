import React, { useEffect, useRef, useState } from "react";
import { Logo } from "../../utils/media";
import { about } from "../../utils/consts";
import gsap from "gsap";
import { Link } from "react-router-dom";

const AboutBody = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const logoRef = useRef(null);
  const contentRef = useRef(null);
  const textRef = useRef(null);

  // Split the description into preview and full text
  const previewText = about.description.slice(0, 300) + "...";
  const fullText = about.description;

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      logoRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    )
      .fromTo(
        contentRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        "-=0.5"
      )
      .fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        "-=0.5"
      );
  }, []);

  return (
    <div className='container mx-auto px-4'>
      <div
        ref={contentRef}
        className='max-w-4xl mx-auto flex flex-col items-center gap-12'
      >
        {/* Logo Section */}
        <div
          ref={logoRef}
          className='w-full max-w-md h-[300px] overflow-hidden rounded-2xl shadow-xl border border-primary-green'
        >
          <img
            className='w-full h-full object-cover transform hover:scale-105 transition-all duration-700'
            src={Logo}
            alt='Company Logo'
          />
        </div>

        {/* Text Content */}
        <div ref={textRef} className='w-full space-y-6 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-primary-green tracking-tight'>
            ABOUT US
          </h2>

          <div className='space-y-4'>
            <p className='text-lg text-gray-600 leading-relaxed'>
              {isExpanded ? fullText : previewText}
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className='text-primary-green font-semibold hover:text-secondary-green transition-colors duration-300'
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

          <div className='space-y-4 pt-6'>
            {/* <div className='flex items-center justify-center gap-3'>
              <span className='w-12 h-1 bg-primary-green'></span>
              <p className='text-primary-grey font-medium'>
                Founder & CEO
              </p>
            </div> */}

            <div className='flex justify-center'>
              <Link to='/contact'>
                <button className='px-8 py-3 bg-primary-green text-white rounded-lg hover:bg-secondary-green transition-colors duration-300 transform hover:scale-105'>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
