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
        onComplete: () => setIsVisible(false),
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50'>
      <div
        ref={alertRef}
        className='relative w-full max-w-[350px] mx-auto bg-white rounded-lg shadow-xl overflow-hidden mr-16'
        style={{ maxHeight: "90vh" }}
      >
        {/* Close button */}
        <button
          onClick={hideAlert}
          className='absolute top-2 right-2 z-20 flex items-center justify-center w-8 h-8 bg-gray-600 text-white rounded-full hover:bg-gray-700'
        >
          <span className='text-2xl leading-none'>&times;</span>
        </button>

        <div className='flex flex-col h-full'>
          {/* Header with image */}
          <div className='relative'>
            <img
              src={img}
              alt='Alert'
              className='w-full h-auto object-cover'
              style={{ maxHeight: "140px" }}
            />
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30'>
              <h3 className='text-xl font-bold text-white text-center px-4'>
                Exciting News for Lagos!
              </h3>
            </div>
          </div>

          {/* Scrollable content */}
          <div
            className='p-4 overflow-y-auto'
            style={{ maxHeight: "40vh" }}
          >
            <div className='text-sm text-gray-700'>
              <p className='mb-3'>
                🌊 First Bank 🏦 and MTN 📱 are making a big move to Eko
                Atlantic City 🌆, positioning Lagos as a major hub for
                business in West Africa 🌍.
              </p>

              <p className='mb-2 font-bold'>
                🔥 Why is this move important?
              </p>
              <ul className='list-disc pl-5 mb-3'>
                <li className='mb-1'>
                  <span className='font-semibold'>Economic Growth:</span>{" "}
                  More jobs and economic activity 📈
                </li>
                <li className='mb-1'>
                  <span className='font-semibold'>Infrastructure:</span>{" "}
                  State-of-the-art facilities 🚧
                </li>
                <li className='mb-1'>
                  <span className='font-semibold'>Investment:</span>{" "}
                  Attracting more investors to Lagos 🌎
                </li>
              </ul>

              <p className='mb-2 font-bold'>🤔 Why invest in Lagos?</p>
              <ul className='list-disc pl-5 mb-3'>
                <li className='mb-1'>
                  <span className='font-semibold'>Growing Economy:</span>{" "}
                  Nigeria's economic hub 📊
                </li>
                <li className='mb-1'>
                  <span className='font-semibold'>Development:</span>{" "}
                  Ongoing infrastructure improvements 🚧
                </li>
                <li className='mb-1'>
                  <span className='font-semibold'>Business-Friendly:</span>{" "}
                  Supportive environment for investors 📈
                </li>
              </ul>
            </div>
          </div>

          {/* Contact info */}
          <div className='bg-green-800 text-white p-3 text-center text-sm'>
            <p className='font-bold'>Ready to invest in Lagos?</p>
            <p>Mantoria Luxury Realty Homes Ltd.</p>
            <p>Phone: 08143477469, 08138871193</p>
          </div>

          {/* Close button at bottom */}
          <button
            onClick={hideAlert}
            className='w-full bg-gray-600 text-white font-bold py-2 px-4 hover:bg-gray-700 transition duration-200'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
