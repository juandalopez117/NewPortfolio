"use client";
import { Box, Typography } from "@mui/material";
import { animate, useMotionValue } from "framer-motion";
import React, { useEffect } from "react";

import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiPowerbi, SiMongodb, SiMysql, SiNextjs } from "react-icons/si";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";

/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 */

const images = [
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <SiPowerbi
      size={50}
      style={{ color: "gray" }}
      name="Power BI"
      alt="Power BI"
    />
    <Typography sx={{ fontFamily: "unset", textAlign: "center" }} variant="p">
      Power BI
    </Typography>
  </Box>,

  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <SiMongodb
      size={50}
      style={{ color: "gray" }}
      name="Power BI"
      alt="Power BI"
    />
    <Typography sx={{ fontFamily: "unset", textAlign: "center" }} variant="p">
      Mongo DB
    </Typography>
  </Box>,

  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <SiMysql
      size={50}
      style={{ color: "gray" }}
      name="Power BI"
      alt="Power BI"
    />
    <Typography sx={{ fontFamily: "unset", textAlign: "center" }} variant="p">
      MySQL
    </Typography>
  </Box>,

  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <FaPython
      size={50}
      style={{ color: "gray" }}
      name="Power BI"
      alt="Power BI"
    />
    <Typography sx={{ fontFamily: "unset", textAlign: "center" }} variant="p">
      Python
    </Typography>
  </Box>,

  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <FaNodeJs
      size={50}
      style={{ color: "gray" }}
      name="Power BI"
      alt="Power BI"
    />
    <Typography sx={{ fontFamily: "unset", textAlign: "center" }} variant="p">
      Node JS
    </Typography>
  </Box>,

  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <FaHtml5
      size={50}
      style={{ color: "gray" }}
      name="Power BI"
      alt="Power BI"
    />
    <Typography sx={{ fontFamily: "unset", textAlign: "center" }} variant="p">
      HTML
    </Typography>
  </Box>,

  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <FaCss3Alt
      size={50}
      style={{ color: "gray" }}
      name="Power BI"
      alt="Power BI"
    />
    <Typography sx={{ fontFamily: "unset", textAlign: "center" }} variant="p">
      CSS
    </Typography>
  </Box>,

  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <FaReact
      size={50}
      style={{ color: "gray" }}
      name="Power BI"
      alt="Power BI"
    />
    <Typography sx={{ fontFamily: "unset", textAlign: "center" }} variant="p">
      React
    </Typography>
  </Box>,
];
const Carousel = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(10);

  useEffect(() => {
    let controls;
    let finalPosition = (-0.5 * width) / 2 + 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 30,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
  }, [xTranslation, width]);

  return (
    <motion.div
      style={{
        x: xTranslation,
        display: "flex",
        width: "100%",
        gap: "1.5rem",
      }}
      /* sx={{
        display: "flex",
        gap: "1.5rem",
      }} */
      ref={ref}
    >
      {[...images, ...images].map((image, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            gap: "1.5rem",
            flexDirection: "column",
            alignItems: "center",
            width: `${100}vw`,
          }}
        >
          {image}
        </Box>
      ))}
    </motion.div>
  );
};

export default Carousel;
