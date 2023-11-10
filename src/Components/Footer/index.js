import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Facebook, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">Connect with me:</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="https://www.instagram.com/your-instagram" color="inherit">
            <Instagram />
          </Link>
          <Link href="https://www.linkedin.com/your-linkedin" color="inherit">
            <LinkedIn />
          </Link>
          <Link href="https://www.facebook.com/your-facebook" color="inherit">
            <Facebook />
          </Link>
          <Link href="https://www.github.com/your-github" color="inherit">
            <GitHub />
          </Link>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()} {"."}
        </Typography>
      </Container>
    </Box>
  );
}