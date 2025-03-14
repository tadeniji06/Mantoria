import React, { useEffect } from 'react';
import Card from "../components/ui/Card";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import gsap from 'gsap';

const NotFound = () => {
  useEffect(() => {
    gsap.to(".animate-404", {
      scale: 1.1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(".animate-icon", {
      y: -15,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card className="w-full max-w-2xl mt-[-150px] md:mx-auto">
        <div className="text-center px-6 py-12">
          <h1 className="animate-404 text-8xl font-bold text-primary-green mb-6">404</h1>
          
          <Icon 
            icon="mdi:compass-off-outline" 
            className="animate-icon text-6xl text-primary-purple mx-auto mb-6"
          />
          
          <h2 className="text-3xl font-semibold text-primary-grey mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for seems to have wandered off...
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-primary-green hover:bg-secondary-green text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Icon icon="mdi:home" className="text-xl" />
            Back to Home
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default NotFound;
