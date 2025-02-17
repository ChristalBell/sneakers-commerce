import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { COLORS } from "@/styles/colors";
import { useAppSelector } from "@/hooks";
import { data } from "@/data";

const Cart = () => {
  const cartCount = useAppSelector((state) => state.cart.cartItem.count);
  const finalPrice = data.salePrice;
  const totalPrice = finalPrice * cartCount;

  // const cartItem = useAppSelector((state) => state.cart.cartItem);
  // const { count, price, title } = cartItem;

  return (
    <Box
      sx={{
        position: "absolute",
        top: "120px",
        right: "120px",
        backgroundColor: COLORS.white,
        boxShadow: ` 10px 5px 5px ${COLORS.orange};`,
        borderRadius: ".5rem",
        padding: "1rem 1.5rem",
      }}
    >
      <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Cart
      </Typography>
      <Box sx={{ display: " flex" }}>
        <Image
          src="/image-product-3-thumbnail.jpg"
          alt="shoe3"
          width={40}
          height={40}
          style={{ borderRadius: ".25rem", marginRight: ".5rem" }}
        />
        <Typography sx={{ marginRight: ".5rem", fontWeight: "bold" }}>
          {cartCount}
        </Typography>
        <Typography sx={{ marginRight: ".5rem" }}>x $125</Typography>

        <Typography>Fall Limited Edition Sneakers</Typography>
      </Box>
      <Typography
        sx={{ fontWeight: "bold", marginTop: ".5rem", marginLeft: "3.25rem" }}
      >
        Total ${totalPrice}
      </Typography>
    </Box>
  );
};

export default Cart;
