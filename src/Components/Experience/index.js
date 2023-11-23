import { Box, Typography } from "@mui/material";
import * as React from "react";

const Experience = () => {
  const startDate = new Date("2023-05-03T11:00:00");
  const currentDate = new Date();
  const experienceInMilliseconds = currentDate - startDate;
  const experienceInDays = Math.floor(
    experienceInMilliseconds / (1000 * 60 * 60 * 24)
  );
  const experienceInYears = Math.floor(experienceInDays / 365);
  const remainingDays = experienceInDays % 365;

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "black",
        backgroundSize: "cover",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
        Experience
      </Typography>
      <Typography variant="body2" sx={{ color: "white" }}>
        Since 3rd May 2023
      </Typography>
      <Typography variant="h6" sx={{ color: "white" }}>
        {`Total Experience: ${experienceInYears} years ${
          remainingDays > 0 ? `and ${remainingDays} days` : ""
        }`}
      </Typography>
    </Box>
  );
};

export default Experience;
