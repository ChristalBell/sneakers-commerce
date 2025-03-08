import { COLORS } from "@/styles/colors";
import Button from "@mui/material/Button";
import React from "react";
import { useAppDispatch } from "@/hooks";
import { addToCart } from "@/store/cartSlice";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
  shoeCount: number;
}

const AddToCart = ({ shoeCount }: Props) => {
  console.log(shoeCount);
  const dispatch = useAppDispatch();
  const tablet = useMediaQuery("(min-width:900px)");
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <Button
      sx={{
        color: COLORS.black,
        backgroundColor: COLORS.orange,
        width: tablet ? "10rem" : mobile ? "15rem" : "30rem",
        marginLeft: "2rem",
        fontWeight: "bold",
        borderRadius: ".5rem",
        "&:hover": {
          scale: 1.5,
          color: COLORS.orange,
          backgroundColor: COLORS.black,
        },
      }}
      onClick={() => dispatch(addToCart({ count: shoeCount }))}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
