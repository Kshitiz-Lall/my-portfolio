// Layout.js
import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import Footer from "../Components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Kshitiz</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <Footer/>
    </div>
  );
};

export default Layout;
