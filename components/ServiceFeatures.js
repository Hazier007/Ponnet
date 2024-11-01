import React from 'react';

export default function ServiceFeatures({ features }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-start">
          <svg className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}