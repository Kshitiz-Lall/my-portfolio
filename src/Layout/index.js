import { Box } from "@mui/material";
import React from "react";
import Footer from "../Components/Footer";
import ResponsiveAppBar from "./AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <Box>{children}</Box>
      <Footer />
    </div>
  );
};

export default Layout;
