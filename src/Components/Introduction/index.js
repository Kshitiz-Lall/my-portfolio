import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import React from "react";

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: "url(your-image.jpg)", // Add background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column", // Set flex direction to column
        alignItems: "center",
        justifyContent: "center",
        padding: "16px", // Add padding for better spacing
        backgroundColor: "rgba(255, 255, 255, 0.5)", // Add a semi-transparent white background
      }}
    >
      <Typography variant="h3" align="center">Hi!</Typography>
      <Typography variant="h2" align="center">I am</Typography>
      <Typography variant="h2" align="center">Kshitiz.</Typography>
      <Typography variant="body1" align="center">A React developer based in India. I hope my 1-year experience of research and visual design can be helpful for your project.</Typography>
    </motion.div>
  );
};

export default Introduction;
