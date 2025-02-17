import { COLORS } from "@/styles/colors";
import Button from "@mui/material/Button";
import React from "react";

const AddToCart = () => {
  return (
    <Button
      sx={{
        color: COLORS.black,
        backgroundColor: COLORS.orange,
        width: "20rem",
        marginLeft: "2rem",
        fontWeight: "bold",
        borderRadius: ".5rem",
        "&:hover": {
          scale: 1.5,
          color: COLORS.orange,
          backgroundColor: COLORS.black,
        },
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
