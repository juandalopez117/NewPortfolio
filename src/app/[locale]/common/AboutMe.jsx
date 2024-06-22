"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t, i18n } = useTranslation("about");
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4rem",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          height: { xs: "90%", md: "70%" },
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
            },
            width: "30%",
            bgcolor: "red",
            position: "relative",
            borderRadius: "50px",
          }}
        >
          <Image
            src="/avatar.jpg"
            alt="avatar"
            fill
            sx={{
              position: "absolute",
              objectFit: "cover",
              "border-radius": "50px",
            }}
          />
        </Box>

        <Box
          sx={{
            width: { xs: "90%", md: "60%" },
            height: "100%",
            bgcolor: "#20201f",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
            borderRadius: "50px 0px 50px 0px",
            padding: { xs: "2rem", md: "3rem" },
            textAlign: { xs: "left", md: "right" },
            "-ms-overflow-style": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "unset",
              textDecoration: "underline",
              textDecorationThickness: "2px",
              textUnderlineOffset: "0.5rem",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            {t("about")}
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: "1rem",
              lineHeight: "1.5rem",
              height: "100%",
              overflow: "auto",
              "-ms-overflow-style": "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {t("description")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
