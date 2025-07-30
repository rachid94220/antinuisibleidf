export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Dératisation & Désinsectisation en Île-de-France</h1>
        <p className="mb-4">
          IDF 3D Zéro Nuisibles intervient 7j/7 à Paris, dans le Val-de-Marne (94), la Seine-Saint-Denis (93), les Hauts-de-Seine (92) et toute l’Île-de-France. Nous sommes spécialisés en dératisation, traitement des punaises de lit, destruction de nids de guêpes et désinsectisation.
        </p>
        <p className="mb-6">
          Appelez-nous au <a href="tel:0600000000" className="text-blue-600 underline">06 00 00 00 00</a> pour une intervention rapide et un devis gratuit.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Nos services :</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Dératisation (rats, souris, mulots)</li>
          <li>Traitement des punaises de lit</li>
          <li>Destruction de nids de guêpes ou frelons</li>
          <li>Désinsectisation (cafards, blattes, fourmis, puces...)</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Zones d’intervention :</h2>
        <ul className="list-disc list-inside">
          <li>Paris (75)</li>
          <li>Val-de-Marne (94) : Saint-Mandé, Créteil, Vincennes…</li>
          <li>Seine-Saint-Denis (93) : Montreuil, Noisy-le-Grand…</li>
          <li>Hauts-de-Seine (92) : Boulogne, Levallois, Nanterre…</li>
        </ul>
      </div>

      {/* Bouton Appel Fixe */}
      <a
        href="tel:0600000000"
        className="fixed bottom-4 right-4 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg z-50 hover:bg-green-700"
      >
        📞 Appeler maintenant
      </a>
    </main>
  );
}
