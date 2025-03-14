import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mediaLinks, properties } from "../utils/consts";
import { Icon } from "@iconify/react";

const Property = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const currentProperty = properties.find((p) => p.id === parseInt(id));
    setProperty(currentProperty);
  }, [id]);

  const goToNextProperty = () => {
    const currentIndex = properties.findIndex(p => p.id === parseInt(id));
    const nextProperty = properties[currentIndex + 1] || properties[0];
    navigate(`/property/${nextProperty.id}`);
  };

  const goToPreviousProperty = () => {
    const currentIndex = properties.findIndex(p => p.id === parseInt(id));
    const previousProperty = properties[currentIndex - 1] || properties[properties.length - 1];
    navigate(`/property/${previousProperty.id}`);
  };

  if (!property) return <div>Property not found</div>;

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Image */}
      <div className='relative h-[60vh]'>
        <img
          src={property.image}
          alt={property.name}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/40' />
        
        {/* Hero Navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full px-4 pointer-events-none">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button
              onClick={goToPreviousProperty}
              className="pointer-events-auto bg-white/90 hover:bg-primary-green text-primary-green hover:text-white p-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 group"
            >
              <Icon 
                icon="mdi:chevron-left" 
                className="text-2xl transform group-hover:scale-125 transition-transform"
              />
            </button>
            <button
              onClick={goToNextProperty}
              className="pointer-events-auto bg-white/90 hover:bg-primary-green text-primary-green hover:text-white p-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 group"
            >
              <Icon 
                icon="mdi:chevron-right" 
                className="text-2xl transform group-hover:scale-125 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <div className='grid md:grid-cols-2 gap-12'>
          <div className='space-y-6'>
            <h1 className='text-4xl font-bold text-primary-green'>
              {property.name}
            </h1>
            <p className='text-2xl text-primary-purple'>{property.price}</p>
            <div className='flex items-center text-gray-600'>
              <Icon icon='mdi:location' className='mr-2' />
              <span>{property.location}</span>
            </div>
            <p className='text-gray-600'>{property.description}</p>

            {/* Property Features */}
            <div className='space-y-4'>
              <h3 className='text-2xl font-semibold'>Property Highlights:</h3>
              <ul className='space-y-3'>
                {property.features.map((feature, index) => (
                  <li key={index} className='flex items-center gap-2'>
                    <Icon
                      icon='mdi:check-circle'
                      className='text-primary-green text-xl'
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Section */}
          <div className='space-y-6'>
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4'>
                Schedule a Viewing
              </h3>
              <a
                href='https://wa.link/m7m52o'
                target='_blank'
                rel='noopener noreferrer'
                className='block w-full'
              >
                <button className='w-full bg-primary-green text-white py-3 rounded-lg hover:bg-secondary-green transition-all duration-300'>
                  Book Appointment
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Media Gallery */}
        {(property.images.length > 0 || property.videos.length > 0) && (
          <div className='mt-16 space-y-8'>
            <div className='flex gap-4 justify-center'>
              {property.images.length > 0 && (
                <button
                  onClick={() => setActiveTab("photos")}
                  className={`px-6 py-2 rounded-full ${
                    activeTab === "photos"
                      ? "bg-primary-green text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Photos
                </button>
              )}
              {property.videos.length > 0 && (
                <button
                  onClick={() => setActiveTab("videos")}
                  className={`px-6 py-2 rounded-full ${
                    activeTab === "videos"
                      ? "bg-primary-green text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Videos
                </button>
              )}
            </div>

            {activeTab === "photos" && property.images.length > 0 && (
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {property.images.map((image, index) => (
                  <div
                    key={index}
                    className='aspect-square overflow-hidden rounded-xl cursor-pointer'
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Property ${index + 1}`}
                      className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                    />
                  </div>
                ))}
              </div>
            )}

            {activeTab === "videos" && property.videos.length > 0 && (
              <div className='grid md:grid-cols-2 gap-8'>
                {property.videos.map((video, index) => (
                  <div
                    key={index}
                    className='aspect-video rounded-xl overflow-hidden'
                  >
                    <video controls className='w-full h-full object-cover'>
                      <source src={video} type='video/mp4' />
                    </video>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Floating Navigation */}
      {/* <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-40">
        <button
          onClick={goToPreviousProperty}
          className="bg-white px-6 py-3 rounded-full shadow-lg border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white transition-all duration-300 flex items-center gap-2"
        >
          <Icon icon="mdi:chevron-left" />
          Previous
        </button>
        <button
          onClick={goToNextProperty}
          className="bg-white px-6 py-3 rounded-full shadow-lg border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white transition-all duration-300 flex items-center gap-2"
        >
          Next
          <Icon icon="mdi:chevron-right" />
        </button>
      </div> */}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt='Selected property'
            className='max-w-full max-h-[90vh] object-contain'
          />
        </div>
      )}
    </div>
  );
};

export default Property;
