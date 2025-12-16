import { Container } from "../layout/Container";
import { motion } from "framer-motion";
import { useSanity } from "../../hooks/useSanity";
import { TrekkingCard } from "../cards/TrekkingCard";
import { SocialCard } from "../cards/SocialCard";

interface StatItem {
  label: string;
  value: string;
  icon: string;
}

interface BenefitItem {
  name: string;
  desc: string;
  emoji: string;
}

interface GroupsData {
  title: string;
  subtitle: string;
  trekkingCard: {
    title: string;
    description: string;
    badge: string;
    image: unknown;
    levels: string[];
    stats: StatItem[];
    buttonText?: string;
    buttonLink?: string;
  };
  socialCard: {
    title: string;
    badge: string;
    description: string;
    price: string;
    benefits: BenefitItem[];
    buttonText?: string;
    buttonLink?: string;
  };
  preventionCard: {
    title: string;
    description: string;
    tagline: string;
  };
  communityCard: {
    title: string;
    description: string;
    tagline: string;
  };
}

const CompactGroups = () => {
  const { data: groupsData } = useSanity<GroupsData>(`*[_type == "groups"][0]`);

  // Defaults
  const title = groupsData?.title || "Nuestros Espacios";
  const subtitle =
    groupsData?.subtitle ||
    "Trekking gratuito para todos, club social con membresía opcional.";

  // Trekking Card Defaults
  const trekking = groupsData?.trekkingCard || {
    title: "Trekking Principal",
    description:
      "El corazón de Bari.Trekking. Organizamos salidas todo el año para todos los niveles. Descubrí senderos, conocé gente nueva y disfrutá de la montaña.",
    badge: "Acceso Libre / Gratuito",
    image: null,
    levels: ["🥾 Principiantes", "⛰️ Intermedios", "🏔️ Avanzados"],
    stats: [
      { label: "Salidas", value: "200+", icon: "Mountain" },
      { label: "Miembros", value: "1034", icon: "Users" },
      { label: "Eventos", value: "120", icon: "Calendar" },
      { label: "Cursos", value: "10", icon: "GraduationCap" },
      { label: "Acciones", value: "8", icon: "Heart" },
    ],
    buttonText: "Sumarme a las Salidas",
    buttonLink: "#",
  };

  // Social Card Defaults
  const social = groupsData?.socialCard || {
    title: "Club Social & Beneficios",
    badge: "MEMBRESÍA OPCIONAL",
    description: "Accedé a todos los grupos de vida social",
    price: "$5.000",
    benefits: [
      { name: "Bari.Wine", emoji: "🍷", desc: "Catas de vino" },
      { name: "Relax Time", emoji: "🧉", desc: "Mates y eventos" },
      { name: "Bari.Bienestar", emoji: "🧘🏻‍♀️", desc: "Yoga y meditación" },
      { name: "Bari.Red", emoji: "🤝", desc: "Red de apoyo" },
    ],
    buttonText: "Quiero mi Membresía",
    buttonLink: "#",
  };

  // Prevention Card Defaults
  const prevention = groupsData?.preventionCard || {
    title: "Prevención y Seguridad",
    description:
      "Espacio dedicado a aprender y cuidarnos. Info sobre equipamiento, clima y seguridad en montaña.",
    tagline: "Tu seguridad es prioridad",
  };

  return (
    <section id="groups" className="py-20 bg-bari-cream">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl font-heading font-bold text-bari-dark">
            {title}
          </h2>
          <p className="text-lg text-bari-slate max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Compact Bento Grid - 2 Cols */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-[minmax(200px,auto)]">
          <TrekkingCard data={{ ...trekking, prevention }} />
          <SocialCard data={social} />
        </div>
      </Container>
    </section>
  );
};

export { CompactGroups };
