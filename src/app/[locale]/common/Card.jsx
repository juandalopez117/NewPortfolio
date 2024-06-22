"use client";
import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Paper } from "@mui/material";
import AlternateReverseTimeline from "../components/DataExperience";

const Card = ({ imageSrc, title, description, area }) => {
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const paperRef = useRef(null);

  useEffect(() => {
    if (clicked) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 500); // Duración de la animación de salida
      return () => clearTimeout(timer);
    }
  }, [clicked]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (paperRef.current && !paperRef.current.contains(event.target)) {
        setClicked(false);
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%", // Ajusta el ancho aquí tus necesidades
        height: "100%", // Ajusta el alto aquí tus necesidades
      }}
    >
      <Box
        onClick={() => setClicked(true)}
        sx={{
          position: "relative",
          width: "100%", // Ajusta el ancho según tus necesidades
          height: "100%", // Ajusta el alto según tus necesidades
          overflow: "hidden",
          cursor: "pointer",
          "&:hover .overlay": {
            top: 0,
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: "-100%",
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transition: "top 0.3s",
            padding: "1rem",
            textAlign: "left",
          }}
        >
          <Typography variant="h5" sx={{ color: "white", fontFamily: "unset" }}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "white", fontFamily: "unset" }}
          >
            {description}
          </Typography>
        </Box>
      </Box>

      {isVisible && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 10,
            opacity: clicked ? 1 : 0,
            transition: "opacity 0.5s ease-out",
          }}
        >
          <Paper
            ref={paperRef}
            sx={{
              position: "absolute",
              top: "10%",
              left: "20%",
              width: "60%",
              borderRadius: 0,
              backgroundColor: "white",
              padding: "1rem",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "80%",
              overflowY: "auto",
              "-ms-overflow-style": "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              animation: clicked
                ? "fadeInUp 0.5s ease-out"
                : "fadeOutDown 0.5s ease-out",
              "@keyframes fadeInUp": {
                "0%": {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
              "@keyframes fadeOutDown": {
                "0%": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
                "100%": {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
              },
            }}
          >
            <AlternateReverseTimeline area={area} />
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default Card;
