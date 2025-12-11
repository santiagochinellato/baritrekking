import { useRef } from "react";
import { Container } from "../layout/Container";
import { cn } from "../../lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSanity } from "../../hooks/useSanity";
import { ShieldCheck, Leaf, UserCheck, Info } from "lucide-react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

interface HowItWorksData {
  title: string;
  subtitle: string;
  steps: string[];
  policies?: string[];
}

interface HowItWorksProps {
  steps?: string[];
  policies?: string[];
}

const stepsList = [
  "Te sumás a los grupos en los que quieras participar.",
  "Los miembros publican salidas y actividades: trekking, caminatas, mates, catas de vinos, encuentros y propuestas sociales.",
  "Vos elegís libremente a qué sumarte o incluso podés proponer tu propia actividad.",
  "Moderamos los grupos para que estén ordenados y no sean un caos de mensajes.",
  "Cuidamos el ambiente del grupo: si alguien no respeta normas o valores, puede ser removido.",
  "Cada persona es responsable de sí misma: su nivel, su seguridad y su preparación. No hay guías oficiales.",
];

const POLICY_ICONS = [UserCheck, Leaf, ShieldCheck, Info];

const HowItWorks = ({ steps = stepsList }: HowItWorksProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const { data } = useSanity<HowItWorksData>('*[_type == "howItWorks"][0]');

  const title = data?.title || "El Sendero";
  const subtitle =
    data?.subtitle || "Cómo funciona nuestra comunidad, paso a paso.";

  // Use data from Sanity if available (with separate fields), otherwise use manual split of fallback
  const journeySteps = data?.steps || steps.slice(0, 6);
  const policySteps = data?.policies || steps.slice(6);

  // Generate Path for Straight Vertical Line - Only for journey steps
  const generatePath = () => {
    return `M 50 0 L 50 100`;
  };

  const pathD = generatePath();

  useGSAP(
    () => {
      if (!pathRef.current) return;

      const items = gsap.utils.toArray(".step-card");
      const pathLength = pathRef.current.getTotalLength();

      // Set initial path state
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Start when container hits 80% viewport
          end: "bottom 80%", // End when bottom hits 80%
          scrub: 1, // Smooth dragging
        },
      });

      // 1. Draw the path
      tl.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        duration: 1,
      });

      // 2. Animate items Staggered
      items.forEach((item) => {
        gsap.fromTo(
          item as HTMLElement,
          { autoAlpha: 0.3, scale: 0.9, filter: "grayscale(100%)" },
          {
            autoAlpha: 1,
            scale: 1,
            filter: "grayscale(0%)",
            duration: 0.5,
            scrollTrigger: {
              trigger: item as HTMLElement,
              start: "top 80%",
              end: "bottom 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef, dependencies: [journeySteps] }
  );

  return (
    <section id="#sendero" className="py-24 bg-bari-cream overflow-hidden">
      <Container>
        <div className="max-w-6xl mx-auto" ref={containerRef}>
          <div className="text-center mb-24 relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-bari-dark mb-6">
              {title}
            </h2>
            <p className="text-bari-slate max-w-xl mx-auto">{subtitle}</p>
            <div className="w-24 h-1 bg-bari-orange mx-auto rounded-full mt-6" />
          </div>

          {/* SECTION 1: TIMELINE (Journey) */}
          <div className="relative lg:min-h-[800px] mb-24">
            {/* SVG Trail Container (Desktop Only >= 1024px) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Background Track (Gray) */}
                <path
                  d={pathD}
                  stroke="#E5E7EB"
                  strokeWidth="1"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="5 5"
                />
                {/* Animated Active Trail (Orange) */}
                <path
                  ref={pathRef}
                  d={pathD}
                  stroke="#E07A5F"
                  strokeWidth="3"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  className="drop-shadow-lg"
                />
              </svg>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 gap-6 lg:gap-0 relative z-10 space-y-8 lg:space-y-0">
              {journeySteps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={cn(
                      "step-card group relative flex items-center lg:h-[130px]",
                      isEven ? "lg:justify-start" : "lg:justify-end"
                    )}
                  >
                    {/* Desktop Node Point on the central line */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white bg-bari-orange shadow-md z-20">
                      <div className="w-full h-full rounded-full bg-white opacity-20 animate-ping" />
                    </div>

                    {/* Content Card */}
                    <div
                      className={cn(
                        "w-full lg:w-[45%] ml-0",
                        isEven
                          ? "lg:pr-12 lg:text-right"
                          : "lg:pl-12 lg:text-left"
                      )}
                    >
                      <div className="relative bg-white/70 backdrop-blur-md border border-white/50 p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 flex lg:block items-start gap-4">
                        {/* Number Badge */}
                        <div
                          className={cn(
                            "shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-bari-teal to-bari-dark text-white rounded-xl lg:rounded-2xl flex items-center justify-center font-bold text-lg lg:text-xl shadow-md lg:shadow-lg lg:absolute lg:-top-6 transform group-hover:scale-110 transition-transform",
                            isEven
                              ? "lg:right-auto lg:-right-6"
                              : "lg:right-auto lg:-left-6"
                          )}
                        >
                          {index + 1}
                        </div>

                        <p className="text-bari-dark text-base lg:text-lg font-medium leading-relaxed pt-1 lg:pt-0">
                          {step}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: POLITIQUES (Policies) */}
          {policySteps.length > 0 && (
            <div className="mt-12 bg-orange-50 rounded-3xl p-8 md:p-12 border border-white/60 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-bari-dark text-center mb-10">
                Lo que tenés que saber antes de sumarte
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {policySteps.map((step, index) => {
                  const Icon = POLICY_ICONS[index % POLICY_ICONS.length];
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center space-y-4 group"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-bari-teal/10 text-bari-teal flex items-center justify-center group-hover:bg-bari-teal group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                        <Icon size={32} />
                      </div>
                      <p className="text-bari-slate font-bold leading-relaxed">
                        {step}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export { HowItWorks };
