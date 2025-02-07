import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/acm_logo.svg";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [decrypted, setDecrypted] = useState(false);

  const textLines = [
    "> Initializing ACM system...",
    "> Running SSL protocols...",
    "> ERROR: Data Corrupted...",
    "> Attempting Decryption...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = Math.min(100, prev + Math.random() * 10);
        if (nextProgress >= 100) {
          clearInterval(interval);
          setDecrypted(true);
          setTimeout(() => onComplete(), 1000);
        }
        return nextProgress;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-blue-500 font-mono flex flex-col items-center justify-center">
      <div className="text-left text-lg">
        {textLines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index * 0.25 < progress / 100 ? 1 : 0,
              x: progress < 100 ? (Math.random() - 0.5) * 10 : 0,
            }}
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

      {/* ACM Logo Animation */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, visibility: "hidden", filter: "blur(10px)" }}
        animate={{
          opacity: decrypted ? 1 : 0,
          visibility: decrypted ? "visible" : "hidden",
          filter: decrypted ? "blur(0px)" : "blur(10px)",
        }}
        transition={{ duration: 1 }}
      >
        <img src={Logo} alt="ACM Logo" className="w-32 h-32" />
      </motion.div>
      <motion.p
        initial={{ opacity: 1 }}
        animate={{ opacity: progress < 100 ? [1, 0, 1] : 0 }}
        transition={{ repeat: Infinity, duration: 3, delay: 10 }}
        className="absolute bottom-10 w-full text-center text-sm text-gray-400"
      >
        {progress < 100 ? "Decrypting..." : ""}
      </motion.p>
    </div>
  );
};

export default Preloader;
