import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

import ButtonAppBar from "../common/NavBar";
import Link from "next/link";

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
        src="/write.jpg"
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
        Downloaded from <Link href="https://www.freepik.com"> Freepik </Link>{" "}
      </p>
      <ButtonAppBar />
    </Box>
  );
};
