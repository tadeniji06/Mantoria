import { useState, useRef, useEffect } from "react";
import { Logo } from "../utils/media";
import { Link } from "react-router-dom";
import { headerLinks } from "../utils/consts";
import { Icon } from "@iconify/react";
import gsap from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        {
          x: "0%",
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          display: "block",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 1,
        ease: "power3.in",
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        display: "none",
      });
    }
  }, [isOpen]);

  return (
    <section className='relative'>
      <div className='container mx-auto flex justify-between items-center py-4'>
        <Link to='/'>
          <div className='w-[180px] h-[80px] cursor-pointer'>
            <img
              className='w-full h-full object-cover'
              src={Logo}
              alt='Logo'
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center'>
          {headerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className='font-semibold text-lg mr-6 hover:text-primary-green transition-colors'
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden cursor-pointer z-50'>
          <Icon
            icon={isOpen ? "mdi:close" : "mdi:hamburger"}
            className='text-4xl font-bold'
            onClick={toggleMenu}
          />
        </div>

        {/* Overlay */}
        <div
          ref={overlayRef}
          className='fixed inset-0 bg-black bg-opacity-50 hidden'
          onClick={toggleMenu}
        />

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className='fixed top-0 right-0 h-screen w-[300px] bg-white shadow-lg transform translate-x-full z-40'
        >
          <div className='p-6 flex flex-col space-y-6'>
            {headerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className='font-semibold text-xl text-primary-grey hover:text-primary-green transition-colors'
                onClick={toggleMenu}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className='border-1 border-gray-400' />
    </section>
  );
};

export default Header;
