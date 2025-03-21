import React from 'react';
import Img from "../../assets/images/hero/manager.jpg";
import { FaTiktok, FaInstagram } from 'react-icons/fa';

const Director = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <img 
              src={Img} 
              alt="Vanessa Uchenna Amogu - Managing Director" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-2/3 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-green">Meet Our Managing Director</h2>
            <h3 className="text-2xl font-semibold text-primary-grey">Vanessa Uchenna Amogu</h3>
            
            <p className="text-gray-700 leading-relaxed">
              As the Managing Director of Mantoria Luxury Homes, Vanessa brings exceptional leadership 
              and vision to our company. With her extensive experience in luxury real estate development, 
              she ensures that every Mantoria project delivers the highest standards of quality and elegance 
              that our clients expect.
            </p>
            
            <div className="pt-4">
              <h4 className="text-lg font-medium text-primary-grey mb-3">Connect with Vanessa:</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://vm.tiktok.com/ZMBkrYrnU/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-purple hover:text-primary-green transition-colors"
                >
                  <FaTiktok size={24} />
                  <span>TikTok</span>
                </a>
                <a 
                  href="https://www.instagram.com/share/BAHJnHI_s9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-purple hover:text-primary-green transition-colors"
                >
                  <FaInstagram size={24} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Director;
