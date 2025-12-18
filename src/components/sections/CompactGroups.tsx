import { Container } from "../layout/Container";
import { motion } from "framer-motion";
import { useSanity } from "../../hooks/useSanity";
import { TrekkingCard } from "../cards/TrekkingCard";
import { SocialCard } from "../cards/SocialCard";
import { ShieldCheck, Leaf, UserCheck, Info } from "lucide-react";

const POLICY_ICONS = [UserCheck, Leaf, ShieldCheck, Info];

const stepsList = [
  "Te sumás a los grupos en los que quieras participar.",
  "Los miembros publican salidas y actividades: trekking, caminatas, mates, catas de vinos, encuentros y propuestas sociales.",
  "Vos elegís libremente a qué sumarte o incluso podés proponer tu propia actividad.",
  "Moderamos los grupos para que estén ordenados y no sean un caos de mensajes.",
  "Cuidamos el ambiente del grupo: si alguien no respeta normas o valores, puede ser removido.",
  "Cada persona es responsable de sí misma: su nivel, su seguridad y su preparación. No hay guías oficiales.",
];

interface HowItWorksData {
  policies?: string[];
}

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
  const { data: howItWorksData } = useSanity<HowItWorksData>(
    '*[_type == "howItWorks"][0]'
  );

  const policySteps = howItWorksData?.policies || stepsList.slice(6);

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
    <section id="groups" className="py-20 bg-bari-cream scroll-mt-24">
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

        {policySteps.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              boxShadow: [
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                "0px 0px 35px 5px rgba(224, 122, 95, 0.2)",
              ],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            className="mt-12 bg-bari-white rounded-3xl p-8 md:p-8 md:w-full border border-white/60 shadow-xl policy-container"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-bari-darkgreen drop-shadow-lg text-center mb-10">
              Lo que tenés que saber antes de sumarte
            </h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="policies-grid grid grid-cols-1 lg:grid-cols-4 gap-8"
            >
              {policySteps.map((step, index) => {
                const Icon = POLICY_ICONS[index % POLICY_ICONS.length];
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                    className="policy-card flex flex-col items-center text-center space-y-4 group p-6 rounded-2xl bg-white/40 hover:bg-white  hover:shadow-xl hover:-translate-y-1 transition-colors transition-shadow transition-transform duration-300 "
                  >
                    <div className="policy-icon-anim">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5, // Stagger the pulse slightly
                        }}
                        className="w-16 h-16 rounded-2xl bg-bari-orange text-bari-white flex items-center justify-center group-hover:scale-110 group-hover:bg-bari-orange group-hover:text-white transition-transform duration-300 shadow-sm group-hover:shadow-md"
                      >
                        <Icon size={32} />
                      </motion.div>
                    </div>
                    <p className="text-bari-darkgreen font-bold leading-relaxed drop-shadow-sm">
                      {step}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </Container>
    </section>
  );
};

export { CompactGroups };
