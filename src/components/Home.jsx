import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import graphicImage from "../assets/left-banner-image.jpg"; // Add your image here

const BubbleButton = styled(Button)({
  borderRadius: "30px",
  padding: "10px 20px",
  backgroundColor: "#000000",
  color: "#fff",
  margin: "10px 0",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#ff9a9e",
  },
});

const Home = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Left Side */}
      <Box
        sx={{
          width: "50%",
          backgroundColor: "#FF86C8", // Pink background
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          color: "#fff",
        }}
      >
        <Typography
            variant="h3"
            sx={{ fontFamily: '"Fjalla One", sans-serif', fontWeight: "bold", fontSize: "4rem" }}
        >
            KELSEY ROCHE
        </Typography>
        <BubbleButton variant="contained" sx={{ marginTop: "20px" }}>
          Fullstack Developer
        </BubbleButton>
        <BubbleButton variant="contained" href="contact">
          Contact
        </BubbleButton>
        <BubbleButton variant="contained" href="projects">
          Projects
        </BubbleButton>
        <BubbleButton variant="contained" href="about">
          About Me
        </BubbleButton>
      </Box>

      {/* Right Side (Graphic Image) */}
      <Box
        sx={{
          width: "50%",
          backgroundImage: `url(${graphicImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
};

export default Home;