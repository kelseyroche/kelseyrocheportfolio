// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#646cff",
//     },
//     background: {
//       default: "#1e1e2f",
//       paper: "#121225",
//     },
//     text: {
//       primary: "#ffffff",
//     },
//   },
//   typography: {
//     fontFamily: "Inter, sans-serif",
//   },
// });

// export default theme;

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // Ensures light mode
    primary: {
      main: "#ff6f61", // Fun coral color
    },
    secondary: {
      main: "#6b7dfb", // Vibrant blue
    },
    background: {
      default: "#fffaf0", // Warm light beige
      paper: "#ffffff",
    },
    text: {
      primary: "#333",
      secondary: "#555",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif", // A modern and fun font
  },
});

export default theme;