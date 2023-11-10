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
import HIPOne from "../../Assets/hipone.png"
import Dashboard from "../../Assets/dashboard.png"
import CCDAViewer from "../../Assets/CCDA Viewer.png"

const projects = [
  {
    title: "HIP ONE",
    description: "HIP One is the leading intelligence platform powered by Gen AI tailored specifically for healthcare built securely to converse with built-in privacy.",
    imageUrl: HIPOne, // Replace with the actual path to your image
  },
  {
    title: "HIP ONE Dashboard",
    description: "This is the Dashboard for HIP One",
    imageUrl: Dashboard, // Replace with the actual path to your image
  },
  {
    title: "CCDA Viewer",
    description: "The C-CDA document will be temporarily rendered for this session only. The Genzeon's HIP server will not retain any content related to this C-CDA once the session is closed.",
    imageUrl: CCDAViewer, // Replace with the actual path to your image
  },
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
