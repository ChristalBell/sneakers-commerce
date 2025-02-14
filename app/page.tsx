import Carousel from "@/components/Carousel";
import Details from "@/components/Details";
import Header from "@/components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Carousel />
        <Details />
      </Box>
    </Box>
  );
};

export default Home;
