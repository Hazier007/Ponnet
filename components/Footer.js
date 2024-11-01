export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <p>Slotenmaker Kristof Ponnet</p>
            <p>Tel: 0468 11 33 99</p>
            <p>24/7 beschikbaar in Oost-Vlaanderen</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Diensten</h3>
            <ul className="space-y-2">
              <li>Noodslotenmaker</li>
              <li>Sloten Vervangen</li>
              <li>Inbraakbeveiliging</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Regio's</h3>
            <ul className="space-y-2">
              <li>Gent</li>
              <li>Aalst</li>
              <li>Sint-Niklaas</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 Slotenmaker Kristof Ponnet. Alle rechten voorbehouden. Website door <a href="https://hazier.be" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">Hazier</a></p>
        </div>
      </div>
    </footer>
  );
}