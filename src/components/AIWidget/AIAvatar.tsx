import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onClick: () => void;
}

export default function AIProfile({ onClick }: Props) {
  const [showWave, setShowWave] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowWave(true);
      setTimeout(() => setShowWave(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-20 h-20 rounded-full cursor-pointer relative shadow-lg"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {showWave ? (
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-3xl"
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0 }}
        >
          👋
        </motion.div>
      ) : (
        <img
          src="/images/ai-avatar.png"
          alt="AI Avatar"
          className="w-full h-full rounded-full object-cover"
        />
      )}
    </motion.div>
  );
}
