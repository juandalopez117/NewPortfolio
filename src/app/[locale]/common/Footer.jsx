"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { FiLinkedin } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, i18n } = useTranslation("main");
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "65vh", md: "40vh" },
        bgcolor: "black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          padding: "2rem 2rem",
          height: "70%",
          gap: "1rem",
          justifyContent: "space-around",
          alignItems: { xs: "center", sm: "flex-start" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "unset",
              color: "white",
              fontWeight: 300,
              fontSize: "1.5rem",
            }}
          >
            Social media
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              marginTop: "1.5vh",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FiLinkedin
              size={30}
              style={{ color: "white" }}
              name="Linkedin"
              alt="Linkedin"
            />
            <FiGithub
              size={30}
              style={{ color: "white" }}
              name="Github"
              alt="Github"
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: { xs: "center", md: "auto" },
            justifyContent: { xs: "center", md: "auto" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "unset",
              color: "white",
              fontWeight: 300,
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            Navigation
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "1.5vh",
            }}
          >
            <Link href="/">
              <Typography
                sx={{
                  fontFamily: "unset",
                }}
              >
                {t("home")}
              </Typography>
            </Link>

            <Link href="/projects">
              <Typography
                sx={{
                  fontFamily: "unset",
                }}
              >
                {t("projects")}
              </Typography>
            </Link>

            <Link href="/reads">
              <Typography
                sx={{
                  fontFamily: "unset",
                }}
              >
                {t("reads")}
              </Typography>
            </Link>

            <Link href="/writes">
              <Typography
                sx={{
                  fontFamily: "unset",
                }}
              >
                {t("writes")}
              </Typography>
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "unset",
              color: "white",
              fontWeight: 300,
              fontSize: "1.5rem",
            }}
          >
            Contact
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "1.5vh",
            }}
          >
            <Typography
              sx={{
                fontFamily: "unset",
              }}
            >
              juandalopez117@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "black",
          width: "100%",
          height: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "unset",
            color: "white",
            fontWeight: 300,
            fontSize: "1.2rem",
          }}
        >
          {t("footer")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
