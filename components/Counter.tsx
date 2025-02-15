import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";
import { COLORS } from "@/styles/colors";

const Counter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: COLORS.lightGrayishBlue,
        padding: ".25rem",
        borderRadius: ".5rem",
        alignItems: "center",
      }}
    >
      <Button
        sx={{ color: COLORS.orange, fontWeight: "bold", fontSize: "1.5rem" }}
      >
        -
      </Button>
      <Typography sx={{ fontWeight: "bold" }}> count </Typography>
      <Button
        sx={{ color: COLORS.orange, fontWeight: "bold", fontSize: "1.5rem" }}
      >
        +
      </Button>
    </Box>
  );
};

export default Counter;
