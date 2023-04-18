// import React from "react";
// import {
//   Box,
//   Typography,
//   RadioGroup,
//   Radio,
//   FormControlLabel,
//   FormControl,
// } from "@mui/material";
// const Survey = () => {
//   const [value, setValue] = React.useState("");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };
//   return (
//     <Box
//       width={"100%"}
//       sx={{
//         "& .MuiButtonBase-root.MuiRadio-root.Mui-checked": {
//           color: "#000",
//         },
//         "& .MuiFormControlLabel-root": {
//           mx: "0px",
//         },
//       }}
//     >
//       <Box
//         display={"flex"}
//         justifyContent={"space-between"}
//         border={"1px solid "}
//       >
//         <Box p={2}>
//           <span>1.</span>
//         </Box>
//         <Box p={2}>
//           <span>2.</span>
//         </Box>
//         <Box p={2}>
//           <span>3.</span>
//         </Box>
//         <Box p={2}>
//           <span>4.</span>
//         </Box>
//         <Box p={2}>
//           <span>5.</span>
//         </Box>
//         <Box p={2}>
//           <span>6.</span>
//         </Box>
//         <Box p={2}>
//           <span>7.</span>
//         </Box>
//       </Box>

//       <Box>
//         <Typography>타이틀</Typography>

//         <Box>
//           <FormControl>
//             <RadioGroup
//               aria-labelledby="demo-controlled-radio-buttons-group"
//               name="controlled-radio-buttons-group"
//               value={value}
//               onChange={handleChange}
//             >
//               <FormControlLabel
//                 value={"rvalue13114"}
//                 control={<Radio />}
//                 label={"rlabel"}
//               />
//               <FormControlLabel
//                 value={"rvalue123"}
//                 control={<Radio />}
//                 label={"rlabel"}
//               />
//               <FormControlLabel
//                 value={"rvalue1223"}
//                 control={<Radio />}
//                 label={"rlabel"}
//               />
//               <FormControlLabel
//                 value={"rvalue2"}
//                 control={<Radio />}
//                 label={"rlabel"}
//               />
//             </RadioGroup>
//           </FormControl>
//         </Box>
//         <Typography>스토리</Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Survey;
