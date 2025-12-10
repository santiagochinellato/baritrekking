"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Users } from "lucide-react";
import { Container } from "../layout/Container";
import { useSanity } from "../../hooks/useSanity";
import { urlFor } from "../../lib/sanity";

interface SocialItem {
  _key: string;
  type: "story" | "post";
  image: unknown;
  username: string;
  handle: string;
}

interface SocialWallData {
  title: string;
  subtitle: string;
  items: SocialItem[];
}

const SocialCard = ({ item, index }: { item: SocialItem; index: number }) => {
  const isStory = item.type === "story";
  const imageUrl = item.image
    ? urlFor(item.image).width(800).auto("format").url()
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group shrink-0 w-[85vw] sm:w-[350px] md:w-auto h-[400px] md:h-auto snap-center ${
        isStory ? "md:row-span-2" : "md:row-span-1"
      }`}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={item.username}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
          <Instagram className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm truncate">
            {item.username}
          </p>
          <p className="text-white/70 text-xs truncate">{item.handle}</p>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-bari-teal/0 group-hover:bg-bari-teal/10 transition-colors duration-300" />
    </motion.div>
  );
};

export const SocialWall = () => {
  const {
    data: socialData,
    loading,
    error,
  } = useSanity<SocialWallData>(`*[_type == "socialWall"][0]`);
  const [currentSet, setCurrentSet] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const title = socialData?.title || "Nuestra Comunidad en Acción";
  const subtitle =
    socialData?.subtitle ||
    "Compartimos momentos reales de nuestras aventuras en la montaña y encuentros sociales.";
  const items = socialData?.items || [];

  // Get 8 items for the grid (2 stories + 2 posts per column × 2 columns = 8 items)
  const getDisplayItems = () => {
    if (!items.length) return [];

    const stories = items.filter((item) => item.type === "story");
    const posts = items.filter((item) => item.type === "post");

    // Fallback if we don't have enough items
    if (stories.length === 0 || posts.length === 0) return items.slice(0, 6);

    const startStory = (currentSet * 2) % stories.length;
    const startPost = (currentSet * 4) % posts.length;

    return [
      stories[startStory % stories.length],
      posts[startPost % posts.length],
      posts[(startPost + 1) % posts.length],
      stories[(startStory + 1) % stories.length],
      posts[(startPost + 2) % posts.length],
      posts[(startPost + 3) % posts.length],
    ];
  };

  const displayItems = getDisplayItems();

  // Auto-rotation logic
  useEffect(() => {
    if (isPaused || items.length === 0) return;

    timerRef.current = setInterval(() => {
      setCurrentSet((prev) => prev + 1);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, items.length]);

  if (loading) {
    return <div className="py-24 text-center">Cargando comunidad...</div>;
  }

  if (error) {
    return (
      <div className="py-24 text-center text-red-500">
        <p>Error al cargar Social Wall:</p>
        <pre className="text-xs mt-2">{JSON.stringify(error, null, 2)}</pre>
        <p className="text-sm mt-4 text-gray-500">
          Posible causa: CORS no configurado en Sanity Manage.
        </p>
      </div>
    );
  }

  if (!socialData && !items.length) {
    return (
      <div className="py-24 text-center">
        No se encontraron datos en Sanity.
      </div>
    );
  }

  if (socialData && !items.length) {
    return <div className="py-24 text-center">No hay posts para mostrar.</div>;
  }

  return (
    <section
      className="py-24 bg-gradient-to-b from-white to-bari-cream"
      id="social-wall"
    >
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-bari-teal/10 text-bari-teal px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            <span>Comunidad Activa</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-bari-dark mb-4">
            {title}
          </h2>
          <p className="text-bari-slate text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Grid / Carousel */}
        <div
          className="relative min-h-[416px] md:min-h-[576px] overflow-hidden md:overflow-visible"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSet}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 md:auto-rows-[280px]"
            >
              {displayItems.map((item, index) => (
                <SocialCard
                  key={`${item._key}-${currentSet}`}
                  item={item}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pause Indicator */}
          {isPaused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium"
            >
              Pausado
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/bari.trekking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span>Seguinos en Instagram</span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
};
