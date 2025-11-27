import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <section className="py-20 pt-40 container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card p-10 rounded-2xl animate-fade-in">
          <h1 className="text-4xl font-bold mb-6 text-gradient">
            Mentions légales
          </h1>

          <p className="mb-6 text-muted-foreground">
            Conformément aux obligations de transparence, les informations
            ci-dessous identifient le propriétaire du site ainsi que les
            conditions d’utilisation.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
              <p className="text-muted-foreground">
                <strong>Meltech France SASU</strong>
                <br />
                Capital : 5 000 Euro
                <br />
                Siège social : Sartrouville, France
                <br />
                Email : contact@meltech.fr
                <br />
                Téléphone : +33 7 61 93 09 69
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                Directeur de la publication
              </h2>
              <p className="text-muted-foreground">
                M. Armel Kima, CEO Meltech.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
              <p className="text-muted-foreground">
                Hébergeur : LWS
                <br />
                Adresse : Paris, France
                <br />
                Site web : www.lws.fr
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                Propriété intellectuelle
              </h2>
              <p className="text-muted-foreground">
                Tout le contenu du site (textes, images, logos, interfaces, code
                source) est la propriété exclusive de Meltech sauf mention
                contraire. Toute reproduction est interdite sans autorisation
                écrite.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Responsabilité</h2>
              <p className="text-muted-foreground">
                Meltech France ne saurait être tenue responsable d’un mauvais
                usage du site, de coupures Internet ou d’erreurs techniques
                indépendantes de sa volonté.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
