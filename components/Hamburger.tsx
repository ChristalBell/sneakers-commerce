import React from "react";
import ".//Hamburger.scss";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

const Hamburger = () => {
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      className="navBar"
      sx={{
        display: mobile ? "flex" : "none",
        flexDirection: "column",
        marginRight: "1rem",
      }}
    >
      <input className="checkbox" type="checkbox" name="" id="" />
      <Box className="hamburgerLines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </Box>

      <Box
        className="navContainer"
        sx={{
          display: "none",
          width: "8rem",
          borderRadius: ".5rem",
          boxShadow: "0 .25rem 1.25rem #ff7d1a",
          padding: ".5rem",
          position: "absolute",
          zIndex: 2,
          backgroundColor: "white",
          transform: "translateX(-10px) translateY(35px)",
        }}
      >
        <Box className="hamburgerItems">
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </Box>
      </Box>
    </Box>
  );
};

export default Hamburger;
