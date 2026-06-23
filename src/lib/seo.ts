export const SITE_URL = "https://www.baritrekking.com.ar";
export const SITE_NAME = "Bari.Trekking";
export const INSTAGRAM_URL = "https://www.instagram.com/bari.trekking/";

export const DEFAULT_TITLE =
  "Bari.Trekking | Mucho más que Trekking. Somos Comunidad.";

export const DEFAULT_DESCRIPTION =
  "Bari.Trekking es una comunidad de residentes de Bariloche que comparte trekking, actividades sociales y experiencias al aire libre de forma autogestiva, colaborativa y responsable.";

export const OG_DESCRIPTION =
  "Compartimos senderos, actividades sociales y experiencias al aire libre entre residentes de Bariloche para generar vínculos genuinos y construir comunidad.";

export const OG_IMAGE =
  "https://www.baritrekking.com.ar/wp-content/uploads/logo.png";

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Comunidad de residentes de Bariloche que facilita el encuentro para compartir trekking, actividades sociales y experiencias al aire libre de forma autogestiva, colaborativa y responsable.",
  areaServed: "San Carlos de Bariloche",
  logo: OG_IMAGE,
};
