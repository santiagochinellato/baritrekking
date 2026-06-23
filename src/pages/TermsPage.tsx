import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { SEO } from "../components/seo/SEO";
import { SITE_URL } from "../lib/seo";
import { TERMS_LAST_UPDATED, TERMS_SECTIONS } from "../lib/termsContent";

const TermsPage = () => {
  return (
    <>
      <SEO
        title="Términos y Condiciones | Bari.Trekking"
        description="Términos y Condiciones de uso de la comunidad Bari.Trekking. Autonomía, asunción de riesgos y participación responsable en actividades al aire libre."
        canonicalUrl={`${SITE_URL}/terminos-y-condiciones/`}
      />
      <div className="min-h-screen bg-bari-cream font-sans">
        <header className="bg-bari-darkgreen text-white py-6 border-b border-white/10">
          <Container className="flex items-center justify-between gap-4">
            <Link to="/" className="font-heading font-bold text-bari-gold">
              Bari.Trekking
            </Link>
            <Link
              to="/"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Volver al inicio
            </Link>
          </Container>
        </header>

        <main className="py-12 md:py-16">
          <Container className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-bari-dark mb-2">
              Términos y Condiciones
            </h1>
            <p className="text-sm text-gray-500 mb-10">
              Última actualización: {TERMS_LAST_UPDATED}
            </p>

            <div className="prose prose-bari max-w-none space-y-8 text-bari-dark/90">
              {TERMS_SECTIONS.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-heading font-semibold text-bari-dark mb-3">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base leading-relaxed text-gray-700 mb-3"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </Container>
        </main>
      </div>
    </>
  );
};

export { TermsPage };
