"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { COLORS } from "@/styles/colors";
import { useAppDispatch } from "@/hooks";
import Cart from "./Cart";

const Header = () => {
  const showCart = () => {
    var cartInfo = document.getElementById("cart");
    if (cartInfo)
      cartInfo.style.display =
        cartInfo.style.display == "block" ? "none" : "block";
  };
  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        alignItems: "center",
        padding: "2rem 9.5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        className="left"
        sx={{
          display: "flex",
          color: COLORS.darkGrayishBlue,
        }}
      >
        <Image src="/logo.svg" alt="logo" width={120} height={16} />
        <Typography
          sx={{
            margin: "0 2rem",
            "&:hover": {
              color: COLORS.orange,
            },
          }}
        >
          Collections
        </Typography>
        <Typography
          sx={{
            marginRight: "2rem",
            "&:hover": {
              color: COLORS.orange,
            },
          }}
        >
          Men
        </Typography>
        <Typography
          sx={{
            marginRight: "2rem",
            "&:hover": {
              color: COLORS.orange,
            },
          }}
        >
          Women
        </Typography>
        <Typography
          sx={{
            marginRight: "2rem",
            "&:hover": {
              color: COLORS.orange,
            },
          }}
        >
          About
        </Typography>
        <Typography
          sx={{
            "&:hover": {
              color: COLORS.orange,
            },
          }}
        >
          Contact
        </Typography>
      </Box>

      <Box className="right" sx={{ display: "flex", alignItems: "center" }}>
        <ToggleButton onChange={showCart} value="shown">
          <Image
            src="/icon-cart.svg"
            alt="cart"
            width={20}
            height={18}
            style={{ marginRight: "3rem", marginLeft: "20rem" }}
          />
        </ToggleButton>
        <Box id="cart" sx={{ display: "none" }}>
          <Cart />
        </Box>

        <Button
          sx={{
            "&:hover": {
              border: `2px solid ${COLORS.orange}`,
              borderRadius: "50%",
            },
          }}
        >
          <Image src="/image-avatar.png" alt="profile" width={45} height={45} />
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
