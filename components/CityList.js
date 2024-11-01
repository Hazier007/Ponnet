import React from 'react';

export default function CityList({ cities }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cities.map(city => (
        <div key={city.slug} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-bold mb-2">{city.name}</h3>
          <p className="text-sm text-gray-600 mb-2">Aanrijtijd: {city.response_time}</p>
          <ul className="text-sm text-gray-600">
            {city.neighborhoods.slice(0, 3).map(neighborhood => (
              <li key={neighborhood}>{neighborhood}</li>
            ))}
            {city.neighborhoods.length > 3 && (
              <li className="text-orange-600">+ {city.neighborhoods.length - 3} andere wijken</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}