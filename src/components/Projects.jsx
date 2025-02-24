// import ProjectCard from './ProjectCard';

// const Projects = () => {
//   return (
//     <section id="projects">
//       <h2>Projects</h2>
//       <div>
//         <ProjectCard title="Project 1" description="Description of Project 1" />
//         <ProjectCard title="Project 2" description="Description of Project 2" />
//         <ProjectCard title="Project 3" description="Description of Project 3" />
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projects = [
  { title: "Project 1", description: "This is an amazing project." },
  { title: "Project 2", description: "Another cool project." },
  { title: "Project 3", description: "This one is awesome too." },
];

function Projects() {
  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard title={project.title} description={project.description} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;