import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import Footer from "../Components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Kshitiz</Typography>
          <Box sx={{ flexGrow: 1 }} /> 
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <Footer/>
    </div>
  );
};

export default Layout;