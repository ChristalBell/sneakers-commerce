import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { COLORS } from "@/styles/colors";

const CounterDisplay = () => {
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

export default CounterDisplay;
