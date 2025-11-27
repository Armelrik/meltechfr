export default function CGV() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-4xl mx-auto glass-card p-10 rounded-2xl animate-fade-in">
        <h1 className="text-4xl font-bold mb-6 text-gradient">
          Conditions Générales de Vente (CGV)
        </h1>

        <p className="mb-6 text-muted-foreground">
          Les présentes CGV encadrent les relations contractuelles entre Meltech
          France et ses clients pour la création de sites web, applications et
          services numériques.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Objet du contrat</h2>
            <p className="text-muted-foreground">
              Meltech France fournit des prestations de développement de sites
              web, applications mobiles, outils digitaux et services
              d’hébergement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Paiement</h2>
            <p className="text-muted-foreground">
              – 30% à la signature du cahier des charges.
              <br />
              – Le solde à la livraison.
              <br />
              – Aucun abonnement n’est obligatoire.
              <br />– Une maintenance optionnelle est disponible après les 3
              mois gratuits offerts : entre 50€ et 150€ selon l’offre choisie.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. Livraison des projets
            </h2>
            <p className="text-muted-foreground">
              Les délais sont indiqués dans la proposition commerciale. Ils
              peuvent varier selon les demandes supplémentaires du client.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Support & maintenance
            </h2>
            <p className="text-muted-foreground">
              – Les 3 premiers mois après livraison sont gratuits.
              <br />
              – Après cette période, la maintenance devient optionnelle et
              facturée mensuellement.
              <br />– La maintenance inclut : corrections, support, mises à jour
              légères, monitoring serveur.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Propriété intellectuelle
            </h2>
            <p className="text-muted-foreground">
              Le client est propriétaire du site livré. Meltech France conserve
              la propriété du code source non personnalisé (frameworks
              internes).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Résiliation</h2>
            <p className="text-muted-foreground">
              Chaque partie peut résilier en cas de non-respect du contrat,
              après une notification écrite restée sans réponse sous 30 jours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
