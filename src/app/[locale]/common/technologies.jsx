import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Carousel from "./CarouselIcons";

const Technologies = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "50vh",
        color: "white",
        padding: "4rem",
        //position: "relative",
        alignItems: "center",
        gap: "2rem",
        //justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "unset",
          fontSize: "3rem",
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        Technologies
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          gap: "1rem",
          width: { xs: "100%", sm: "40%" },
          height: "50%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "unset",
            fontSize: "1.3rem",
            fontWeight: 400,
          }}
        >
          main technologies that i use in my projects
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            width: "200vw",
            height: "100%",
            padding: "1rem 0",
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
          }}
        >
          <Carousel />
        </Box>
      </Box>
    </Box>
  );
};

export default Technologies;
