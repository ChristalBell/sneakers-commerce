import React from "react";
import ".//Hamburger.scss";
import Box from "@mui/material/Box";

const Hamburger = () => {
  return (
    <Box className="navBar" sx={{ display: "flex" }}>
      <Box
        className="navContainer"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <input className="checkbox" type="checkbox" name="" id="" />
        <Box className="hamburgerLines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </Box>

        <Box className="hamburgerItems" sx={{ visibility: "hidden" }}>
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
