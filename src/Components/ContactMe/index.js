import * as React from "react";
import { TextField, Button, Box, Container, Typography } from "@mui/material";

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Accessing Firebase configuration from environment variables
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    };
    // Initialize Firebase with the configuration
    // Your Firebase initialization code here
  };

  return (
    <Container
      sx={{
        mt: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField label="Full Name" fullWidth />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField label="Email" fullWidth />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField label="Message" multiline rows={5} fullWidth />
        </Box>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactMe;
