
import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { LinkedIn, GitHub, Article } from "@mui/icons-material";
import { Brush } from "@mui/icons-material";

import graphicImage from "../assets/right-banner-image.jpg";
import Navigation from './Navigation'; // Import the Navigation component

const ContactButton = styled(Button)({
  borderRadius: "50px",
  border: "2px solid black",
  color: "black",
  fontSize: "1.2rem",
  textTransform: "none",
  padding: "8px 30px",
  "&:hover": {
    backgroundColor: "#FFC0E0",
  },
});

const PhoneBubble = styled(Box)({
  borderRadius: "50px",
  border: "2px solid black",
  color: "black",
  fontSize: "1.5rem",
  textAlign: "center",
  padding: "10px 40px",
  fontWeight: "bold",
  backgroundColor: "#ffffff",
  marginBottom: "20px",
});

const Contact = () => {
  return (
    <>
      <Navigation iconColor="black" /> {/* Pass the desired icon color here */}

      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          position: "fixed", // Prevents scrolling and locks the page
          top: 0,
          left: 0,
          overflow: "hidden", // Prevents overflow scrolling
        }}
      >
        <Grid container sx={{ height: "100%", width: "100%" }}>
          {/* Left Side: Contact Information */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              textAlign: "left",
              gap: 2,
              backgroundColor: "#F280B6",
              paddingLeft: 4,
            }}
          >
            {/* Let's Collaborate */}
            <Typography
              variant="h1"
              className="fjalla-one-regular"
              sx={{
                fontSize: '9rem',
                lineHeight: '1.2',
                color: "#ffffff",
                marginBottom: 2,
              }}
            >
              Let's<br />Collaborate
            </Typography>

            {/* Phone Number Bubble */}
            <PhoneBubble>
              roche.kelsey.24@gmail.com
            </PhoneBubble>

            {/* Social Links */}
            <Box sx={{ display: "flex", gap: 3, marginTop: "40px" }}>
              <ContactButton
                href="https://www.linkedin.com/in/kelsey-roche/"
                target="_blank"
                startIcon={<LinkedIn />}
              >
                LinkedIn
              </ContactButton>
              <ContactButton
                href="https://github.com/kelseyroche"
                target="_blank"
                startIcon={<GitHub />}
              >
                GitHub
              </ContactButton>
              <ContactButton
                href="https://dev.to/kelseyroche"
                target="_blank"
                startIcon={<Article />}
              >
                Blog
              </ContactButton>
              <ContactButton
                href="https://bloomstudio.onrender.com"
                target="_blank"
                startIcon={<Brush />} // You can use a different icon if you'd like!
              >
                BloomStudio
              </ContactButton>
            </Box>
          </Grid>

          {/* Right Side (Graphic Image) */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: "100vh",
              backgroundImage: `url(${graphicImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Box>
    </>
  );
};

export default Contact;