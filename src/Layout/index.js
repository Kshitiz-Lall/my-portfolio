// Layout.js
import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Kshitiz</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "background.paper",
          textAlign: "center",
        }}
      >
        Footer content here
      </Box>
    </div>
  );
};

export default Layout;
