import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ServiceFeatures from '../../components/ServiceFeatures';
import EmergencyContact from '../../components/EmergencyContact';
import CityList from '../../components/CityList';
import FAQ from '../../components/FAQ';
import { services, mainCities } from '../../lib/constants';

export default function ServicePage({ service }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const faqQuestions = [
    {
      q: 'Wat zijn de kosten?',
      a: 'Wij hanteren transparante tarieven die vooraf worden besproken. Neem contact op voor een vrijblijvende prijsopgave.'
    },
    {
      q: 'Hoe snel kunnen jullie ter plaatse zijn?',
      a: 'In de meeste gevallen zijn we binnen 20-30 minuten ter plaatse in heel Oost-Vlaanderen.'
    },
    {
      q: 'Werken jullie met gecertificeerde producten?',
      a: 'Ja, wij werken uitsluitend met SKG-gecertificeerde producten voor optimale veiligheid.'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>{service.title} | Slotenmaker Kristof Ponnet</title>
        <meta name="description" content={service.description} />
      </Head>

      <article className="max-w-4xl mx-auto">
        <h1>{service.title}</h1>
        <p className="text-xl mb-8">{service.description}</p>

        <EmergencyContact />

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Wat wij voor u kunnen betekenen</h2>
          <ServiceFeatures features={service.features} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Waarom Slotenmaker Kristof Ponnet?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">24/7 Beschikbaar</h3>
              <p className="text-gray-600">Dag en nacht bereikbaar voor noodgevallen, 365 dagen per jaar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">Snelle Service</h3>
              <p className="text-gray-600">Binnen 30 minuten ter plaatse in heel Oost-Vlaanderen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">Eerlijke Prijzen</h3>
              <p className="text-gray-600">Transparante tarieven zonder verborgen kosten.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Beschikbaar in deze regio's</h2>
          <CityList cities={mainCities} />
        </section>

        <FAQ questions={faqQuestions} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = services.map(service => ({
    params: { service: service.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const service = services.find(s => s.slug === params.service);

  if (!service) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      service
    }
  };
}