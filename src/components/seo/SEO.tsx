import { Helmet } from "react-helmet-async";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  INSTAGRAM_URL,
  OG_DESCRIPTION,
  OG_IMAGE,
  ORGANIZATION_JSON_LD,
  SITE_NAME,
  SITE_URL,
} from "../../lib/seo";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  image,
  canonicalUrl,
  noindex = false,
}: SEOProps) => {
  const finalTitle = title || DEFAULT_TITLE;
  const finalDescription = description || DEFAULT_DESCRIPTION;
  const finalImage = image || OG_IMAGE;
  const finalUrl = canonicalUrl || SITE_URL;

  return (
    <Helmet>
      <html lang="es" />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={finalUrl} />
      <link rel="author" href={INSTAGRAM_URL} />
      <link rel="publisher" href={INSTAGRAM_URL} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={OG_DESCRIPTION} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={finalImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={OG_DESCRIPTION} />
      <meta name="twitter:image" content={finalImage} />

      <script type="application/ld+json">
        {JSON.stringify(ORGANIZATION_JSON_LD)}
      </script>
    </Helmet>
  );
};

export { SEO };
