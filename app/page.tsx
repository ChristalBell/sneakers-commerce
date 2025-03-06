import Carousel from "@/components/Carousel";
import Details from "@/components/Details";
import Header from "@/components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Header />
      <hr style={{ width: "85vw" }}></hr>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Carousel />
        <Details />
      </Box>
    </Box>
  );
};

export default Home;
