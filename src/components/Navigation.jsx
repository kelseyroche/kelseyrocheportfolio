
// import React, { useState } from "react";
// import { Box, Drawer, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from "react-router-dom";
// import navbarTop from "../assets/navbar-top.png"; // Import the top graphic
// import navbarBottom from "../assets/navbar-bottom.png"; // Import the bottom graphic

// function Navigation({ iconColor }) {
//   const [open, setOpen] = useState(false);

//   const toggleDrawer = (isOpen) => () => {
//     setOpen(isOpen);
//   };

//   return (
//     <Box>
//       <IconButton
//         edge="start"
//         color="inherit"
//         aria-label="menu"
//         onClick={toggleDrawer(true)}
//         sx={{
//           position: "fixed",
//           top: 16,
//           left: 16,
//           zIndex: 1201,
//         }}
//       >
//         <MenuIcon sx={{ fontSize: 40, color: iconColor }} />
//       </IconButton>
//       <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
//         <Box
//           sx={{
//             width: 250,
//             backgroundColor: "#F280B6",
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             alignItems: "center",
//             paddingY: 2,
//             position: "relative",
//           }}
//           role="presentation"
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//         >
//           {/* Top Graphic */}
//           <img src={navbarTop} alt="Top Graphic" style={{ width: "100%" }} />

//           {/* Navigation Content */}
//           <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//             <Typography
//               variant="h4"
//               sx={{
//                 fontWeight: "bold",
//                 color: "#ffffff",
//                 marginBottom: 4,
//                 textAlign: "center",
//               }}
//             >
//               KELSEY<br />ROCHE
//             </Typography>
//             <List>
//               {["Home", "About", "Projects", "Contact"].map((text) => (
//                 <ListItem
//                   button
//                   key={text}
//                   component={Link}
//                   to={text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase()}`}
//                   sx={{
//                     textAlign: "center",
//                     color: "#ffffff",
//                     "&:hover": {
//                       backgroundColor: "#FFC0E0",
//                     },
//                   }}
//                 >
//                   <ListItemText
//                     primary={text}
//                     primaryTypographyProps={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}
//                   />
//                 </ListItem>
//               ))}
//             </List>
//           </Box>

//           {/* Bottom Graphic */}
//           <img src={navbarBottom} alt="Bottom Graphic" style={{ width: "100%" }} />
//         </Box>
//       </Drawer>
//     </Box>
//   );
// }

// export default Navigation;

import React, { useState } from "react";
import { Box, Drawer, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import navbarTop from "../assets/navbar-top.png"; // Import the top graphic
import navbarBottom from "../assets/navbar-bottom.png"; // Import the bottom graphic

function Navigation({ iconColor }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  return (
    <Box>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 1201,
        }}
      >
        <MenuIcon sx={{ fontSize: 40, color: iconColor }} />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "#F280B6",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            paddingY: 2,
            position: "relative",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* Top Graphic */}
          <img src={navbarTop} alt="Top Graphic" style={{ width: "100%" }} />

          {/* Navigation Content */}
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography
              vvariant="h4"
              className="tropi-land"
              sx={{
                fontFamily: "'Tropi Land', sans-serif !important", // Ensure it overrides MUI styles
                fontWeight: "bold",
                color: "#ffffff",
                marginBottom: 4,
                textAlign: "center",
                fontSize:"3rem"
              }}
            >
              KELSEY<br />ROCHE
            </Typography>
            <List>
              {["Home", "About", "Projects", "Contact"].map((text) => (
                <ListItem
                  button
                  key={text}
                  component={Link}
                  to={text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase()}`}
                  sx={{
                    textAlign: "center",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#FFC0E0",
                    },
                  }}
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Bottom Graphic */}
          <img src={navbarBottom} alt="Bottom Graphic" style={{ width: "100%" }} />
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navigation;