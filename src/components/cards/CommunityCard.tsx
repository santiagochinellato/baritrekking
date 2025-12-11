import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { Card, CardTitle } from "../ui/Card";

export interface CommunityCardProps {
  data: {
    title: string;
    description: string;
    tagline: string;
  };
}

export const CommunityCard = ({ data }: CommunityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="lg:col-span-2 row-span-1"
    >
      <Card className="h-full bg-gradient-to-br from-green-50 via-white to-green-50 border-2 border-green-200 hover:border-green-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
        <div className="flex flex-col items-center text-center p-6 md:p-8">
          <div className="bg-green-100 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
            <HeartHandshake className="text-green-600" size={48} />
          </div>
          <div className="max-w-xl mx-auto">
            <CardTitle className="text-xl font-bold text-bari-dark mb-3">
              {data.title}
            </CardTitle>
            <p className="text-bari-dark text-base md:text-lg font-medium leading-relaxed mb-4 whitespace-pre-line">
              {data.description}
            </p>
            <div className="inline-flex items-center gap-2 text-green-700 font-bold bg-green-100/50 px-4 py-2 rounded-full">
              <HeartHandshake size={20} />
              <span>{data.tagline}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
