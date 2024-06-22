import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import ButtonAppBar from "../../common/NavBar";

export const MainPart = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60vh",
        position: "relative",
      }}
    >
      <Image
        src="/Math.jpg"
        alt="main"
        fill
        style={{
          objectFit: "cover",
          opacity: 0.5,
          objectPosition: "center",
        }}
      />
      <p
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          margin: "1rem",
          color: "white",
        }}
      >
        Foto de{" "}
        <a href="https://unsplash.com/es/@saadahmad_umn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Saad Ahmad
        </a>{" "}
        en{" "}
        <a href="https://unsplash.com/es/fotos/texto-BQLw0OrA6F4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </p>
      <ButtonAppBar />
    </Box>
  );
};
