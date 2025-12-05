import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";
import { Card, CardTitle } from "../ui/Card";

export interface PreventionCardProps {
  data: {
    title: string;
    description: string;
    tagline: string;
  };
}

export const PreventionCard = ({ data }: PreventionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="lg:col-span-1 row-span-1"
    >
      <Card className="h-full bg-gradient-to-br from-orange-50 to-white border-2 border-bari-orange/30 hover:border-bari-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-bari-orange/10 rounded-full -mr-16 -mt-16" />
        <div className="relative p-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mb-4">
            <div className="bg-bari-orange/20 p-3 rounded-lg">
              <ShieldAlert className="text-bari-orange" size={32} />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold text-bari-dark">
              {data.title}
            </CardTitle>
          </div>
          <p className="text-bari-dark text-sm sm:text-base lg:text-left text-center font-medium leading-relaxed mb-4">
            {data.description}
          </p>
          <div className="w-full inline-flex items-center justify-center lg:justify-start gap-2 text-bari-orange text-xs sm:text-sm font-semibold">
            <ShieldAlert size={16} />
            <span>{data.tagline}</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
