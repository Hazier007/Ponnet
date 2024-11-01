import React from 'react';
import Link from 'next/link';

export default function CityCard({ city }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="font-bold text-xl mb-3 text-gray-900">{city.name}</h3>
      <p className="text-gray-600 mb-4">
        <span className="font-semibold">Aanrijtijd:</span> {city.response_time}
      </p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Wijken:</h4>
        <ul className="text-gray-600 space-y-1">
          {city.neighborhoods.slice(0, 4).map((neighborhood, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-4 h-4 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              {neighborhood}
            </li>
          ))}
        </ul>
      </div>
      <Link 
        href={`/locaties/${city.slug}`}
        className="inline-flex items-center text-orange-600 hover:text-orange-700"
      >
        <span>Meer informatie</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}