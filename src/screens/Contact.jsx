import { useEffect, useRef } from "react";
import { mediaLinks, info } from "../utils/consts";
import { hero11 } from "../utils/media";
import { Icon } from "@iconify/react";
import gsap from "gsap";

const Contact = () => {
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const socialsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        formRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        socialsRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.8"
      );
  }, []);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div ref={headerRef} className='relative h-[40vh] overflow-hidden'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url(${hero11})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: "brightness(0.7)",
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/60' />
        <div className='relative h-full flex items-center justify-center'>
          <h1 className='text-5xl md:text-7xl font-bold text-white text-center'>
            Get In Touch
          </h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <div className='grid md:grid-cols-2 gap-16'>
          {/* Contact Info */}
          <div ref={socialsRef} className='space-y-8'>
            <h2 className='text-3xl font-bold text-primary-green'>
              Connect With Me
            </h2>
            <div className='space-y-6'>
              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-primary-grey'>
                  Office Address
                </h3>
                <p className='text-gray-600'>{info.address}</p>
              </div>
              {/* <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-primary-grey'>
                  Contact Info
                </h3>
                <p className='text-gray-600'>Phone: +234 123 456 7890</p>
                <p className='text-gray-600'>
                  Email: info@mantorialuxury.com
                </p>
              </div> */}
              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-primary-grey'>
                  Social Media
                </h3>
                <div className='flex gap-6'>
                  {mediaLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-3xl text-primary-green hover:text-secondary-green transition-colors duration-300'
                    >
                      <Icon
                        className='text-5xl font-bold'
                        icon={social.icon}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div ref={formRef} className='space-y-8'>
            <h2 className='text-3xl font-bold text-primary-green'>
              Send a Message Via WhatsApp
            </h2>
            <form className='space-y-6'>
              {/* <div className='space-y-4'>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition'
                />
                <input
                  type='email'
                  placeholder='Your Email'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition'
                />
                <textarea
                  rows='5'
                  placeholder='Your Message'
                  className='resize-none w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition'
                />
              </div> */}
              <div className='mt-10'>
                <a
                  href='https://wa.me/2349161751178?text=Hello%20Mantoria%20Luxury%20Homes%0A%0AMy%20name%20is%3A%20%0A%0AEmail%3A%20%0A%0AI%20would%20like%20to%20make%20an%20inquiry%20about%20your%20services.%20Please%20provide%20more%20details.%0A%0AThank%20you!'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block w-full bg-primary-green text-white py-4 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-300 text-center'
                >
                  Send Message
                </a>
              </div>
            </form>
          </div>

          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
