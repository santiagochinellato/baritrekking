import { Container } from "../layout/Container";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useSanity } from "../../hooks/useSanity";

interface FAQItemData {
  question: string;
  answer: string;
}

interface FAQData {
  title: string;
  subtitle: string;
  questions: FAQItemData[];
}

const FAQItem = ({
  title,
  content,
  index,
}: {
  title: string;
  content: string;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between hover:bg-bari-teal/5 transition-colors group"
      >
        <span className="text-left text-base font-semibold text-bari-dark group-hover:text-bari-teal transition-colors">
          {title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-bari-teal transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-bari-slate leading-relaxed">
          {content}
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const { data: faqData } = useSanity<FAQData>(`*[_type == "faq"][0]`);

  const title = faqData?.title || "Preguntas Frecuentes";
  const subtitle =
    faqData?.subtitle || "Todo lo que necesitás saber antes de sumarte.";

  const questions = faqData?.questions || [
    {
      question: "¿Necesito experiencia previa para sumarme?",
      answer:
        "No es necesaria experiencia para el grupo de Trekking Principal. Organizamos salidas para todos los niveles, desde principiantes hasta avanzados. Lo importante es tener ganas de aprender y respetar tu propio ritmo.",
    },
    {
      question: "¿Qué equipo necesito para empezar?",
      answer:
        "Para iniciar, necesitás: calzado de trekking cómodo, ropa por capas (térmica, abrigo, impermeable), mochila de 20-30L, agua, comida energética y protección solar. En el grupo de Prevención compartimos listas detalladas según la salida.",
    },
    {
      question: "¿Cómo son las salidas de trekking?",
      answer:
        "Los miembros proponen salidas en el grupo y cada uno decide a cuál sumarse según su nivel. No hay guías oficiales, cada uno es responsable de su seguridad. Compartimos información del sendero, clima y punto de encuentro.",
    },
    {
      question: "¿Qué incluye la Membresía Social de $5.000?",
      answer:
        "Accedés a todos los grupos sociales: Relax Time (mates, afters, eventos), Bari.Wine (catas), Bari.Bienestar (yoga, meditación), Bari.Red (red de apoyo) y Comunidad (acciones voluntarias). Es solo para grupos sociales, el Trekking Principal es siempre gratuito.",
    },
    {
      question: "¿Puedo cancelar la membresía cuando quiera?",
      answer:
        "Sí, podés darte de baja en cualquier momento. La membresía es mensual sin permanencia.",
    },
    {
      question: "¿Hay seguro en las actividades?",
      answer:
        "No. Cada participante es responsable de su propia seguridad y debe contar con obra social o prepaga. Recomendamos informarse sobre seguros adicionales para actividades de montaña.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <Container className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-bari-dark mb-4">
            {title}
          </h2>
          <p className="text-bari-slate text-lg">{subtitle}</p>
        </motion.div>

        <div className="bg-bari-cream rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          {questions.map((faq, index) => (
            <FAQItem
              key={index}
              title={faq.question}
              content={faq.answer}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export { FAQ };
