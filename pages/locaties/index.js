import Head from 'next/head';
import Layout from '../../components/Layout';
import CityCard from '../../components/CityCard';
import { mainCities } from '../../lib/constants';

export default function Locations() {
  return (
    <Layout>
      <Head>
        <title>Onze Locaties | Slotenmaker Kristof Ponnet</title>
        <meta name="description" content="24/7 slotenmaker diensten beschikbaar in heel Oost-Vlaanderen. Bekijk onze service gebieden en contacteer ons voor snelle hulp." />
      </Head>

      <section>
        <h1>Slotenmaker in Oost-Vlaanderen</h1>
        <p className="text-xl mb-8">Wij zijn actief in heel Oost-Vlaanderen en bieden 24/7 service in alle onderstaande regio's.</p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mainCities.map(city => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>
      </section>
    </Layout>
  );
}