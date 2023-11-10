import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } }
  };

  return (
    <motion.h2
      initial="hidden"
      animate="visible"
      variants={textVariants}
    >
      {text}
    </motion.h2>
  );
};

export default AnimatedText;