
// import React from "react";
// import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
// import Navigation from "./Navigation"; // Import Navigation
// import profilePic from "../assets/about-me-graphic.jpg"; // Image file

// const AboutMe = () => {
//   return (
//     <>
//       {/* Fixed Navigation at the Top */}
//       <Box
//         sx={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           zIndex: 1000, // Keeps navbar above other content
//         }}
//       >
//         <Navigation iconColor="#FF86C8" /> {/* Pass the pink color as a prop */}
//       </Box>

//       {/* Main Content */}
//       <Box
//         sx={{
//           backgroundColor: "black",
//           height: "100vh", // Full height
//           width: "100vw", // Full width
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           position: "fixed",
//           top: 0,
//           left: 0,
//           overflow: "hidden", // Prevent scrolling
//           paddingTop: "70px", // Adjusted for navbar height
//         }}
//       >
//         <Grid container sx={{ height: "100%", width: "100%", paddingX: 4 }}>
//           {/* Left side with About Me text */}
//           <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
//             <Card
//               sx={{
//                 backgroundColor: "transparent",
//                 boxShadow: "none",
//                 padding: 4,
//                 textAlign: "left",
//               }}
//             >
//               <CardContent>
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     color: "#FF86C8", // Updated font color
//                     fontWeight: "bold",
//                     mb: 2,
//                   }}
//                 >
//                   Hi, I'm Kelsey!
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     color: "#FF86C8", // Updated font color
//                     mb: 3,
//                   }}
//                 >
//                   I am a front-end engineer with a passion for crafting beautiful, intuitive, and
//                   high-performing user experiences. My background in UI design, sales, and operations has given me a unique perspective on problem-solving: I don’t just build
//                   interfaces; I think about how users interact with them, what makes an experience
//                   seamless, and how to make technology more accessible to everyone.
//                   <br />
//                   <br />
//                   I thrive in environments where logic meets creativity, which is why I love working
//                   with JavaScript and React. Whether it’s building a sleek UI, optimizing
//                   performance, or implementing smooth animations, I enjoy the challenge of
//                   transforming ideas into polished, responsive applications. My curiosity keeps me
//                   exploring new tools and frameworks, but at my core, I believe that great software
//                   is as much about understanding users as it is about writing clean, efficient code.
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     color: "#FF86C8", // Updated font color
//                   }}
//                 >
//                   Beyond coding, I’m a passionate advocate for women’s sports and diversity in tech.
//                   I’ve built projects centered around making sports more accessible to fans, and I
//                   hope to continue using my skills to contribute to meaningful, inclusive digital
//                   experiences. When I’m not at my computer, you can probably find me watching an
//                   Arsenal match, planning my next trip, or enjoying a cozy night in with my wife.
//                   <br />
//                   <br />
//                   I’m excited about opportunities that allow me to grow as an engineer while making
//                   a real impact. If you’re looking for someone who combines technical skills with
//                   creativity, problem-solving, and a love for learning—let’s connect! 🚀
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Right side with the image (aligned right) */}
//           <Grid
//             item
//             xs={12}
//             md={6}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "flex-end",
//             }}
//           >
//             <Box
//               component="img"
//               src={profilePic}
//               alt="About Me Graphic"
//               sx={{
//                 width: "75%",
//                 height: "auto",
//                 objectFit: "contain",
//                 marginLeft: "auto", // Aligns image to the right
//               }}
//             />
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default AboutMe;

import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import Navigation from './Navigation'; // Ensure Navigation is imported
import profilePic from '../assets/about-me-graphic.jpg'; // Image file

const AboutMe = () => {
  const techStack = ['React', 'JavaScript', 'Python', 'Flask', 'SQL', 'Postgres'];

  return (
    <>
      <Navigation iconColor="#FF86C8" />

      <Box
        sx={{
          backgroundColor: 'black',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          overflow: 'hidden',
          paddingTop: '70px',
        }}
      >
        <Grid container sx={{ height: '100%', width: '100%', paddingX: 4 }}>
          {/* Left side with About Me text and Tech Stack */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
            <Card
              sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                padding: 4,
                textAlign: 'left',
              }}
            >
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#FF86C8',
                    fontWeight: 'bold',
                    mb: 2,
                  }}
                >
                  Hi, I'm Kelsey!
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#FF86C8',
                    mb: 3,
                  }}
                >
                  I'm a front-end engineer passionate about creating beautiful, intuitive user experiences. My background in UI design and operations gives me a unique problem-solving perspective. I thrive where logic meets creativity, using JavaScript and React to build sleek, responsive applications. I'm committed to making technology accessible and engaging and am an advocate for diversity in tech. Beyond coding, I enjoy supporting women's sports, watching Arsenal, and spending time with my wife. Let’s connect and create impactful digital experiences together! 🚀
                </Typography>
              </CardContent>
            </Card>

            {/* Tech Stack Bubbles */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: 4, paddingLeft: 4 }}>
              {techStack.map((tech) => (
                <Button
                  key={tech}
                  variant="outlined"
                  sx={{
                    borderRadius: '50px',
                    border: '2px solid black',
                    color: 'black',
                    fontSize: '1.2rem',
                    textTransform: 'none',
                    padding: '8px 30px',
                    backgroundColor: '#FF86C8',
                    '&:hover': {
                      backgroundColor: '#FFC0E0',
                    },
                  }}
                >
                  {tech}
                </Button>
              ))}
            </Box>
          </Grid>

          {/* Right side with the image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Box
              component="img"
              src={profilePic}
              alt="About Me Graphic"
              sx={{
                width: '75%',
                height: 'auto',
                objectFit: 'contain',
                marginLeft: 'auto',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutMe;