import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { COLORS } from "@/styles/colors";
import Button from "@mui/material/Button";

const Carousel = () => {
  const openLightbox = () => {
    var lightbox = document.getElementById("lightbox");
    if (lightbox)
      lightbox.style.display =
        lightbox.style.display == "block" ? "none" : "block";
  };

  var index = 1;
  const nextSlide = (n: any) => {
    showSlides((index += n));
  };

  const showSlides = (index: number) => {
    var i;
    const slides = document.getElementsByClassName("slideOption");
    if (index > slides.length) {
      index = 1;
    }
    if (index < 1) {
      index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].display.style = "none";
    }
  };
  // const slides = document.querySelectorAll("slideOption");
  // var index = 0;

  // const nextSlide = (index: number) => {
  //   index += 1;
  // };
  // const prevSlide = (index: number) => {
  //   index -= 1;
  // };

  // const prevSlide = () => {
  //   slides[index].classList.remove('active');
  //   index --;
  //   if(index < 0 )
  //     index =slides.length - 1;
  //   slides [index].classList.add('active');
  // }

  return (
    <Box id="lightbox" sx={{ marginTop: "4rem" }}>
      <Box className="main">
        <Image
          style={{ borderRadius: ".75rem" }}
          src="/image-product-1.jpg"
          alt="main"
          width={390}
          height={400}
        />
        <Image
          style={{ borderRadius: ".75rem" }}
          src="/image-product-2.jpg"
          alt="main"
          width={390}
          height={400}
        />
        <Image
          style={{ borderRadius: ".75rem" }}
          src="/image-product-3.jpg"
          alt="main"
          width={390}
          height={400}
        />
        <Image
          style={{ borderRadius: ".75rem" }}
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
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: ".75rem",
        }}
      >
        <Button sx={{ color: COLORS.orange }} className="prev">
          PREV
        </Button>
        <Button sx={{ color: COLORS.orange }} className="next">
          NEXT
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
