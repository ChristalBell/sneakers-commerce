"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { COLORS } from "@/styles/colors";
import Button from "@mui/material/Button";
import { act } from "react-dom/test-utils";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const previousSlide = () => {
    const prevIndex = index - 1;
    setIndex(prevIndex < 0 ? length - 1 : prevIndex);
  };

  const nextSlide = () => {
    const nextIndex = index + 1;
    setIndex(nextIndex < 0 ? length + 1 : nextIndex);
  };

  // const currentSlide = () => {
  //   const currentIndex = index;
  //   setIndex(currentIndex <= 0 ? currentIndex : index);
  // };

  const shoePictures = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];

  const active = shoePictures[index];

  return (
    <Box>
      <Box
        className="mainContainer"
        sx={{
          marginTop: "4rem",
          opacity: 1,
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          className="mainSlide"
          style={{
            borderRadius: ".75rem",
          }}
          src={active}
          alt="main"
          width={390}
          height={400}
        />
      </Box>

      <Box className="thumbnails" sx={{ marginTop: "2rem" }}>
        {shoePictures.map((shoePicture) => {
          return (
            <Button key={shoePicture} onClick={currentSlide}>
              <Image
                style={{
                  borderRadius: ".75rem",
                  marginRight: ".25rem",
                  // border: `2px solid ${COLORS.orange}`,
                }}
                src={shoePicture}
                alt="shoes"
                width={80}
                height={100}
                className="slideOption"
              />
            </Button>
          );
        })}
      </Box>

      <Box
        className="buttons"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: ".75rem",
        }}
      >
        <Button sx={{ color: COLORS.orange }} id="prev" onClick={previousSlide}>
          PREV
        </Button>
        <Button sx={{ color: COLORS.orange }} id="next" onClick={nextSlide}>
          NEXT
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
