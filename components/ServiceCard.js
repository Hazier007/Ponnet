import React from 'react';
import Link from 'next/link';
import ServiceIcon from './ServiceIcon';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
        <ServiceIcon name={service.icon} className="w-full h-full text-orange-600" />
      </div>
      <div className="mb-4">
        <ServiceIcon name={service.icon} className="w-8 h-8 text-orange-600" />
      </div>
      <h3 className="font-bold text-lg mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-orange-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        href={`/diensten/${service.slug}`}
        className="mt-4 inline-block text-orange-600 hover:text-orange-700"
      >
        Meer informatie →
      </Link>
    </div>
  );
}