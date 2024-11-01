import Head from 'next/head';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import CityCard from '../components/CityCard';
import { services, mainCities } from '../lib/constants';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Slotenmaker Kristof Ponnet | 24/7 Slotenmaker in Oost-Vlaanderen</title>
        <meta name="description" content="Slotenmaker Kristof Ponnet biedt 24/7 professionele slotenmakersdiensten in Oost-Vlaanderen. Noodsituaties, sloten vervangen en inbraakbeveiliging." />
      </Head>

      <section className="mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Slotenmaker Kristof Ponnet
          </h1>
          <p className="text-xl text-gray-600">
            Uw Betrouwbare Slotenmaker in Oost-Vlaanderen
          </p>
        </div>

        <div className="bg-orange-600 text-white p-8 rounded-lg mb-12 text-center">
          <p className="text-2xl font-bold mb-4">24/7 Nooddienst</p>
          <a 
            href="tel:0468113399" 
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-md text-2xl font-bold hover:bg-orange-50 transition-colors"
          >
            Bel 0468 11 33 99
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Onze Diensten</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Werkgebied</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainCities.slice(0, 6).map(city => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </section>
    </Layout>
  );
}