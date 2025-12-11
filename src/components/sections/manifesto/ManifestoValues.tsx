import { motion } from "framer-motion";
import { Heart, Users, Compass, Shield } from "lucide-react";

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
      return <Users size={20} />;
    case "Heart":
      return <Heart size={20} />;
    case "Mountain": // Keep for backward compat if needed
      return <Compass size={20} />;
    case "Compass":
      return <Compass size={20} />;
    case "Shield":
      return <Shield size={20} />;
    default:
      return <Users size={20} />;
  }
};

const getIconStyles = (iconName: string) => {
  switch (iconName) {
    case "Users":
      return "bg-bari-teal/10 text-bari-teal group-hover:bg-bari-teal";
    case "Heart":
      return "bg-bari-orange/10 text-bari-orange group-hover:bg-bari-orange";
    case "Mountain":
      return "bg-bari-gold/10 text-bari-gold group-hover:bg-bari-gold";
    case "Compass":
      return "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500";
    case "Shield":
      return "bg-bari-gold/10 text-bari-gold group-hover:bg-bari-gold";
    default:
      return "bg-bari-teal/10 text-bari-teal group-hover:bg-bari-teal";
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

const getBlobStyles = (iconName: string) => {
  switch (iconName) {
    case "Users":
      return "bg-bari-teal";
    case "Heart":
      return "bg-bari-orange";
    case "Mountain":
    case "Compass":
      return "bg-blue-500";
    case "Shield":
      return "bg-bari-gold";
    default:
      return "bg-bari-teal";
  }
};

const getCardStyles = (iconName: string) => {
  switch (iconName) {
    case "Users":
      return "hover:border-bari-teal/30 hover:shadow-bari-teal/10";
    case "Heart":
      return "hover:border-bari-orange/30 hover:shadow-bari-orange/10";
    case "Mountain":
    case "Compass":
      return "hover:border-blue-500/30 hover:shadow-blue-500/10";
    case "Shield":
      return "hover:border-bari-gold/30 hover:shadow-bari-gold/10";
    default:
      return "hover:border-bari-teal/30 hover:shadow-bari-teal/10";
  }
};

export const ManifestoValues = ({ values }: ManifestoValuesProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24"
    >
      {values.map((value, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ y: -8, scale: 1.02 }}
          className={`group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${getCardStyles(
            value.icon
          )}`}
        >
          {/* Gradient Blob for subtle background effect on hover */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none ${getBlobStyles(
              value.icon
            )}`}
          />

          <div className="flex flex-col items-center text-center space-y-4 relative z-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <motion.div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-sm group-hover:shadow-md group-hover:text-white ${getIconStyles(
                  value.icon
                )}`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {getIcon(value.icon)}
              </motion.div>
              <h3 className="text-2xl font-heading font-bold text-bari-dark">
                {value.title}
              </h3>
            </div>

            <p className="text-bari-slate text-lg leading-relaxed">
              {value.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
