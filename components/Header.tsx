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
import useMediaQuery from "@mui/material/useMediaQuery";
import Hamburger from "./Hamburger";
import Badge from "@mui/material/Badge";
import { useAppSelector } from "@/hooks";
import { orange } from "@mui/material/colors";

const Header = () => {
  const tablet = useMediaQuery("(min-width:900px)");
  const mobile = useMediaQuery("(max-width:600px)");
  const showCart = () => {
    var cartInfo = document.getElementById("cart");
    if (cartInfo)
      cartInfo.style.display =
        cartInfo.style.display == "block" ? "none" : "block";
  };
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector((state) => state.cart.cartItem.count);
  const primary = orange[700];

  const activeMenu = () => {
    var cartDropdown = document.getElementById("cart");
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Hamburger />
      <Image src="/logo.svg" alt="logo" width={120} height={16} />
      <Box
        className="left"
        sx={{
          display: mobile ? "none" : "flex",
          color: COLORS.darkGrayishBlue,
        }}
      >
        <Typography
          sx={{
            margin: "0 2rem",
            "&:hover": {
              color: COLORS.orange,
              cursor: "pointer",
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
              cursor: "pointer",
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
              cursor: "pointer",
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
              cursor: "pointer",
            },
          }}
        >
          About
        </Typography>
        <Typography
          sx={{
            "&:hover": {
              color: COLORS.orange,
              cursor: "pointer",
            },
          }}
        >
          Contact
        </Typography>
      </Box>

      <Box className="right" sx={{ display: "flex", alignItems: "center" }}>
        <ToggleButton onChange={showCart} value="shown">
          <Badge badgeContent={cartCount} color="primary">
            <Image
              src="/icon-cart.svg"
              alt="cart"
              width={20}
              height={18}
              style={{
                marginRight: tablet ? "0rem" : mobile ? "0rem" : "3rem",
                marginLeft: tablet ? "5rem" : mobile ? "3rem" : "20rem",
              }}
            />
          </Badge>
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
