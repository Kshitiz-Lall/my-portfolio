import { Box, Button, Container, TextField, Typography } from "@mui/material";
import * as React from "react";

const ContactMe = () => {
  return (
    <Container
      sx={{
        mb: 4,
        mt: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <form>
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
