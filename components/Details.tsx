import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddToCart from "./AddToCart";
import CounterDisplay from "./CounterDisplay";
import { COLORS } from "@/styles/colors";

const Details = () => {
  return (
    <Box
      sx={{
        maxWidth: "25vw",
        marginTop: "3rem",
        transform: "translateX(-10rem)",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          color: COLORS.darkGrayishBlue,
          marginBottom: "1.25rem",
        }}
      >
        Sneaker Company
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", marginBottom: "2rem" }}
      >
        Fall Limited Edition Sneakers
      </Typography>
      <Typography
        sx={{
          color: COLORS.darkGrayishBlue,
          lineHeight: "1.75rem",
          marginBottom: "1.5rem",
        }}
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, theyll withstand everything the
        weather can offer.{" "}
      </Typography>

      <Box className="price">
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginRight: "1rem",
            }}
          >
            $125.00 sale price
          </Typography>
          <Typography
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: ".25rem",
              padding: ".25rem .5rem",
              width: "2rem",
              height: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            {" "}
            50%
          </Typography>
        </Box>
        <Typography sx={{ color: COLORS.darkGrayishBlue, fontWeight: "bold" }}>
          {" "}
          <s>$250.00 original price</s>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", marginTop: "2rem" }}>
        <CounterDisplay />
        <AddToCart />
      </Box>
    </Box>
  );
};

export default Details;
