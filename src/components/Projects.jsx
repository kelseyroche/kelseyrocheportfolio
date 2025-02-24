
// import React from "react";
// import { Grid, Box, Button, Typography } from "@mui/material"; // Ensure Typography is imported
// import Navigation from "./Navigation"; // Ensure Navigation is imported
// import ProjectCard from "./ProjectCard"; // Ensure ProjectCard is imported

// const projects = [
//   { title: "Project 1", description: "This is an amazing project.", link: "https://project1.com" },
//   { title: "Project 2", description: "Another cool project.", link: "https://project2.com" },
//   { title: "Project 3", description: "This one is awesome too.", link: "https://project3.com" },
// ];

// function Projects() {
//   return (
//     <>
//       <Navigation iconColor="#FF86C8" />

//       <Box
//         sx={{
//           backgroundColor: 'black',
//           minHeight: '100vh',
//           width: '100vw',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'flex-start',
//           overflowY: 'auto',
//           paddingTop: '70px',
//           paddingX: 4,
//           boxSizing: 'border-box',
//           margin: 0,
//         }}
//       >
//         {/* Projects Title Bubble */}
//         <Box sx={{ marginTop: 4, marginBottom: 4 }}>
//           <Button
//             variant="outlined"
//             sx={{
//               borderRadius: '50px',
//               border: '2px solid black',
//               color: 'black',
//               fontSize: '2rem',
//               textTransform: 'none',
//               padding: '10px 40px',
//               backgroundColor: '#FF86C8',
//               '&:hover': {
//                 backgroundColor: '#FFC0E0',
//               },
//             }}
//           >
//             Projects
//           </Button>
//         </Box>

//         {/* Projects Grid */}
//         <Grid container spacing={3} justifyContent="center">
//           {projects.map((project, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <ProjectCard title={project.title} description={project.description} link={project.link} />
//             </Grid>
//           ))}
//         </Grid>

//         {/* Footer Section */}
//         <Box sx={{ marginTop: 4, paddingBottom: 4, textAlign: 'center', color: '#FF86C8' }}>
//           <Typography variant="body2">
//             © 2025 Your Name. All rights reserved.
//           </Typography>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default Projects;

import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import Navigation from "./Navigation"; // Ensure Navigation is imported
import ProjectCard from "./ProjectCard"; // Ensure ProjectCard is imported

const projects = [
  { title: "Project 1", description: "This is an amazing project.", link: "https://project1.com" },
  { title: "Project 2", description: "Another cool project.", link: "https://project2.com" },
  { title: "Project 3", description: "This one is awesome too.", link: "https://project3.com" },
];

function Projects() {
  return (
    <>
      <Navigation iconColor="#FF86C8" />

      <Box
        sx={{
          backgroundColor: 'black',
          height: '100vh', // Ensure full viewport height
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between', // Distribute space between elements
          overflow: 'hidden', // Prevent scrolling
          paddingTop: '70px',
          paddingX: 4,
          boxSizing: 'border-box',
          margin: 0,
          position: 'relative',
        }}
      >
        {/* Projects Title Bubble */}
        <Box sx={{ marginTop: 4 }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: '50px',
              border: '2px solid black',
              color: 'black',
              fontSize: '2rem',
              textTransform: 'none',
              padding: '10px 40px',
              backgroundColor: '#FF86C8',
              '&:hover': {
                backgroundColor: '#FFC0E0',
              },
            }}
          >
            Projects
          </Button>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={3} justifyContent="center" sx={{ flexGrow: 1, alignItems: 'center' }}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProjectCard title={project.title} description={project.description} link={project.link} />
            </Grid>
          ))}
        </Grid>

        {/* Footer Section */}
        <Box sx={{ paddingBottom: 4, textAlign: 'center', color: '#FF86C8', width: '100%' }}>
          <Typography variant="body2">
            © 2025 Your Name. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Projects;