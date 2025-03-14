import { hero4, hero6, hero8 } from '../../utils/media';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const AboutHeader = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      headingRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
      }
    )
    .fromTo(
      paragraphRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      "-=0.8"
    )
    .fromTo(
      buttonRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className='relative w-full md:h-[500px] h-[400px] rounded-xl overflow-hidden'>
      {/* Background Image with Blur */}
      <div
        className='absolute inset-0 w-full h-full transition-transform duration-700 hover:scale-105'
        style={{
          backgroundImage: `url(${hero6})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "blur(2px) brightness(0.7)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      {/* Content Overlay */}
      <div className='relative h-full flex flex-col items-center justify-center text-white px-4'>
        <h1
          ref={headingRef}
          className='text-6xl md:text-8xl font-bold mb-6 text-center opacity-0 drop-shadow-lg'
        >
          About Me
        </h1>
        <p
          ref={paragraphRef}
          className='text-xl md:text-3xl font-semibold tracking-wider text-center max-w-3xl mb-12 opacity-0 drop-shadow-md'
        >
          My Journey of Excellence
        </p>
        <div ref={buttonRef} className="opacity-0">
          <Link to="/contact">
            <Button
              title="Get in Touch"
              className="bg-white hover:bg-primary-green hover:text-white text-black py-3 px-8 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
