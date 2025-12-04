import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const AccordionItem = ({
  title,
  children,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div className="border-b border-bari-dark/10 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:text-bari-teal"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pb-4 pt-0 text-sm text-bari-dark/70">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
  className?: string;
}

const Accordion = ({ items, className }: AccordionProps) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export { Accordion };
