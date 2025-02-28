

// import React, { useState, useEffect, useRef } from "react";
// import { Box, Button, Typography, TextField, Modal } from "@mui/material";
// import { styled } from "@mui/system";
// import Navigation from "./Navigation";

// const gridSize = 5;

// const cages = [
//   { cells: [[0, 0], [1, 0]], target: 6, operation: "+", color: "#FF5733" },
//   { cells: [[0, 1], [0, 2]], target: 2, operation: "÷", color: "#33FF57" },
//   { cells: [[0, 3], [0, 4], [1, 2], [1, 3]], target: 36, operation: "x", color: "#3357FF" },
//   { cells: [[1, 1], [2, 0], [2, 1]], target: 6, operation: "x", color: "#FF33A6" },
//   { cells: [[1, 4], [2, 4], [3, 4]], target: 11, operation: "+", color: "#F3FF33" },
//   { cells: [[2, 2], [3, 2]], target: 9, operation: "+", color: "#33FFF3" },
//   { cells: [[2, 3], [3, 3]], target: 4, operation: "-", color: "#FF8333" },
//   { cells: [[3, 0], [4, 0]], target: 2, operation: "-", color: "#FF33D4" },
//   { cells: [[3, 1], [4, 1]], target: 15, operation: "x", color: "#8D33FF" },
//   { cells: [[4, 2], [4, 3]], target: 2, operation: "÷", color: "#33FF8D" },
//   { cells: [[4, 4]], target: 3, operation: "", color: "#FF3333" },
// ];

// const solution = [
//   [5, 4, 2, 3, 1],
//   [1, 2, 3, 4, 5],
//   [3, 1, 4, 5, 2],
//   [2, 3, 5, 1, 4],
//   [4, 5, 1, 2, 3],
// ];

// const KenKenContainer = styled(Box)({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   minHeight: "100vh",
//   backgroundColor: "#F280B6",
//   color: "#ffffff",
//   padding: "20px",
// });

// const GridContainer = styled(Box)({
//   display: "grid",
//   gridTemplateColumns: `repeat(${gridSize}, 60px)`,
//   gridTemplateRows: `repeat(${gridSize}, 60px)`,
//   gap: "2px",
//   backgroundColor: "black",
//   padding: "4px",
// });

// const CellContainer = styled(Box)({
//   position: "relative",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   width: "60px",
//   height: "60px",
//   backgroundColor: "#ffffff",
//   fontSize: "1.5rem",
//   fontWeight: "bold",
// });

// const CageLabel = styled(Box)({
//   position: "absolute",
//   top: "4px",
//   left: "4px",
//   fontSize: "0.8rem",
//   fontWeight: "bold",
//   color: "#444",
//   backgroundColor: "#ffffff",
//   zIndex: 1,
// });

// const StyledInput = styled(TextField)({
//   "& input": {
//     textAlign: "center",
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//     padding: 0,
//     height: "100%",
//     border: "none",
//   },
//   "& .MuiOutlinedInput-root": {
//     border: "none",
//   },
//   "&:focus-within": {
//     backgroundColor: "#FFC0E0",
//   },
// });

// const StyledButton = styled(Button)({
//   marginTop: "20px",
//   borderRadius: "50px",
//   border: "2px solid white",
//   fontSize: "1.2rem",
//   textTransform: "none",
//   padding: "8px 30px",
//   color: "#ffffff",
//   backgroundColor: "transparent",
//   "&:hover": {
//     backgroundColor: "#FFC0E0",
//   },
// });

// const ResultModal = styled(Modal)({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// });

// const ModalContent = styled(Box)({
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   padding: "20px",
//   textAlign: "center",
// });

// const KenKen = () => {
//   const [grid, setGrid] = useState(
//     Array(gridSize)
//       .fill()
//       .map(() => Array(gridSize).fill(""))
//   );
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSolutionCorrect, setIsSolutionCorrect] = useState(false);
//   const [focusedCell, setFocusedCell] = useState({ row: 0, col: 0 });
//   const inputRefs = useRef([]);

