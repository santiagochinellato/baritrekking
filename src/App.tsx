import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Manifesto } from "./components/sections/Manifesto";
import { CompactGroups } from "./components/sections/CompactGroups";
import { SocialWall } from "./components/sections/SocialWall";
import { FAQ } from "./components/sections/FAQ";
import { CommunityCTA } from "./components/sections/CommunityCTA";
import { FloatingCTA } from "./components/ui/FloatingCTA";

function App() {
  return (
    <div className="min-h-screen bg-bari-cream flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Manifesto />
        <CompactGroups />
        <SocialWall />
        <CommunityCTA />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
