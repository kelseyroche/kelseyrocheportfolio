
// import React, { useState } from "react";
// import { Box, Drawer, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from "react-router-dom";

// function Navigation() {
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
//           zIndex: 1201, // Ensures it appears above other components
//         }}
//       >
//         <MenuIcon sx={{ fontSize: 40, color: "#FF86C8" }} />
//       </IconButton>
//       <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
//         <Box
//           sx={{
//             width: 250,
//             backgroundColor: "#F280B6",
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             paddingTop: 8,
//           }}
//           role="presentation"
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: "bold",
//               color: "#ffffff",
//               marginBottom: 4,
//               textAlign: "center",
//             }}
//           >
//             Kelsey Roche
//           </Typography>
//           <List>
//             {["Home", "About", "Projects", "Contact"].map((text, index) => (
//               <ListItem
//                 button
//                 key={text}
//                 component={Link}
//                 to={text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase()}`}
//                 sx={{
//                   textAlign: "center",
//                   color: "#ffffff",
//                   "&:hover": {
//                     backgroundColor: "#FFC0E0",
//                   },
//                 }}
//               >
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
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
          zIndex: 1201, // Ensures it appears above other components
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
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 8,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: 4,
              textAlign: "center",
            }}
          >
            Kelsey Roche
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
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navigation;