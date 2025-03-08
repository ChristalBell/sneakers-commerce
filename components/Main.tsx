import React from "react";
import Carousel from "@/components/Carousel";
import Details from "@/components/Details";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

const Main = () => {
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Carousel />
      <Details />
    </Box>
  );
};

export default Main;
