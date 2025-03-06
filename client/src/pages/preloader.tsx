import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [decrypted, setDecrypted] = useState(false);
  const textLines = [
    "> Initializing ACM system...",
    "> Running AI protocols...",
    "> ERROR: Data Corrupted.",
    "> Attempting Decryption...",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newProgress = Math.min(100, (scrollY / window.innerHeight) * 100);
      setProgress(newProgress);
      if (newProgress >= 100) {
        setDecrypted(true);
        setTimeout(() => onComplete(), 1000); // Call onComplete() 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-green-400 font-mono">
      <div className="text-left text-lg">
        {textLines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index * 0.25 < progress / 100 ? 1 : 0 }}
            transition={{ delay: index * 0.3 }}
          >
            {line}
          </motion.p>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: progress === 100 ? 1 : 0 }}
          transition={{ delay: 1 }}
        >
          {"> Decryption Complete. Access Granted."}
        </motion.p>
      </div>

      <motion.div
        className="mt-8"
        initial={{ filter: "blur(10px)", opacity: 0.5 }}
        animate={{
          filter: decrypted ? "blur(0px)" : "blur(10px)",
          opacity: decrypted ? 1 : 0.5,
        }}
        transition={{ duration: 1 }}
      >
        <img src="./assets/acm_logo.svg" alt="ACM Logo" className="w-32 h-32" />
      </motion.div>
    </div>
  );
};

export default Preloader;
