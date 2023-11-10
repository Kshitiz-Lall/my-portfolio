// Portfolio.js
import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Modal,
  Box,
} from "@mui/material";

const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1. More details about Project 1...",
    imageUrl: "path_to_image1.jpg", // Replace with the actual path to your image
  },
  {
    title: "Project 2",
    description: "Description of Project 2. More details about Project 2...",
    imageUrl: "path_to_image2.jpg", // Replace with the actual path to your image
  },
  {
    title: "Project 3",
    description: "Description of Project 3. More details about Project 3...",
    imageUrl: "path_to_image3.jpg", // Replace with the actual path to your image
  },
  // Add more projects as needed
];

const Project = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Portfolio
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt="Project Image"
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">
                  {project.description.length > 50
                    ? `${project.description.substring(0, 50)}...`
                    : project.description}
                </Typography>
                <Button
                  color="secondary"
                  disabled={false}
                  size="medium"
                  variant="outlined"
                  onClick={() => handleOpen(project)}
                >
                  Read more
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6">{selectedProject?.title}</Typography>
          <Typography variant="body2">
            {selectedProject?.description}
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default Project;
