import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";

const Introduction = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "black",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1480506132288-68f7705954bd?auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=2120')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography variant="h3" align="center" color={"white"}>
        Hi!
      </Typography>
      <Typography variant="h2" align="center" color={"white"}>
        I am
      </Typography>
      <Typography variant="h2" align="center" color={"white"}>
        Kshitiz.
      </Typography>
      <Typography variant="body1" align="center" color={"white"}>
        A React developer based in India. I hope my 1-year experience of
        research and visual design can be helpful for your project.
      </Typography>
    </Box>
  );
};

export default Introduction;
