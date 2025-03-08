"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { COLORS } from "@/styles/colors";
// import { useAppDispatch, useAppSelector } from "@/hooks";
// import { subtractOne, addOne } from "@/store/cartSlice";
import AddToCart from "./AddToCart";

const CounterDisplay = () => {
  // const count = useAppSelector((state) => state.cart.cartItem.count);
  // const dispatch = useAppDispatch();
  const initialCount = 0;
  const [shoeCount, setShoeCount] = useState(initialCount);

  return (
    <Box sx={{ display: "flex" }}>
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
          sx={{
            color: COLORS.orange,
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
          onClick={() => setShoeCount(shoeCount - 1)}
        >
          -
        </Button>
        <Typography sx={{ fontWeight: "bold" }}> {shoeCount} </Typography>
        <Button
          sx={{
            color: COLORS.orange,
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
          onClick={() => setShoeCount(shoeCount + 1)}
        >
          +
        </Button>
      </Box>
      <AddToCart shoeCount={shoeCount} />
    </Box>
  );
};

export default CounterDisplay;
