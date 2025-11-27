import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navbar />

      <section className="py-20 pt-40 container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card p-10 rounded-2xl animate-fade-in">
          <h1 className="text-4xl font-bold mb-6 text-gradient">
            Politique de confidentialité
          </h1>

          <p className="mb-6 text-muted-foreground">
            Cette politique décrit la manière dont Meltech France collecte,
            utilise et protège les données personnelles de ses utilisateurs.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                1. Données collectées
              </h2>
              <p className="text-muted-foreground">
                Nous collectons uniquement les informations nécessaires à la
                fourniture du service : nom, email, numéro de téléphone,
                adresse, données de connexion.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                2. Utilisation des données
              </h2>
              <p className="text-muted-foreground">
                Vos données sont utilisées pour :<br />
                – Gérer votre compte utilisateur
                <br />
                – Répondre à vos demandes
                <br />
                – Assurer le bon fonctionnement du site
                <br />– Améliorer nos services
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                3. Partage des données
              </h2>
              <p className="text-muted-foreground">
                Meltech France ne vend, ne loue et ne partage aucune donnée
                personnelle à des tiers, sauf obligation légale.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                4. Durée de conservation
              </h2>
              <p className="text-muted-foreground">
                Les données sont conservées tant que le compte est actif ou
                selon les obligations légales en vigueur.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                5. Sécurité des données
              </h2>
              <p className="text-muted-foreground">
                Nos serveurs sont protégés par des protocoles de sécurité,
                cryptage SSL et systèmes anti-intrusion. L’accès aux données est
                strictement contrôlé.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
