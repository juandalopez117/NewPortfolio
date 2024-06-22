"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ActionAreaCard from "./Card";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation("experienceMain");
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        //justifyContent: "center",
        position: "relative",
        bgcolor: "white",
        gap: "1rem",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "unset",
            fontSize: "2rem",
            fontWeight: 500,
            color: "black",
            padding: "2rem 1rem",
            textAlign: "center",
          }}
        >
          {t("experience")}
        </Typography>

        <Typography
          sx={{
            fontFamily: "unset",
            fontSize: "1.3rem",
            fontWeight: 300,
            color: "black",
            textAlign: "center",
          }}
        >
          {t("description")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          color: "white",
          width: "100%",
          height: "100%",
        }}
      >
        <ActionAreaCard
          imageSrc={"/data.svg"}
          title={t("data.title")}
          description={t("data.description")}
          area={"data"}
          sx={{
            coursor: "pointer",
          }}
        />
        <ActionAreaCard
          imageSrc={"/teachment.svg"}
          title={t("teaching.title")}
          description={t("teaching.description")}
          area={"teaching"}
          sx={{
            coursor: "pointer",
          }}
        />

        <ActionAreaCard
          imageSrc={"/programming.svg"}
          title={t("development.title")}
          description={t("development.description")}
          area={"development"}
          sx={{
            coursor: "pointer",
          }}
        />
      </Box>
    </Box>
  );
};

export default Projects;