//   useEffect(() => {
//     inputRefs.current[focusedCell.row * gridSize + focusedCell.col]?.focus();
//   }, [focusedCell]);

//   const handleChange = (row, col, value) => {
//     if (value === "" || (parseInt(value) > 0 && parseInt(value) <= gridSize)) {
//       const newGrid = grid.map((r) => [...r]); // Create a deep copy of the grid
//       newGrid[row][col] = value;
//       setGrid(newGrid);
//     }
//   };

//   const handleKeyDown = (e, row, col) => {
//     switch (e.key) {
//       case "ArrowUp":
//         setFocusedCell((prev) => ({
//           row: prev.row > 0 ? prev.row - 1 : prev.row,
//           col: prev.col,
//         }));
//         break;
//       case "ArrowDown":
//         setFocusedCell((prev) => ({
//           row: prev.row < gridSize - 1 ? prev.row + 1 : prev.row,
//           col: prev.col,
//         }));
//         break;
//       case "ArrowLeft":
//         setFocusedCell((prev) => ({
//           row: prev.row,
//           col: prev.col > 0 ? prev.col - 1 : prev.col,
//         }));
//         break;
//       case "ArrowRight":
//         setFocusedCell((prev) => ({
//           row: prev.row,
//           col: prev.col < gridSize - 1 ? prev.col + 1 : prev.col,
//         }));
//         break;
//       default:
//         break;
//     }
//   };

//   const getBorderColor = (row, col, direction) => {
//     for (const cage of cages) {
//       for (const [r, c] of cage.cells) {
//         if (r === row && c === col) {
//           switch (direction) {
//             case "top":
//               return cage.cells.some(([ir, ic]) => ir === row - 1 && ic === col)
//                 ? undefined
//                 : cage.color;
//             case "left":
//               return cage.cells.some(([ir, ic]) => ir === row && ic === col - 1)
//                 ? undefined
//                 : cage.color;
//             case "bottom":
//               return cage.cells.some(([ir, ic]) => ir === row + 1 && ic === col)
//                 ? undefined
//                 : cage.color;
//             case "right":
//               return cage.cells.some(([ir, ic]) => ir === row && ic === col + 1)
//                 ? undefined
//                 : cage.color;
//             default:
//               return undefined;
//           }
//         }
//       }
//     }
//     return undefined;
//   };

//   const checkCageSolution = (cage) => {
//     const values = cage.cells.map(([r, c]) => parseInt(grid[r][c]) || NaN);
//     if (values.some(isNaN)) return false;

//     let result;
//     switch (cage.operation) {
//       case "+":
//         result = values.reduce((acc, val) => acc + val, 0);
//         break;
//       case "-":
//         if (values.length === 2) {
//           result = Math.abs(values[0] - values[1]); // Ensure absolute difference
//         } else {
//           return false; // Invalid cage for subtraction
//         }
//         break;
//       case "x":
//         result = values.reduce((acc, val) => acc * val, 1);
//         break;
//       case "÷":
//         if (values.length === 2) {
//           result = values[0] / values[1];
//           return result === cage.target || (values[1] / values[0]) === cage.target; // Check both division orders
//         } else {
//           return false; // Invalid cage for division
//         }
//         break;
//       default:
//         if (values.length === 1) {
//           result = values[0];
//         } else {
//           return false; // Invalid cage
//         }
//     }
//     return result === cage.target;
//   };

//   const checkSolution = () => {
//     const isGridCorrect = grid.every((row, rowIndex) =>
//       row.every((cell, colIndex) => parseInt(cell) === solution[rowIndex][colIndex])
//     );

//     const areCagesCorrect = cages.every(checkCageSolution);

//     setIsSolutionCorrect(isGridCorrect && areCagesCorrect);
//     setIsModalOpen(true);
//   };

