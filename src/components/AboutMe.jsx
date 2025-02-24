
// import React from "react";
// import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
// import Navigation from "./Navigation"; // Import Navigation
// import profilePic from "../assets/about-me-graphic.jpg"; // Image file

// const AboutMe = () => {
//   return (
//     <>
//       <Navigation /> Keep the Navigation component

//       <Box
//         sx={{
//           backgroundColor: "black", // Set the background to black
//           minHeight: "100vh", // Ensure it takes up the full height
//           display: "flex", // Use flexbox for layout
//           alignItems: "center", // Center the content vertically
//           justifyContent: "center", // Center horizontally
//           padding: 4,
//         }}
//       >
//         <Grid container spacing={2}>
//           {/* Left side with the About Me blurb */}
//           <Grid item xs={12} md={6}>
//             <Card
//               sx={{
//                 backgroundColor: "transparent", // Keep the background transparent
//                 boxShadow: "none", // Remove box-shadow
//                 padding: 4,
//                 textAlign: "left",
//               }}
//             >
//               <CardContent>
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     color: "pink", // Make the font pink
//                     fontWeight: "bold",
//                     mb: 2,
//                   }}
//                 >
//                   About Me
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     color: "pink", // Pink font color
//                     mb: 3,
//                   }}
//                 >
//                   I am a passionate front-end developer with a love for building user-friendly and
//                   responsive websites. I specialize in React and JavaScript, and I am continuously
//                   learning new technologies to expand my skillset.
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: "pink", // Pink font color for the body text
//                   }}
//                 >
//                   With a background in design and a keen eye for detail, I focus on creating
//                   engaging, intuitive user experiences. I am constantly striving to improve my
//                   skills and stay up-to-date with the latest web technologies.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Right side with the image */}
//           <Grid item xs={12} md={6}>
//             <Box
//               component="img"
//               src={profilePic}
//               alt="About Me Graphic"
//               sx={{
//                 width: "100%", // Make the image fill the width
//                 height: "auto", // Keep aspect ratio intact
//                 objectFit: "cover", // Ensure the image covers the area
//               }}
//             />
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default AboutMe;

import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import Navigation from "./Navigation"; // Import Navigation
import profilePic from "../assets/about-me-graphic.jpg"; // Image file

const AboutMe = () => {
  return (
    <>
      <Navigation /> {/* Keep the Navigation component */}

      <Box
        sx={{
          backgroundColor: "black", // Set the background to black
          minHeight: "100vh", // Ensure it takes up the full height
          display: "flex", // Use flexbox for layout
          alignItems: "center", // Center the content vertically
          justifyContent: "center", // Center horizontally
          padding: 4,
        }}
      >
        <Grid container spacing={2}>
          {/* Left side with the About Me blurb */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: "transparent", // Keep the background transparent
                boxShadow: "none", // Remove box-shadow
                padding: 4,
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Vertically center the text
                height: "100%", // Ensure it takes full height
              }}
            >
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{
                    color: "pink", // Make the font pink
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  About Me
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "pink", // Pink font color
                    mb: 3,
                  }}
                >
                  I am a passionate front-end developer with a love for building user-friendly and
                  responsive websites. I specialize in React and JavaScript, and I am continuously
                  learning new technologies to expand my skillset.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "pink", // Pink font color for the body text
                  }}
                >
                  With a background in design and a keen eye for detail, I focus on creating
                  engaging, intuitive user experiences. I am constantly striving to improve my
                  skills and stay up-to-date with the latest web technologies.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right side with the image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={profilePic}
              alt="About Me Graphic"
              sx={{
                width: "70%", // Adjust width for a smaller image
                height: "auto", // Keep aspect ratio intact
                objectFit: "contain", // Ensure the image is contained without distortion
                marginLeft: "auto", // Align the image to the right
                marginRight: "auto", // Ensure it's centered on the right side
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutMe;