
// import React from "react";
// import { Box, Button, Typography, Grid } from "@mui/material";
// import { styled } from "@mui/system";
// import { Link } from "react-router-dom";
// import graphicImage from "../assets/left-banner-image.jpg"; // Ensure the image path is correct

// const BubbleButton = styled(Button)({
//   borderRadius: "30px",
//   padding: "10px 20px",
//   backgroundColor: "#000000",
//   color: "#fff",
//   margin: "10px 0",
//   fontWeight: "bold",
//   textTransform: "none",
//   "&:hover": {
//     backgroundColor: "#ff9a9e",
//   },
// });

// const Home = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         height: "100vh",
//         width: "100vw",
//         position: "fixed", // Prevents scrolling and locks the page
//         top: 0,
//         left: 0,
//         overflow: "hidden", // Prevents overflow scrolling
//       }}
//     >
//       <Grid container sx={{ height: "100%", width: "100%" }}>
//         {/* Left Side: Buttons and Kelsey Roche */}
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start", // Aligns content to the left
//             justifyContent: "center",
//             textAlign: "left",
//             gap: 2,
//             backgroundColor: "#F280B6", // Pink background
//             paddingLeft: 4, // Adds padding to the left
//           }}
//         >
//           {/* Kelsey Roche Name */}
//           <Typography
//             variant="h1"
//             className="fjalla-one-regular"
//             sx={{
//               fontSize: '9rem', // Adjust size as needed
//               lineHeight: '1.2',
//               color: "#ffffff",
//               marginBottom: 2,
//             }}
//           >
//             KELSEY<br />ROCHE
//           </Typography>

//           {/* Fullstack Developer */}
//           <Button
//             variant="outlined"
//             sx={{
//               borderRadius: "50px",
//               border: "2px solid black",
//               color: "black",
//               fontSize: "1.5rem",
//               textTransform: "none",
//               padding: "10px 40px",
//               fontWeight: "bold",
//               "&:hover": {
//                 backgroundColor: "#FFC0E0",
//               },
//             }}
//           >
//             Fullstack Developer
//           </Button>

//           {/* Navigation Buttons */}
//           <Box sx={{ display: "flex", gap: 3, marginTop: "40px" }}>
//             {[
//               { text: "about me", path: "/about" },
//               { text: "projects", path: "/projects" },
//               { text: "contact", path: "/contact" }
//             ].map(({ text, path }) => (
//               <Button
//                 key={text}
//                 component={Link}
//                 to={path}
//                 variant="outlined"
//                 sx={{
//                   borderRadius: "50px",
//                   border: "2px solid black",
//                   color: "black",
//                   fontSize: "1.2rem",
//                   textTransform: "none",
//                   padding: "8px 30px",
//                   "&:hover": {
//                     backgroundColor: "#FFC0E0",
//                   },
//                 }}
//               >
//                 {text}
//               </Button>
//             ))}
//           </Box>
//         </Grid>

//         {/* Right Side (Graphic Image) */}
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{
//             height: "100vh", // Makes sure it fills the whole screen
//             backgroundImage: `url(${graphicImage})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       </Grid>
//     </Box>
//   );
// };

// export default Home;

import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import graphicImage from "../assets/left-banner-image.jpg"; // Ensure the image path is correct

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
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        position: "fixed", // Locks layout
        top: 0,
        left: 0,
        overflow: "hidden", // Prevents page scroll
      }}
    >
      <Grid container sx={{ height: "100%", width: "100%" }}>
        {/* Left Side: Text & Buttons */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" }, // Centers on mobile
            justifyContent: "center",
            textAlign: { xs: "center", md: "left" },
            gap: 2,
            backgroundColor: "#F280B6",
            padding: { xs: "20px", md: "50px" }, // Dynamic padding
            height: "100%", // Ensures equal height
          }}
        >
          {/* Name Text - Responsive Size */}
          <Typography
            variant="h1"
            className="fjalla-one-regular"
            sx={{
              fontSize: { xs: "4rem", sm: "6rem", md: "8rem" }, // Adjusts based on screen size
              lineHeight: "1.1",
              color: "#ffffff",
              marginBottom: 2,
              wordBreak: "break-word", // Prevents text from overflowing
            }}
          >
            KELSEY<br />ROCHE
          </Typography>

          {/* Fullstack Developer Button */}
          <Button
            variant="outlined"
            sx={{
              borderRadius: "50px",
              border: "2px solid black",
              color: "black",
              fontSize: { xs: "1rem", md: "1.5rem" }, // Adjusts text size
              textTransform: "none",
              padding: "10px 40px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#FFC0E0",
              },
            }}
          >
            Fullstack Developer
          </Button>

          {/* Navigation Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stacks vertically on small screens
              gap: 2,
              marginTop: "20px",
            }}
          >
            {[
              { text: "about me", path: "/about" },
              { text: "projects", path: "/projects" },
              { text: "contact", path: "/contact" },
            ].map(({ text, path }) => (
              <Button
                key={text}
                component={Link}
                to={path}
                variant="outlined"
                sx={{
                  borderRadius: "50px",
                  border: "2px solid black",
                  color: "black",
                  fontSize: { xs: "1rem", md: "1.2rem" }, // Adjusts for mobile
                  textTransform: "none",
                  padding: "8px 30px",
                  whiteSpace: "nowrap", // Prevents text from wrapping
                  "&:hover": {
                    backgroundColor: "#FFC0E0",
                  },
                }}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Grid>

        {/* Right Side: Image Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: "100%",
            backgroundImage: `url(${graphicImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Grid>
    </Box>
  );
};

export default Home;