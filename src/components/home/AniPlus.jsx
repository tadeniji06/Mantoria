import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { house13 } from '../../utils/media';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 350, label: "Satisfied Clients" },
  { number: 900, label: "Properties Sold" },
  { number: 10, label: "Active Listings" }
];

const AniPlus = () => {
  const counterRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    counterRefs.current.forEach((counter, index) => {
      const targetNumber = stats[index].number;
      
      gsap.to(counter, {
        innerHTML: targetNumber,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none reverse"
        },
        onUpdate: function() {
          counter.innerHTML = Math.ceil(counter.innerHTML) + "+";
        }
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stats-section"
      style={{ backgroundImage: `url(${house13})` }}
    >
      <div className="stats-overlay">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <span
                ref={el => counterRefs.current[index] = el}
                className="stat-number"
              >
                0
              </span>
              <h3 className="stat-label">{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AniPlus;
