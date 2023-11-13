import { Chip, Container, Typography } from "@mui/material";
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
    <Container
      sx={{
        mt: 2,
        mb: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <Typography variant="body1"> Since 3rd May 2023</Typography>
      <Chip
        variant="body1"
        label={`Total Experience: ${experienceInYears} years ${
          remainingDays > 0 ? `and ${remainingDays} days` : ""
        }`}
      />
    </Container>
  );
};

export default Experience;
