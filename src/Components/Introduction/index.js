import React from "react";
import { Card, Box, Typography } from "@mui/material";

const Introduction = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(your-image.jpg)",
          filter: "blur(8px)",
          zIndex: -1,
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card>
        <Typography variant="h3">Your Name</Typography>
        <Typography variant="body1">Additional text goes here...</Typography>
      </Card>
    </Box>
  );
};

export default Introduction;
