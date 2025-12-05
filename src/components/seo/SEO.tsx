import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  canonicalUrl?: string; // Should be the full URL
}

const SEO = ({
  title,
  description,
  keywords,
  image,
  canonicalUrl,
}: SEOProps) => {
  const defaultTitle = "Bari.Trekking | Comunidad de Montaña en Bariloche";
  const defaultDescription =
    "Únete a Bari.Trekking, la comunidad de entusiastas del trekking en Bariloche, Argentina. Descubre senderos, comparte experiencias y conecta con la naturaleza en la Patagonia.";
  const defaultKeywords = [
    "Trekking Bariloche",
    "Senderismo Patagonia",
    "Comunidad Outdoor",
    "Turismo Activo",
    "Montaña Argentina",
    "Excursiones Bariloche",
  ];
  const defaultImage = "https://i.ibb.co/LfhB81V/btLogo.webp"; // Replace with a better default social share image if available
  const siteUrl = "https://www.baritrekking.com"; // Replace with actual production URL

  const finalTitle = title ? `${title} | Bari.Trekking` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords
    ? [...defaultKeywords, ...keywords].join(", ")
    : defaultKeywords.join(", ");
  const finalImage = image || defaultImage;
  const finalUrl = canonicalUrl || siteUrl;

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization", // or 'SportsClub' or 'Community'
    name: "Bari.Trekking",
    url: siteUrl,
    logo: defaultImage,
    description: defaultDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Carlos de Bariloche",
      addressRegion: "Río Negro",
      addressCountry: "AR",
    },
    sameAs: [
      "https://www.instagram.com/bari.trekking",
      "https://wa.me/5492944123456",
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title ? finalTitle : defaultTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={title ? finalTitle : defaultTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={title ? finalTitle : defaultTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export { SEO };
