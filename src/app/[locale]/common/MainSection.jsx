"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import NavBar from "./NavBar";
import Link from "next/link";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { BiLogoGmail } from "react-icons/bi";
import { useTranslation } from "react-i18next";
/* Foto de <a href="https://unsplash.com/es/@anthonydelanoix?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
Anthony DELANOIX</a> en <a href="https://unsplash.com/es/fotos/vista-de-gusano-de-los-edificios-b5POxb2aL9o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash
</a>
 */
const MainSection = () => {
  const { t, i18n } = useTranslation("mainSection");
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        //minHeight: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
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
      <Image
        src="/main.webp"
        alt="main"
        fill
        style={{
          objectFit: "cover",
          opacity: 0.5,
        }}
      />
      <NavBar />

      <Box
        sx={{
          position: "absolute",
          top: { xs: "5%", md: "50%" },
          left: { xs: "00%", md: "50%" },
          transform: {
            sm: "translate(20%, 30%)",
            md: "translate(-50%, -100%)",
          },
          textAlign: "center",
          gap: "1rem",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "unset",
          }}
        >
          {t("hi")}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: "unset",
          }}
        >
          {t("name")}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "unset",
          }}
        >
          {t("profile")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <GitHub sx={{ fontSize: "3rem" }} />
          <LinkedIn sx={{ fontSize: "3rem" }} />
          <BiLogoGmail fontSize={"3rem"} />
        </Box>
      </Box>

      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          display: "flex",
          bottom: "2rem",
          height: { xs: "45%", sm: "50%", md: "auto" },

          overflow: { xs: "hidden", sm: "auto" },
          textOverflow: { xs: "ellipsis", sm: "clip" },

          gap: "1rem",
          left: { md: "50%" },
          transform: { md: "translateX(-50%)" },
          justifyContent: "center",
          padding: { xs: "0rem 1rem", sm: "0rem 2rem", md: "0rem 3rem" },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: "1.3rem",
            }}
          >
            {t("analyze.title")}
          </Typography>
          {t("analyze.description")}
        </Box>

        <Box>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: "1.3rem",
            }}
          >
            {t("extract.title")}
          </Typography>
          {t("extract.description")}
        </Box>

        <Box>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: "1.3rem",
            }}
          >
            {t("visualize.title")}
          </Typography>
          {t("visualize.description")}
        </Box>
      </Box>
    </Box>
  );
};

export default MainSection;
