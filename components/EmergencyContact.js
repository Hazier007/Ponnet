import React from 'react';

export default function EmergencyContact({ location = '', responseTime = '' }) {
  return (
    <div className="bg-orange-50 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Direct een slotenmaker nodig{location ? ` in ${location}` : ''}?
      </h2>
      <p className="mb-4">
        {responseTime 
          ? `Wij zijn binnen ${responseTime} ter plaatse voor noodgevallen.`
          : 'Wij zijn 24/7 beschikbaar voor noodgevallen in heel Oost-Vlaanderen.'}
      </p>
      <a 
        href="tel:0468113399" 
        className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-700"
      >
        Bel direct: 0468 11 33 99
      </a>
    </div>
  );
}