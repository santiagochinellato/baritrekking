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
      return <Users size={40} />;
    case "Heart":
      return <Heart size={40} />;
    case "Mountain": // Keep for backward compat if needed
      return <Compass size={40} />;
    case "Compass":
      return <Compass size={40} />;
    case "Shield":
      return <Shield size={40} />;
    default:
      return <Users size={40} />;
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

export const ManifestoValues = ({ values }: ManifestoValuesProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
    >
      {values.map((value, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          className="text-center space-y-4 group cursor-pointer"
        >
          <motion.div
            className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all group-hover:text-white group-hover:shadow-lg ${getIconStyles(
              value.icon
            )}`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {getIcon(value.icon)}
          </motion.div>
          <h3 className="text-xl font-bold text-bari-dark ">{value.title}</h3>
          <p className="text-bari-slate">{value.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};
