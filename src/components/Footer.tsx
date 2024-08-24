import React from "react";
import { Box, IconButton, Typography, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer: React.FC = () => {


  return (
    <Box
      component="footer"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="8px 16px"
      bgcolor="#1C1C1C"
      color="#FFFFFF"
      position="sticky"
      bottom={0}
      height="40px"
      fontSize="14px" // Ensures the font size for all elements
    >
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="github"
            component="a"
            href="https://github.com/pawasagrwl/mockcats"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "inherit" }}
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            <CopyrightIcon style={{ fontSize: "inherit" }} />
            2024
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
