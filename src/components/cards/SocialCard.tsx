import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

interface BenefitItem {
  name: string;
  desc: string;
  emoji: string;
}

export interface SocialCardProps {
  data: {
    title: string;
    badge: string;
    description: string;
    price: string;
    benefits: BenefitItem[];
    buttonText?: string;
    buttonLink?: string;
  };
}

export const SocialCard = ({ data }: SocialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="lg:col-span-1 row-span-2"
    >
      <Card className="h-full bg-gradient-to-br from-gray-900 via-bari-dark to-gray-900 text-white border-none shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bari-gold/5 via-transparent to-bari-orange/5 pointer-events-none" />

        <div className="relative z-10 h-full flex flex-col p-6 md:p-8">
          <CardHeader className="p-0 pb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start items-start mb-3 gap-3">
              <div className="bg-bari-gold text-bari-dark px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg inline-flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-lg">🚀</span>
                <span>{data.badge}</span>
              </div>
            </div>
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 sm:mb-4 text-left bg-gradient-to-r from-bari-gold via-amber-300 to-bari-gold bg-clip-text text-transparent">
              {data.title}
            </CardTitle>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-left">
              {data.description}
            </p>
          </CardHeader>

          <CardContent className="p-0 flex-grow flex flex-col justify-between">
            <div className="space-y-2.5 mb-6">
              {data.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{benefit.emoji}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="font-bold text-sm text-white">
                      {benefit.name}
                    </div>
                    <div className="text-xs text-gray-400">{benefit.desc}</div>
                  </div>
                  <Check className="text-bari-gold flex-shrink-0" size={18} />
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 mt-auto space-y-4">
              <div className="text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-1">
                  {data.price}
                </div>
                <div className="text-sm text-gray-400 font-medium">por mes</div>
              </div>
              <Button
                onClick={() => (window.location.href = data.buttonLink || "#")}
                className="bg-gradient-to-r from-bari-orange to-orange-600 hover:from-bari-orange/90 hover:to-orange-700 text-white w-full py-6 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
                size="lg"
              >
                {data.buttonText || "Acceder Ahora"}
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};
