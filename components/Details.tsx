import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddToCart from "./AddToCart";
import CounterDisplay from "./CounterDisplay";
import { COLORS } from "@/styles/colors";
import { data } from "@/data";

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
        {data.name}
      </Typography>
      <Typography
        sx={{
          color: COLORS.darkGrayishBlue,
          lineHeight: "1.75rem",
          marginBottom: "1.5rem",
        }}
      >
        {data.description}
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
            ${data.salePrice}
          </Typography>
          <Typography
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: ".25rem",
              padding: ".25rem .5rem",
              width: "2rem",
              height: "1.5rem",
              marginBottom: "1.25rem",
              display: "flex",
            }}
          >
            {" "}
            {data.salePercent}%
          </Typography>
        </Box>
        <Typography sx={{ color: COLORS.darkGrayishBlue, fontWeight: "bold" }}>
          {" "}
          <s>${data.originalPrice}</s>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", marginTop: "2rem" }}>
        <CounterDisplay />
      </Box>
    </Box>
  );
};

export default Details;
