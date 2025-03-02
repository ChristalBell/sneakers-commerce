"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { COLORS } from "@/styles/colors";
import Button from "@mui/material/Button";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const previousSlide = () => {
    const prevIndex = index - 1;
    setIndex(prevIndex < 0 ? length - 1 : prevIndex);
  };

  const nextSlide = () => {
    const nextIndex = index - 1;
    setIndex(nextIndex < 0 ? length++ : nextIndex);
  };

  const shoePictures = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];

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
        <p>{index}</p>
        <Image
          className="mainSlide"
          style={{
            borderRadius: ".75rem",
          }}
          src={shoePictures[index]}
          alt="main"
          width={390}
          height={400}
        />

        <Image
          className="mainSlide"
          style={{
            borderRadius: ".75rem",
            position: "absolute",
            inset: 0,
            opacity: 0,
          }}
          src="/image-product-2.jpg"
          alt="main"
          width={390}
          height={400}
        />
        <Image
          className="mainSlide"
          style={{
            borderRadius: ".75rem",
            position: "absolute",
            inset: 0,
            opacity: 0,
          }}
          src="/image-product-3.jpg"
          alt="main"
          width={390}
          height={400}
        />
        <Image
          className="mainSlide"
          style={{
            borderRadius: ".75rem",
            position: "absolute",
            inset: 0,
            opacity: 0,
          }}
          src="/image-product-4.jpg"
          alt="main"
          width={390}
          height={400}
        />
      </Box>

      <Box className="thumbnails" sx={{ marginTop: "2rem" }}>
        <Image
          style={{
            borderRadius: ".75rem",
            marginRight: "1.5rem",
          }}
          src="/image-product-1-thumbnail.jpg "
          alt="shoe1"
          width={80}
          height={100}
          className="slideOption"
        />
        <Image
          style={{ borderRadius: ".75rem", marginRight: "1.5rem" }}
          src="/image-product-2-thumbnail.jpg "
          alt="shoe2"
          width={80}
          height={100}
          className="slideOption"
        />
        <Image
          style={{ borderRadius: ".75rem", marginRight: "1.5rem" }}
          src="/image-product-3-thumbnail.jpg"
          alt="shoe3"
          width={80}
          height={100}
          className="slideOption"
        />
        <Image
          style={{ borderRadius: ".75rem" }}
          src="/image-product-4-thumbnail.jpg "
          alt="shoe4"
          width={80}
          height={100}
          className="slideOption"
        />
      </Box>

      <Box
        className="buttons"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: ".75rem",
        }}
      >
        <Button
          value="prev"
          sx={{ color: COLORS.orange }}
          className="choose"
          id="prev"
          onClick={previousSlide}
        >
          PREV
        </Button>
        <Button
          value="next"
          sx={{ color: COLORS.orange }}
          className="choose"
          id="next"
          onClick={nextSlide}
        >
          NEXT
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
