// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Navigation = () => {
//   return (
//     <AppBar position="sticky" sx={{ background: '#333' }}>
//       <Toolbar>
//         <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             My Resume
//           </Typography>
//           <div>
//             <Button color="inherit" component={Link} to="/">Home</Button>
//             <Button color="inherit" component={Link} to="/about">About Me</Button>
//             <Button color="inherit" component={Link} to="/projects">Projects</Button>
//             <Button color="inherit" component={Link} to="/contact">Contact</Button>
//           </div>
//         </Container>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navigation;
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#121225" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          My Portfolio
        </Typography>
        <div>
          <Button component={Link} to="/" sx={{ color: "white", mx: 1 }}>
            Home
          </Button>
          <Button component={Link} to="/about" sx={{ color: "white", mx: 1 }}>
            About
          </Button>
          <Button component={Link} to="/projects" sx={{ color: "white", mx: 1 }}>
            Projects
          </Button>
          <Button component={Link} to="/contact" sx={{ color: "white", mx: 1 }}>
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;