import { useState } from 'react';
import Link from 'next/link';
import { services, mainCities } from '../lib/constants';

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Slotenmaker Ponnet
          </Link>
          <div className="space-x-6 flex items-center">
            <div className="relative group">
              <button 
                className="hover:text-orange-600 py-2"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Diensten
              </button>
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-64"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map(service => (
                    <Link 
                      key={service.slug}
                      href={`/diensten/${service.slug}`}
                      className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative group">
              <button 
                className="hover:text-orange-600 py-2"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                Locaties
              </button>
              {locationsOpen && (
                <div 
                  className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-64"
                  onMouseEnter={() => setLocationsOpen(true)}
                  onMouseLeave={() => setLocationsOpen(false)}
                >
                  {mainCities.map(city => (
                    <Link 
                      key={city.slug}
                      href={`/locaties/${city.slug}`}
                      className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a 
              href="tel:0468113399" 
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
            >
              Bel 0468 11 33 99
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}