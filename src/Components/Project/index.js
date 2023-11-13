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
import HIPOne from "../../Assets/hipone.png";
import Dashboard from "../../Assets/dashboard.png";
import CCDAViewer from "../../Assets/CCDA Viewer.png";

const projects = [
  {
    title: "HIP ONE",
    description:
      "HIP One is the leading intelligence platform powered by Gen AI tailored specifically for healthcare built securely to converse with built-in privacy.",
    imageUrl: HIPOne,
  },
  {
    title: "HIP ONE Dashboard",
    description:
      "Welcome to the heartbeat of your healthcare operations – the Health Intelligence Platform (HIP) Dashboard. Our HIP Dashboard is a dynamic and user-centric interface designed to empower healthcare professionals with real-time insights, streamlined workflows, and actionable data at their fingertips.",
    imageUrl: Dashboard,
  },
  {
    title: "CCDA Viewer",
    description:
      "A CCDA (Consolidated Clinical Document Architecture) viewer is a specialized software tool designed to interpret and display patient health information in the form of CCDA documents. CCDA is an XML-based standard for structuring and exchanging electronic health records (EHRs) and clinical documents.",
    imageUrl: CCDAViewer,
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
    <Container
      sx={{
        mt: 2,
        mb: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Projects{" "}
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
            textAlign: "center", // Center align the content
          }}
        >
          <Typography variant="h6">{selectedProject?.title}</Typography>
          <img
            src={selectedProject?.imageUrl}
            alt={selectedProject?.title}
            style={{ maxWidth: "100%" }}
          />{" "}
          {/* Show the image */}
          <Typography variant="body2">
            {selectedProject?.description}
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default Project;
