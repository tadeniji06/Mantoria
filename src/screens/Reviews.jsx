import React, { useEffect, useRef } from "react";
import { reviewData } from "../utils/consts";
import { r1, r2, r3, r4, r5, r6, r7, r8, r9, r10 } from "../utils/media";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  const headerRef = useRef(null);
  const imagesRef = useRef(null);
  const textRef = useRef(null);

  const images = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10];

  useEffect(() => {
    // Animate header
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 }
    );

    // Animate images with floating effect
    images.forEach((_, index) => {
      gsap.to(
        imagesRef.current.children[index],
        {
          y: "20px",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2
        }
      );
    });

    // Animate text sections
    gsap.fromTo(
      textRef.current.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-green/5 to-primary-purple/5">
      {/* Header Section */}
      <div ref={headerRef} className="text-center py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-green mb-6">
          Our Success Story
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
          {reviewData.body.split('\n\n')[0]}
        </p>
      </div>

      {/* Image Gallery */}
      <div 
        ref={imagesRef}
        className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20"
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500"
          >
            <img
              src={image}
              alt={`Success ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Text Sections */}
      <div ref={textRef} className="max-w-4xl mx-auto px-4 pb-20 space-y-12">
        {reviewData.body.split('\n\n').slice(1).map((paragraph, index) => (
          <div 
            key={index}
            className="text-center"
          >
            <p className={`text-lg ${
              index === 1 ? 'text-primary-green font-semibold italic' : 'text-gray-600'
            }`}>
              {paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
