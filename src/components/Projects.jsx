
// import React from "react";
// import { Grid, Box, Button, Typography } from "@mui/material";
// import Navigation from "./Navigation";
// import ProjectCard from "./ProjectCard";
// import wfantasyImage from "../assets/wfantasy_walkthrough.gif";
// import wandrImage from "../assets/wandr_walkthrough.gif";

// const projects = [
//   { 
//     title: "WFantasy", 
//     description: "The Fantasy WNBA App is a user-friendly web application that allows basketball fans to create and manage their own fantasy teams based on WNBA player performances. Users can sign up, log in, build, and monitor rosters within a fixed budget, with player values determined by real stats. Built with a Flask backend and React frontend, it integrates modern tools like Fomantic-UI for styling and UseContext for state management. The goal is to make a fun, accessible, well-built application that will be deployed for use, and showcase my skills as a software engineer.", 
//     link: "https://wnba-fantasy-league-1.onrender.com", 
//     image: wfantasyImage 
//   },
//   { 
//     title: "Wandr", 
//     description: "A React-based application designed to document your travels, build itineraries for bucket list destinations, leave reviews and photos, and track visited places.", 
//     link: "https://jtrapp18.github.io/wandr-personal-travel-journal/",
//     image: wandrImage
//   },
//   { 
//     title: "Project 3", 
//     description: "This one is awesome too - A demonstration of advanced features and user-friendly design in a web application.", 
//     link: "https://project3.com" 
//   },
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
//           overflowY: 'auto',
//           paddingTop: '70px',
//           paddingX: 4,
//           boxSizing: 'border-box',
//           margin: 0,
//         }}
//       >
//         {/* Projects Title Bubble */}
//         <Box sx={{ marginTop: 4 }}>
//           <Button
//             variant="outlined"
//             sx={{
//               borderRadius: '50px',
//               border: '3px solid white',
//               color: 'white',
//               fontSize: '3rem',
//               textTransform: 'none',
//               padding: '15px 50px',
//               backgroundColor: '#FF86C8',
//               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
//               '&:hover': {
//                 backgroundColor: '#FFC0E0',
//               },
//             }}
//           >
//             Projects
//           </Button>
//         </Box>

//         {/* Projects Grid */}
//         <Grid container spacing={8} justifyContent="center" sx={{ maxWidth: '90%', margin: '0 auto' }}>
//           {projects.map((project, index) => (
//             <Grid item key={index} xs={12} container spacing={4} alignItems="center" sx={{ marginBottom: 8 }}>
//               <Grid item xs={12} md={5}>
//                 <ProjectCard 
//                   title={project.title} 
//                   link={project.link} 
//                   image={project.image} 
//                 />
//               </Grid>
//               <Grid item xs={12} md={7}>
//                 <Typography variant="h5" sx={{ color: '#ffffff', textAlign: 'left', lineHeight: 1.8, fontSize: '1.5rem', padding: 3 }}>
//                   {project.description}
//                 </Typography>
//               </Grid>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </>
//   );
// }

// export default Projects;

import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import Navigation from "./Navigation";
import ProjectCard from "./ProjectCard";
import wfantasyImage from "../assets/wfantasy_walkthrough.gif";
import wandrImage from "../assets/wandr_walkthrough.gif";
import fourthWingQuizImage from "../assets/fourth_wing_quiz.png"
import myTravelMapImage from "../assets/my_travel_map.png"
import studioBloomImage from "../assets/studiobloom.gif"
import sideBorder from "../assets/side-border.jpg"; // Import the side border image

const projects = [
  { 
    title: "WFantasy", 
    description: "The Fantasy WNBA App is a user-friendly web application that allows basketball fans to create and manage their own fantasy teams based on WNBA player performances. Users can sign up, log in, build, and monitor rosters within a fixed budget, with player values determined by real stats. Built with a Flask backend and React frontend, it integrates modern tools like Fomantic-UI for styling and UseContext for state management. The goal is to make a fun, accessible, well-built application that will be deployed for use.", 
    link: "https://youtu.be/B9th5iHYpIM", 
    image: wfantasyImage 
  },
  { 
    title: "Wandr", 
    description: "A React-based application designed to document your travels, build itineraries for bucket list destinations, leave reviews and photos, and track visited places.", 
    link: "https://jtrapp18.github.io/wandr-personal-travel-journal/",
    image: wandrImage
  },
  { 
    title: "Fourth Wing Threshing Quiz", 
    description: "Inspired by the captivating world of the Fourth Wing novels, the Threshing Quiz is an interactive web application designed to discover which dragon will choose you based on your personality traits. Through a series of carefully crafted questions, users can explore the mystical universe and connect with their inner dragon attributes. Built with React and utilizing React Router, the application offers a seamless user experience with dynamic routing and state management.", 
    link: "https://fourth-wing-quiz.onrender.com/",
    image: fourthWingQuizImage
  },
  { 
    title: "My Travel Map", 
    description: "My Travel Map is a dynamic, interactive travel map app built with React and Leaflet, allowing users to mark visited places, add personal notes, and visually track their global adventures. It features downloadable map images and Instagram Story–ready graphics, making it easy to share memories with style. ", 
    link: "https://mytravelmap.onrender.com/",
    image: myTravelMapImage
  },
  { 
    title: "StudioBloom", 
    description: "Bloom Digital is a sleek, responsive one-page website built with React (Vite) and styled entirely with custom CSS. I focused on elegant layout, semantic HTML, and fully responsive design, incorporating custom fonts (TT Ramillas) and scroll-based navigation. The site structure is fully componentized, and assets are optimized for performance. This project showcases both design sensibility and front-end development skills, from image handling to layout precision and font integration.", 
    link: "https://studiobloom.onrender.com/",
    image: studioBloomImage
  },
];

function Projects() {
  return (
    <>
      <Navigation iconColor="#FF86C8" />

      <Box
        sx={{
          backgroundColor: 'black',
          backgroundImage: `url(${sideBorder})`,
          backgroundRepeat: 'repeat-y', // Repeat the image vertically
          backgroundPosition: 'left', // Position the image on the left
          backgroundSize: 'contain', // Adjust the size to fit the container
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'auto',
          paddingTop: '70px',
          paddingX: 4,
          boxSizing: 'border-box',
          margin: 0,
        }}
      >
        {/* Projects Title Bubble */}
        <Box sx={{ marginTop: 4 }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: '50px',
              border: '3px solid white',
              color: 'white',
              fontSize: '3rem',
              textTransform: 'none',
              padding: '15px 50px',
              backgroundColor: '#FF86C8',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: '#FFC0E0',
              },
            }}
          >
            Projects
          </Button>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={8} justifyContent="center" sx={{ maxWidth: '90%', margin: '0 auto' }}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} container spacing={4} alignItems="center" sx={{ marginBottom: 8 }}>
              <Grid item xs={12} md={5}>
                <ProjectCard 
                  title={project.title} 
                  link={project.link} 
                  image={project.image} 
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography variant="h5" sx={{ color: '#ffffff', textAlign: 'left', lineHeight: 1.8, fontSize: '1.5rem', padding: 3 }}>
                  {project.description}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Projects;