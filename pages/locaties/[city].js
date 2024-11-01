import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import EmergencyContact from '../../components/EmergencyContact';
import ServiceCard from '../../components/ServiceCard';
import NeighborhoodCard from '../../components/NeighborhoodCard';
import FAQ from '../../components/FAQ';
import { mainCities, services } from '../../lib/constants';

export default function CityPage({ city }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const faqQuestions = [
    {
      q: `Wat zijn de kosten voor een slotenmaker in ${city.name}?`,
      a: 'De kosten zijn afhankelijk van de specifieke situatie. We bespreken altijd vooraf de tarieven zodat u niet voor verrassingen komt te staan.'
    },
    {
      q: `Hoe snel zijn jullie in ${city.name} ter plaatse?`,
      a: `In ${city.name} zijn we meestal binnen ${city.response_time} ter plaatse voor noodgevallen.`
    },
    {
      q: `Werken jullie ook 's nachts in ${city.name}?`,
      a: `Ja, wij zijn 24/7 beschikbaar voor noodgevallen in ${city.name} en omgeving.`
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Slotenmaker in {city.name} | Kristof Ponnet</title>
        <meta name="description" content={`24/7 slotenmaker diensten in ${city.name}. Noodsituaties, sloten vervangen en inbraakbeveiliging door Slotenmaker Kristof Ponnet.`} />
      </Head>

      <article className="max-w-4xl mx-auto">
        <h1>Slotenmaker in {city.name}</h1>
        <p className="text-xl mb-8">Professionele slotenmaker diensten in {city.name} en omgeving, 24/7 beschikbaar voor al uw sloten problemen.</p>

        <EmergencyContact location={city.name} responseTime={city.response_time} />

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Onze diensten in {city.name}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Wijken in {city.name}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {city.neighborhoods.map(neighborhood => (
              <NeighborhoodCard 
                key={neighborhood} 
                neighborhood={neighborhood}
                responseTime={city.response_time}
              />
            ))}
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">Waarom kiezen voor Slotenmaker Ponnet in {city.name}?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-bold text-lg mb-3">Lokale expertise</h3>
              <p className="text-gray-600">Als lokale slotenmaker kennen we {city.name} door en door en zijn we snel ter plaatse.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">24/7 beschikbaar</h3>
              <p className="text-gray-600">Dag en nacht bereikbaar voor spoedgevallen in {city.name} en omgeving.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Eerlijke prijzen</h3>
              <p className="text-gray-600">Transparante tarieven zonder verborgen kosten of voorrijkosten in {city.name}.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Gecertificeerd vakmanschap</h3>
              <p className="text-gray-600">Werken uitsluitend met SKG-gecertificeerde producten en technieken.</p>
            </div>
          </div>
        </section>

        <FAQ questions={faqQuestions} location={city.name} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = mainCities.map(city => ({
    params: { city: city.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const city = mainCities.find(c => c.slug === params.city);

  if (!city) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      city
    }
  };
}