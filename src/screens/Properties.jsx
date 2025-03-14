import React, { useState } from "react";
import { Link } from "react-router-dom";
import { properties } from "../utils/consts";
import { video1 } from "../utils/media";
import { Icon } from "@iconify/react";

const Properties = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='relative h-[60vh] overflow-hidden'>
        <video autoPlay muted loop className='absolute w-full h-full object-cover'>
          <source src={video1} type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-black/50' />
        <div className='absolute inset-0 flex items-center justify-center text-white text-center'>
          <div className='space-y-6'>
            <h1 className='text-5xl md:text-7xl font-bold'>Our Properties</h1>
            <p className='text-xl md:text-2xl max-w-2xl mx-auto'>
              Discover our exclusive collection of luxury properties
            </p>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Link to={`/property/${property.id}`} key={property.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-primary-green">{property.name}</h3>
                  <div className="flex items-center text-gray-600">
                    <Icon icon="mdi:location" className="mr-2" />
                    <span>{property.location}</span>
                  </div>
                  <p className="text-2xl font-bold text-primary-purple">{property.price}</p>
                  <p className="text-gray-600 line-clamp-2">{property.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
