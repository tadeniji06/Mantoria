import React from "react";
import { Link } from "react-router-dom";
import { info } from "../utils/consts";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-primary-green mt-20'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-white font-bold text-xl mb-4'>
              Mantoria's Luxury
            </h3>
            <p className='text-white'>{info.motto}</p>
          </div>

          <div>
            <h4 className='text-white font-bold text-lg mb-4'>
              Quick Links
            </h4>
            <ul className='space-y-2 text-white'>
              <li>
                <Link
                  to='/'
                  className=' hover:text-gray-400 transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className=' hover:text-gray-400 transition-colors'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/properties'
                  className=' hover:text-gray-400 transition-colors'
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className=' hover:text-gray-400 transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-white font-bold text-lg mb-4'>
              Contact Us
            </h4>
            <div className='space-y-2 text-white'>
              <p>Email: {info.email}</p>
              <p>Phone: {info.phone}</p>
              <p>Address: {info.address}</p>
            </div>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-white'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-white'>
              © {year} Mantoria's Luxury. All rights reserved.
            </p>{" "}
            <br />
            <p className="text-white">
              Made with passion by
              <a href='https://www.adnom.netlify.app' target='_blank'>
                WebWise{" "}
              </a>
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              {/* <Link to='/' className="text-white hover:text-gray-500 transition-colors">Privacy Policy</Link>
              <Link to='/' className="text-white hover:text-gray-500 transition-colors">Terms of Service</Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
