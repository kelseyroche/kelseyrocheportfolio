
// import React from 'react';
// import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
// import Navigation from './Navigation'; // Ensure Navigation is imported
// import profilePic from '../assets/about-me-graphic.jpg'; // Image file

// const AboutMe = () => {
//   const techStack = ['React', 'JavaScript', 'Python', 'Flask', 'SQL', 'Postgres'];

//   return (
//     <>
//       <Navigation iconColor="#FF86C8" />

//       <Box
//         sx={{
//           backgroundColor: 'black',
//           height: '100vh',
//           width: '100vw',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           overflow: 'hidden',
//           paddingTop: '70px',
//         }}
//       >
//         <Grid container sx={{ height: '100%', width: '100%', paddingX: 4 }}>
//           {/* Left side with About Me text and Tech Stack */}
//           <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
//             <Card
//               sx={{
//                 backgroundColor: 'transparent',
//                 boxShadow: 'none',
//                 padding: 4,
//                 textAlign: 'left',
//               }}
//             >
//               <CardContent>
//                 <Typography
//                   vvariant="h4"
//                   className="tropi-land"
//                   sx={{
//                     fontFamily: "'Tropi Land', sans-serif !important", // Ensure it overrides MUI styles
//                     fontWeight: "bold",
//                     color: "#ffffff",
//                     marginBottom: 4,
//                     textAlign: "left",
//                     fontSize:"6rem"
//                   }}
//                 >
//                   Hi, I'm Kelsey!
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     color: '#FF86C8',
//                     mb: 3,
//                   }}
//                 >
//                   I'm a front-end engineer passionate about creating beautiful, intuitive user experiences. My background in UI design and operations gives me a unique problem-solving perspective. I thrive where logic meets creativity, using JavaScript and React to build sleek, responsive applications. I'm committed to making technology accessible and engaging and am an advocate for diversity in tech. Beyond coding, I enjoy supporting women's sports, watching Arsenal, and spending time with my wife. Let’s connect and create impactful digital experiences together! 🚀
//                 </Typography>
//               </CardContent>
//             </Card>

//             {/* Tech Stack Bubbles */}
//             <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: 4, paddingLeft: 4 }}>
//               {techStack.map((tech) => (
//                 <Button
//                   key={tech}
//                   variant="outlined"
//                   sx={{
//                     borderRadius: '50px',
//                     border: '2px solid black',
//                     color: 'black',
//                     fontSize: '1.2rem',
//                     textTransform: 'none',
//                     padding: '8px 30px',
//                     backgroundColor: '#FF86C8',
//                     '&:hover': {
//                       backgroundColor: '#FFC0E0',
//                     },
//                   }}
//                 >
//                   {tech}
//                 </Button>
//               ))}
//             </Box>
//           </Grid>

//           {/* Right side with the image */}
//           <Grid
//             item
//             xs={12}
//             md={6}
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'flex-end',
//             }}
//           >
//             <Box
//               component="img"
//               src={profilePic}
//               alt="About Me Graphic"
//               sx={{
//                 width: '75%',
//                 height: 'auto',
//                 objectFit: 'contain',
//                 marginLeft: 'auto',
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
          animation: 'fadeIn 2s ease-in-out',
        }}
      >
        <Grid container sx={{ height: '100%', width: '100%', paddingX: 4 }}>
          {/* Left side with About Me text and Tech Stack */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                borderRadius: '15px',
                padding: 4,
                textAlign: 'left',
                backdropFilter: 'blur(5px)',
                animation: 'slideIn 1.5s ease-in-out',
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  className="tropi-land"
                  sx={{
                    fontFamily: "'Tropi Land', sans-serif !important",
                    fontWeight: "bold",
                    color: "#ffffff",
                    marginBottom: 4,
                    textAlign: "left",
                    fontSize: "9rem",
                    lineHeight: 1.1,
                  }}
                >
                  Hi, I'm Kelsey!
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#FF86C8',
                    mb: 3,
                    lineHeight: 1.4,
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
                    transition: 'transform 0.3s',
                    '&:hover': {
                      backgroundColor: '#FFC0E0',
                      transform: 'scale(1.1)',
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
                borderRadius: '10px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                animation: 'fadeIn 2s ease-in-out',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutMe;