import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

function ProjectCard({ title, description }) {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "white",
        borderRadius: "12px",
        padding: "1rem",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
        <Button variant="contained" sx={{ marginTop: "1rem" }}>
          View Project
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;