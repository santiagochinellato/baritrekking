import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Manifesto } from "./components/sections/Manifesto";
import { Requirements } from "./components/sections/Requirements";
import { HowItWorks } from "./components/sections/HowItWorks";
import { CompactGroups } from "./components/sections/CompactGroups";
import { SocialWall } from "./components/sections/SocialWall";
import { FAQ } from "./components/sections/FAQ";
import { CommunityCTA } from "./components/sections/CommunityCTA";
import { FloatingCTA } from "./components/ui/FloatingCTA";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { HelmetProvider } from "react-helmet-async";
import { SEO } from "./components/seo/SEO";
import { useEffect, useState } from "react";
import { client, urlFor } from "./lib/sanity";
import { AnimatePresence } from "framer-motion";

interface SEOSettings {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: {
    asset: {
      _ref: string;
    };
  };
}

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

  const seoData = {
    title: seoSettings?.title,
    description: seoSettings?.description,
    keywords: seoSettings?.keywords,
    image: seoSettings?.ogImage ? urlFor(seoSettings.ogImage).url() : undefined,
  };

  return (
    <HelmetProvider>
      <SEO {...seoData} />
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen isLoading={isLoading} key="loading-screen" />
        )}
      </AnimatePresence>
      <div className="min-h-screen bg-bari-cream flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Manifesto />
          <Requirements />
          <HowItWorks />
          <CompactGroups />
          <SocialWall />
          <CommunityCTA />
          <FAQ />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </HelmetProvider>
  );
}

export default App;