//   return (
//     <>
//       <Navigation iconColor="white" />
//       <KenKenContainer>
//         <Typography
//           variant="h4"
//           className="tropi-land"
//           sx={{
//             fontFamily: "'Tropi Land', sans-serif !important",
//             fontWeight: "bold",
//             color: "#ffffff",
//             marginBottom: 4,
//             textAlign: "center",
//             fontSize: "3rem",
//           }}
//         >
//           KenKen Puzzle
//         </Typography>

//         <GridContainer>
//           {Array.from({ length: gridSize }, (_, rowIndex) =>
//             Array.from({ length: gridSize }, (_, colIndex) => {
//               const cage = cages.find((c) =>
//                 c.cells.some(([r, c]) => r === rowIndex && c === colIndex)
//               );
//               const isCageStart =
//                 cage && cage.cells[0][0] === rowIndex && cage.cells[0][1] === colIndex;

//               return (
//                 <CellContainer
//                   key={`${rowIndex}-${colIndex}`}
//                   sx={{
//                     borderTop: `3px solid ${getBorderColor(rowIndex, colIndex, "top")}`,
//                     borderLeft: `3px solid ${getBorderColor(rowIndex, colIndex, "left")}`,
//                     borderBottom: `3px solid ${getBorderColor(rowIndex, colIndex, "bottom")}`,
//                     borderRight: `3px solid ${getBorderColor(rowIndex, colIndex, "right")}`,
//                   }}
//                 >
//                   {isCageStart && (
//                     <CageLabel>
//                       {cage.target}
//                       {cage.operation}
//                     </CageLabel>
//                   )}
//                   <StyledInput
//                     value={grid[rowIndex][colIndex]}
//                     onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
//                     onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
//                     inputRef={(el) => (inputRefs.current[rowIndex * gridSize + colIndex] = el)}
//                     inputProps={{ maxLength: 1 }}
//                     variant="outlined"
//                     sx={{
//                       position: "relative",
//                       top: "20px",
//                     }}
//                   />
//                 </CellContainer>
//               );
//             })
//           )}
//         </GridContainer>

//         <StyledButton onClick={checkSolution}>
//           Check Solution
//         </StyledButton>

//         <ResultModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
//           <ModalContent>
//             <Typography variant="h6" gutterBottom>
//               {isSolutionCorrect
//                 ? "Congratulations! You solved the puzzle!"
//                 : "The solution is not correct. Try again!"}
//             </Typography>
//             <Button
//               onClick={() => setIsModalOpen(false)}
//               variant="contained"
//               color="primary"
//             >
//               Close
//             </Button>
//           </ModalContent>
//         </ResultModal>
//       </KenKenContainer>
//     </>
//   );
// };

// export default KenKen;

import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography, TextField, Modal } from "@mui/material";
import { styled } from "@mui/system";
import Navigation from "./Navigation";

const gridSize = 5;

const cages = [
  { cells: [[0, 0], [1, 0]], target: 6, operation: "+", color: "#FF5733" },
  { cells: [[0, 1], [0, 2]], target: 2, operation: "÷", color: "#33FF57" },
  { cells: [[0, 3], [0, 4], [1, 2], [1, 3]], target: 36, operation: "x", color: "#3357FF" },
  { cells: [[1, 1], [2, 0], [2, 1]], target: 6, operation: "x", color: "#FF33A6" },
  { cells: [[1, 4], [2, 4], [3, 4]], target: 11, operation: "+", color: "#F3FF33" },
  { cells: [[2, 2], [3, 2]], target: 9, operation: "+", color: "#33FFF3" },
  { cells: [[2, 3], [3, 3]], target: 4, operation: "-", color: "#FF8333" },
  { cells: [[3, 0], [4, 0]], target: 2, operation: "-", color: "#FF33D4" },
  { cells: [[3, 1], [4, 1]], target: 15, operation: "x", color: "#8D33FF" },
  { cells: [[4, 2], [4, 3]], target: 2, operation: "÷", color: "#33FF8D" },
  { cells: [[4, 4]], target: 3, operation: "", color: "#FF3333" },
];

