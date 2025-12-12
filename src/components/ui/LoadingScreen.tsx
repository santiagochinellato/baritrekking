import { motion } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#25424C]"
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Spinner Video */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 md:w-32 md:h-32"
        >
          <video
            src="/spinner.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white font-heading font-bold text-xl md:text-2xl lg:text-3xl tracking-wide text-center"
        >
          Cargando aventura...
        </motion.p>
      </div>
    </motion.div>
  );
};
