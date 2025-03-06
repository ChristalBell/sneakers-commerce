"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { COLORS } from "@/styles/colors";
import Button from "@mui/material/Button";

const Carousel = () => {
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
  };

  const nextSlide = () => {
    const nextIndex = index + 1;
    setIndex(nextIndex < 0 ? length + 1 : nextIndex);
  };

  const active = shoePictures[index].imageSource;

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
          console.log(shoePicture);

          const currentSlide = () => {
            const biggerImage = document.getElementsByClassName("mainSlide");
            const smallerImage =
              document.getElementsByClassName("slideOption ");
            const newIndex = smallerImage.length; //this equals 4
            console.log(newIndex);
            console.log(index);

            if (shoePicture.imageSource === "/image-product-1.jpg") setIndex(0);
            if (shoePicture.imageSource === "/image-product-2.jpg") setIndex(1);
            if (shoePicture.imageSource === "/image-product-3.jpg") setIndex(2);
            if (shoePicture.imageSource === "/image-product-4.jpg") setIndex(3);
          };

          return (
            <Button key={shoePicture.value} onClick={currentSlide}>
              <Image
                style={{
                  borderRadius: ".75rem",
                  marginRight: ".25rem",
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