const solution = [
  [5, 4, 2, 3, 1],
  [1, 2, 3, 4, 5],
  [3, 1, 4, 5, 2],
  [2, 3, 5, 1, 4],
  [4, 5, 1, 2, 3],
];

const KenKenContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#F280B6",
  color: "#ffffff",
  padding: "20px",
});

const GridContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: `repeat(${gridSize}, 60px)`,
  gridTemplateRows: `repeat(${gridSize}, 60px)`,
  gap: "2px",
  backgroundColor: "black",
  padding: "4px",
});

const CellContainer = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "60px",
  height: "60px",
  backgroundColor: "#ffffff",
  fontSize: "1.5rem",
  fontWeight: "bold",
});

const CageLabel = styled(Box)({
  position: "absolute",
  top: "4px",
  left: "4px",
  fontSize: "0.8rem",
  fontWeight: "bold",
  color: "#444",
  backgroundColor: "#ffffff",
  zIndex: 1,
});

const StyledInput = styled(TextField)({
  "& input": {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    padding: 0,
    height: "100%",
    border: "none",
  },
  "& .MuiOutlinedInput-root": {
    border: "none",
  },
  "&:focus-within": {
    backgroundColor: "#FFC0E0",
  },
});

const StyledButton = styled(Button)({
  marginTop: "20px",
  borderRadius: "50px",
  border: "2px solid white",
  fontSize: "1.2rem",
  textTransform: "none",
  padding: "8px 30px",
  color: "#ffffff",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "#FFC0E0",
  },
});

const ResultModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ModalContent = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "20px",
  textAlign: "center",
});

const CloseButton = styled(Button)({
  marginTop: "20px",
  borderRadius: "50px",
  border: "2px solid #F280B6", // Pink border matching the site's theme
  color: "#ffffff",
  backgroundColor: "#F280B6", // Pink background matching the site's theme
  "&:hover": {
    backgroundColor: "#FFC0E0", // Lighter pink on hover
  },
});

