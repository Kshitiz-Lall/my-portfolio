import { Box, Typography } from "@mui/material";
import React from "react";

const Introduction = () => {
  return (
    <Box
      sx={{
        mt: 2,
        mb: 2,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" align="center">
        Hi!
      </Typography>
      <Typography variant="h2" align="center">
        I am
      </Typography>
      <Typography variant="h2" align="center">
        Kshitiz.
      </Typography>
      <Typography variant="body1" align="center">
        A React developer based in India. I hope my 1-year experience of
        research and visual design can be helpful for your project.
      </Typography>
    </Box>
  );
};

export default Introduction;
