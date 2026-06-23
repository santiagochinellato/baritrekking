import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Manifesto } from "./components/sections/Manifesto";
import { Requirements } from "./components/sections/Requirements";
import { CompactGroups } from "./components/sections/CompactGroups";
import { SocialWall } from "./components/sections/SocialWall";
import { FAQ } from "./components/sections/FAQ";
import { CommunityCTA } from "./components/sections/CommunityCTA";
import { FloatingCTA } from "./components/ui/FloatingCTA";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { HelmetProvider } from "react-helmet-async";
import { SEO } from "./components/seo/SEO";
import { TermsPage } from "./pages/TermsPage";
import { useEffect, useState } from "react";
import { client, urlFor } from "./lib/sanity";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SITE_URL } from "./lib/seo";

interface SEOSettings {
  title?: string;
  description?: string;
  ogImage?: {
    asset: {
      _ref: string;
    };
  };
}

const HomePage = ({
  seoSettings,
  isLoading,
}: {
  seoSettings: SEOSettings | null;
  isLoading: boolean;
}) => {
  const seoData = {
    title: seoSettings?.title,
    description: seoSettings?.description,
    image: seoSettings?.ogImage ? urlFor(seoSettings.ogImage).url() : undefined,
    canonicalUrl: `${SITE_URL}/`,
  };

  return (
    <>
      <SEO {...seoData} />
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen isLoading={isLoading} key="loading-screen" />
        )}
      </AnimatePresence>
      <div className="min-h-screen bg-bari-cream flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Hero isLoading={isLoading} />
          <Manifesto />
          <Requirements />
          <CompactGroups />
          <SocialWall />
          <CommunityCTA />
          <FAQ />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
};

function App() {
  const [seoSettings, setSeoSettings] = useState<SEOSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSeoSettings = async () => {
      try {
        const data = await client.fetch('*[_type == "settings"][0]');
        setSeoSettings(data);
      } catch (error) {
        console.error("Error fetching SEO settings:", error);
      }
    };
    fetchSeoSettings();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage seoSettings={seoSettings} isLoading={isLoading} />
            }
          />
          <Route path="/terminos-y-condiciones" element={<TermsPage />} />
          <Route path="/terminos-y-condiciones/" element={<TermsPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
