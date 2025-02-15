import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { COLORS } from "@/styles/colors";

const Carousel = () => {
  return (
    <Box sx={{ marginTop: "4rem" }}>
      <Box>
        <Image
          style={{ borderRadius: ".75rem" }}
          src="/image-product-1.jpg"
          alt="main"
          width={390}
          height={400}
        />
      </Box>

      <Box sx={{ marginTop: "2rem" }}>
        <Image
          style={{
            borderRadius: ".75rem",
            marginRight: "1.5rem",
          }}
          src="/image-product-1-thumbnail.jpg "
          alt="shoe1"
          width={80}
          height={100}
        />
        <Image
          style={{ borderRadius: ".75rem", marginRight: "1.5rem" }}
          src="/image-product-2-thumbnail.jpg "
          alt="shoe2"
          width={80}
          height={100}
        />
        <Image
          style={{ borderRadius: ".75rem", marginRight: "1.5rem" }}
          src="/image-product-3-thumbnail.jpg"
          alt="shoe3"
          width={80}
          height={100}
        />
        <Image
          style={{ borderRadius: ".75rem" }}
          src="/image-product-4-thumbnail.jpg "
          alt="shoe4"
          width={80}
          height={100}
        />
      </Box>
    </Box>
  );
};

export default Carousel;
