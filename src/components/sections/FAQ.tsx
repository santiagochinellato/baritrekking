import { Container } from "../layout/Container";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useSanity } from "../../hooks/useSanity";
import { PortableText, type PortableTextBlock } from "@portabletext/react";

interface FAQItemData {
  question: string;
  answer: PortableTextBlock[];
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
  content: PortableTextBlock[];
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
        <span className="text-left text-base font-semibold text-bari-teal group-hover:text-bari-orange transition-colors">
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
        <div className="px-6 pb-5 text-bari-slate leading-relaxed portable-text">
          {Array.isArray(content) ? (
            <PortableText
              value={content}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mb-4 last:mb-0">{children}</p>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc pl-5 mb-4">{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal pl-5 mb-4">{children}</ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="mb-2">{children}</li>
                  ),
                  number: ({ children }) => (
                    <li className="mb-2">{children}</li>
                  ),
                },
              }}
            />
          ) : (
            <p className="whitespace-pre-line">
              {content as unknown as string}
            </p>
          )}
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
      answer: [
        {
          _key: "1",
          _type: "block",
          children: [
            {
              _key: "1a",
              _type: "span",
              text: "No es necesaria experiencia para el grupo de Trekking Principal. Organizamos salidas para todos los niveles, desde principiantes hasta avanzados. Lo importante es tener ganas de aprender y respetar tu propio ritmo.",
              marks: [],
            },
          ],
          markDefs: [],
          style: "normal",
        },
      ],
    },
    // Adding just one fallback example to avoid cluttering, essentially assuming real data comes from Sanity or is empty initially if schema changed.
    // The previous hardcoded strings are not compatible with PortableText type unless converted.
    // To match user experience, better to rely on Sanity data once entered.
  ];

  return (
    <section id="FAQ" className="py-20 bg-white scroll-mt-24">
      <Container className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-bari-teal mb-4">
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
