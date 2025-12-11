import { motion } from "framer-motion";
import { Heart, Users, Compass, Shield, Map as MapIcon } from "lucide-react";

interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

interface ManifestoValuesProps {
  values: ValueItem[];
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Users":
      return <Users size={24} />;
    case "Heart":
      return <Heart size={24} />;
    case "Map":
      return <MapIcon size={24} />;
    case "Compass":
      return <Compass size={24} />;
    case "Shield":
      return <Shield size={24} />;
    default:
      return <Users size={24} />;
  }
};

const getTheme = (iconName: string) => {
  switch (iconName) {
    case "Users":
      return {
        cardBg: "bg-[#F2F9F6]", // Very light teal
        borderColor: "border-[#2F5233]/10",
        iconBg: "bg-[#2F5233]/10",
        iconColor: "text-[#2F5233]",
      };
    case "Map":
    case "Compass":
      return {
        cardBg: "bg-blue-50",
        borderColor: "border-blue-100",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
      };
    case "Heart":
      return {
        cardBg: "bg-rose-50",
        borderColor: "border-rose-100",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
      };
    case "Shield":
      return {
        cardBg: "bg-amber-50",
        borderColor: "border-amber-100",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
      };
    default:
      return {
        cardBg: "bg-gray-50",
        borderColor: "border-gray-100",
        iconBg: "bg-gray-100",
        iconColor: "text-gray-600",
      };
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const ManifestoValues = ({ values }: ManifestoValuesProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex md:grid md:grid-cols-2 gap-4 md:gap-8 mb-24 overflow-x-auto snap-x snap-mandatory pb-6 pr-4 [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {values.map((value, index) => {
        const theme = getTheme(value.icon);
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`min-w-[85vw] snap-center md:min-w-0 group relative rounded-3xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${theme.cardBg} ${theme.borderColor}`}
          >
            <div className="flex flex-col items-center text-center space-y-4 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${theme.iconBg} ${theme.iconColor}`}
                >
                  {getIcon(value.icon)}
                </div>
                <h3 className="text-2xl font-heading font-bold text-bari-dark">
                  {value.title}
                </h3>
              </div>

              <p className="text-bari-slate text-lg leading-relaxed">
                {value.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
