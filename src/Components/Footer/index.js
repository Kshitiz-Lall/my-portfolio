import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 3,
        bgcolor: "black",
      }}
    >
      <Container maxWidth="sm">
        <Typography sx={{ color: "white" }} variant="body1">
          Connect with me:
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link
            href="https://www.instagram.com/kshitizlall/"
            color="inherit"
            target="_blank"
          >
            <Instagram sx={{ color: "white" }} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kshitizlall/"
            color="inherit"
            target="_blank"
          >
            <LinkedIn sx={{ color: "white" }} />
          </Link>
          <Link
            href="https://www.facebook.com/kshitiz.shittu/"
            color="inherit"
            target="_blank"
          >
            <Facebook sx={{ color: "white" }} />
          </Link>
          <Link
            href="https://github.com/Kshitiz-Lall"
            color="inherit"
            target="_blank"
          >
            <GitHub sx={{ color: "white" }} />
          </Link>
        </Box>
        <Typography variant="body2" color="white" align="center">
          {"Copyright © "}
          Kshitiz, &nbsp;
          {new Date().getFullYear()} {"."}
        </Typography>
        <Typography variant="body2" color="white" align="center">
          ver 1.5
        </Typography>
      </Container>
    </Box>
  );
}