const KenKen = () => {
  const [grid, setGrid] = useState(
    Array(gridSize)
      .fill()
      .map(() => Array(gridSize).fill(""))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSolutionCorrect, setIsSolutionCorrect] = useState(false);
  const [focusedCell, setFocusedCell] = useState({ row: 0, col: 0 });
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[focusedCell.row * gridSize + focusedCell.col]?.focus();
  }, [focusedCell]);

  const handleChange = (row, col, value) => {
    if (value === "" || (parseInt(value) > 0 && parseInt(value) <= gridSize)) {
      const newGrid = grid.map((r) => [...r]); // Create a deep copy of the grid
      newGrid[row][col] = value;
      setGrid(newGrid);
    }
  };

  const handleKeyDown = (e, row, col) => {
    switch (e.key) {
      case "ArrowUp":
        setFocusedCell((prev) => ({
          row: prev.row > 0 ? prev.row - 1 : prev.row,
          col: prev.col,
        }));
        break;
      case "ArrowDown":
        setFocusedCell((prev) => ({
          row: prev.row < gridSize - 1 ? prev.row + 1 : prev.row,
          col: prev.col,
        }));
        break;
      case "ArrowLeft":
        setFocusedCell((prev) => ({
          row: prev.row,
          col: prev.col > 0 ? prev.col - 1 : prev.col,
        }));
        break;
      case "ArrowRight":
        setFocusedCell((prev) => ({
          row: prev.row,
          col: prev.col < gridSize - 1 ? prev.col + 1 : prev.col,
        }));
        break;
      default:
        break;
    }
  };

  const getBorderColor = (row, col, direction) => {
    for (const cage of cages) {
      for (const [r, c] of cage.cells) {
        if (r === row && c === col) {
          switch (direction) {
            case "top":
              return cage.cells.some(([ir, ic]) => ir === row - 1 && ic === col)
                ? undefined
                : cage.color;
            case "left":
              return cage.cells.some(([ir, ic]) => ir === row && ic === col - 1)
                ? undefined
                : cage.color;
            case "bottom":
              return cage.cells.some(([ir, ic]) => ir === row + 1 && ic === col)
                ? undefined
                : cage.color;
            case "right":
              return cage.cells.some(([ir, ic]) => ir === row && ic === col + 1)
                ? undefined
                : cage.color;
            default:
              return undefined;
          }
        }
      }
    }
    return undefined;
  };

  const checkCageSolution = (cage) => {
    const values = cage.cells.map(([r, c]) => parseInt(grid[r][c]) || NaN);
    if (values.some(isNaN)) return false;

    let result;
    switch (cage.operation) {
      case "+":
        result = values.reduce((acc, val) => acc + val, 0);
        break;
      case "-":
        if (values.length === 2) {
          result = Math.abs(values[0] - values[1]); // Ensure absolute difference
        } else {
          return false; // Invalid cage for subtraction
        }
        break;
      case "x":
        result = values.reduce((acc, val) => acc * val, 1);
        break;
      case "÷":
        if (values.length === 2) {
          result = values[0] / values[1];
          return result === cage.target || (values[1] / values[0]) === cage.target; // Check both division orders
        } else {
          return false; // Invalid cage for division
        }
        break;
      default:
        if (values.length === 1) {
          result = values[0];
        } else {
          return false; // Invalid cage
        }
    }
    return result === cage.target;
  };

  const checkSolution = () => {
    const isGridCorrect = grid.every((row, rowIndex) =>
      row.every((cell, colIndex) => parseInt(cell) === solution[rowIndex][colIndex])
    );

    const areCagesCorrect = cages.every(checkCageSolution);

    setIsSolutionCorrect(isGridCorrect && areCagesCorrect);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navigation iconColor="white" />
      <KenKenContainer>
        <Typography
          variant="h4"
          className="tropi-land"
          sx={{
            fontFamily: "'Tropi Land', sans-serif !important",
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: 4,
            textAlign: "center",
            fontSize: "3rem",
          }}
        >
          KenKen Puzzle
        </Typography>

        <GridContainer>
          {Array.from({ length: gridSize }, (_, rowIndex) =>
            Array.from({ length: gridSize }, (_, colIndex) => {
              const cage = cages.find((c) =>
                c.cells.some(([r, c]) => r === rowIndex && c === colIndex)
              );
              const isCageStart =
                cage && cage.cells[0][0] === rowIndex && cage.cells[0][1] === colIndex;

              return (
                <CellContainer
                  key={`${rowIndex}-${colIndex}`}
                  sx={{
                    borderTop: `3px solid ${getBorderColor(rowIndex, colIndex, "top")}`,
                    borderLeft: `3px solid ${getBorderColor(rowIndex, colIndex, "left")}`,
                    borderBottom: `3px solid ${getBorderColor(rowIndex, colIndex, "bottom")}`,
                    borderRight: `3px solid ${getBorderColor(rowIndex, colIndex, "right")}`,
                  }}
                >
                  {isCageStart && (
                    <CageLabel>
                      {cage.target}
                      {cage.operation}
                    </CageLabel>
                  )}
                  <StyledInput
                    value={grid[rowIndex][colIndex]}
                    onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                    inputRef={(el) => (inputRefs.current[rowIndex * gridSize + colIndex] = el)}
                    inputProps={{ maxLength: 1 }}
                    variant="outlined"
                    sx={{
                      position: "relative",
                      top: "20px",
                    }}
                  />
                </CellContainer>
              );
            })
          )}
        </GridContainer>

        <StyledButton onClick={checkSolution}>
          Check Solution
        </StyledButton>

        <ResultModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalContent>
            <Typography variant="h6" gutterBottom>
              {isSolutionCorrect
                ? "Congratulations! You solved the puzzle!"
                : "The solution is not correct. Try again!"}
            </Typography>
            <CloseButton
              onClick={() => setIsModalOpen(false)}
              variant="contained"
            >
              Close
            </CloseButton>
          </ModalContent>
        </ResultModal>
      </KenKenContainer>
    </>
  );
};

export default KenKen;