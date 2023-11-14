import { Chip, Container, Grid, Typography } from "@mui/material";
import React from "react";

function Skills() {
  const ProgrammingLanguages = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "Python",
    "Java",
    "C#",
    "C++",
    "HTML5",
    "Spring",
    "Express.js",
    "DotNet",
  ];

  return (
    <Container
      sx={{
        mt: 4,
        mb: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={1}>
        {ProgrammingLanguages.map((skill, index) => (
          <Grid item key={index}>
            <Chip label={skill} color="primary" variant="filled" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills;
