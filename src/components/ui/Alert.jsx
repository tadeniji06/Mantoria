import React, { useState, useEffect, useRef } from "react";
import img from "../../assets/images/Alert.jpg";
import gsap from "gsap";

const Alert = () => {
  const [isVisible, setIsVisible] = useState(false);
  const alertRef = useRef(null);
  
  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem("hasVisitedMantoria");
    
    // Show alert for first-time visitors
    if (!hasVisited) {
      localStorage.setItem("hasVisitedMantoria", "true");
      showAlert();
    }
    
    // Set up recurring alerts every 2 minutes
    const intervalId = setInterval(() => {
      showAlert();
    }, 2 * 60 * 1000); // 2 minutes in milliseconds
    
    return () => clearInterval(intervalId);
  }, []);
  
  const showAlert = () => {
    setIsVisible(true);
    
    // Animate the alert in
    if (alertRef.current) {
      gsap.fromTo(
        alertRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  };
  
  const hideAlert = () => {
    // Animate the alert out
    if (alertRef.current) {
      gsap.to(alertRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        onComplete: () => setIsVisible(false)
      });
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div 
        ref={alertRef}
        className="relative max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
        style={{ maxHeight: '90vh' }}
      >
        {/* Close button - more prominent */}
        <button 
          onClick={hideAlert}
          className="absolute top-2 right-2 bg-primary-grey text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 z-20"
          aria-label="Close"
        >
          ×
        </button>
        
        <div className="flex flex-col h-full">
          {/* Header with image */}
          <div className="relative">
            <img src={img} alt="Alert" className="w-full h-auto max-h-40 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold px-4 text-center">
                Exciting News for Lagos!
              </h3>
            </div>
          </div>
          
          {/* Scrollable content */}
          <div className="p-4 overflow-y-auto" style={{ maxHeight: '40vh' }}>
            <div className="text-sm text-gray-700">
              <p className="mb-3">
                🌊 First Bank 🏦 and MTN 📱 are making a big move to Eko Atlantic City 🌆, positioning Lagos as a major hub for business in West Africa 🌍.
              </p>
              
              <p className="mb-2 font-bold">🔥 Why is this move important?</p>
              <ul className="list-disc pl-5 mb-3 space-y-1">
                <li><span className="font-semibold">Economic Growth:</span> More jobs and economic activity 📈</li>
                <li><span className="font-semibold">Infrastructure:</span> State-of-the-art facilities 🚧</li>
                <li><span className="font-semibold">Investment:</span> Attracting more investors to Lagos 🌎</li>
              </ul>
              
              <p className="mb-2 font-bold">🤔 Why invest in Lagos?</p>
              <ul className="list-disc pl-5 mb-3 space-y-1">
                <li><span className="font-semibold">Growing Economy:</span> Nigeria's economic hub 📊</li>
                <li><span className="font-semibold">Development:</span> Ongoing infrastructure improvements 🚧</li>
                <li><span className="font-semibold">Business-Friendly:</span> Supportive environment for investors 📈</li>
              </ul>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="bg-primary-green text-white p-3 text-center text-sm">
            <p className="font-bold">Ready to invest in Lagos?</p>
            <p>Mantoria Luxury Realty Homes Ltd.</p>
            <p>Phone: 08143477469, 08138871193</p>
          </div>
          
          {/* Close button at bottom */}
          <button 
            onClick={hideAlert}
            className="w-full bg-primary-grey hover:bg-gray-700 text-white font-bold py-2 px-4"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
