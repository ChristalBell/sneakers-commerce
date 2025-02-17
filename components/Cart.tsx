import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { COLORS } from "@/styles/colors";

const Cart = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "120px",
        right: "90px",
        backgroundColor: COLORS.white,
        boxShadow: ` 10px 5px 5px ${COLORS.orange};`,
        borderRadius: ".5rem",
        padding: "1rem 1.5rem",
      }}
    >
      <Typography> Cart </Typography>
      <Box sx={{ display: " flex" }}>
        <Typography>Quantity</Typography>
        <Typography>Price</Typography>
        <Typography> Image</Typography>
        <Typography>Name</Typography>
      </Box>
      <Typography>Total</Typography>
    </Box>
  );
};

export default Cart;
