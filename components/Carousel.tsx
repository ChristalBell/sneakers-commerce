"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { COLORS } from "@/styles/colors";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

const Carousel = () => {
  const mobile = useMediaQuery("(max-width:600px)");
  const [index, setIndex] = useState(0);
  const shoePictures = [
    { imageSource: "/image-product-1.jpg", value: 0 },
    { imageSource: "/image-product-2.jpg", value: 1 },
    { imageSource: "/image-product-3.jpg", value: 2 },
    { imageSource: "/image-product-4.jpg", value: 3 },
  ];
  const previousSlide = () => {
    const prevIndex = index - 1;

    setIndex(prevIndex < 0 ? length - 1 : prevIndex);
    if (index <= 0) setIndex(0);
  };

  const nextSlide = () => {
    const nextIndex = index + 1;
    if (index <= 2) return setIndex(nextIndex < 0 ? length + 1 : nextIndex);
  };

  const active = shoePictures[index].imageSource;

  return (
    <Box>
      <Box
        className="mainContainer"
        sx={{
          marginTop: "4rem",
          opacity: 1,
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
          width={375}
          height={400}
        />
      </Box>

      <Box
        className="thumbnails"
        sx={{ marginTop: "2rem", display: mobile ? "none" : "block" }}
      >
        {shoePictures.map((shoePicture) => {
          console.log(shoePicture);

          const currentSlide = () => {
            if (shoePicture.value === 0) setIndex(0);
            if (shoePicture.value === 1) setIndex(1);
            if (shoePicture.value === 2) setIndex(2);
            if (shoePicture.value === 3) setIndex(3);
          };

          return (
            <Button key={shoePicture.value} onClick={currentSlide}>
              <Image
                style={{
                  borderRadius: ".75rem",
                  marginRight: ".05rem",
                  // border: `2px solid ${COLORS.orange}`,
                }}
                src={shoePicture.imageSource}
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
          justifyContent: mobile ? "space-evenly" : "space-between",
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
