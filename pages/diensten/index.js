import Head from 'next/head';
import Layout from '../../components/Layout';
import ServiceCard from '../../components/ServiceCard';
import { services } from '../../lib/constants';

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Onze Diensten | Slotenmaker Kristof Ponnet</title>
        <meta name="description" content="Professionele slotenmaker diensten in Oost-Vlaanderen: noodslotenmaker, sloten vervangen, en inbraakbeveiliging." />
      </Head>

      <section>
        <h1>Onze Slotenmaker Diensten</h1>
        <p className="text-xl mb-8">Professionele en betrouwbare slotenmaker diensten, 24/7 beschikbaar in heel Oost-Vlaanderen.</p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </Layout>
  );
}