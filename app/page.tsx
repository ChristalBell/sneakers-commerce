"use client";
import Carousel from "@/components/Carousel";
import Details from "@/components/Details";
import Header from "@/components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Main from "@/components/Main";

const Home = () => {
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ marginBottom: "4rem" }}>
      <Header />
      <hr style={{ width: "85vw" }}></hr>
      <Main />
    </Box>
  );
};

export default Home;
