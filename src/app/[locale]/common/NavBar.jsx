"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import { Select, MenuItem } from "@mui/material";
import i18nConfig from "@/app/i18nConfig";
import Link from "next/link";
import BurgerButton from "./BurgerButton";

export default function ButtonAppBar() {
  const { t, i18n } = useTranslation("main");
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [lang, setLanguage] = useState(i18n.language);

  const handleChange = React.useCallback(
    (e) => {
      const newLocale = e;
      setLanguage(newLocale);

      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = "; expires=" + date.toUTCString();
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

      if (currentLocale === i18nConfig.defaultLocale) {
        router.push("/" + newLocale + currentPathname);
      } else {
        router.push(
          currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        );
      }

      router.refresh();
    },
    [currentLocale, currentPathname, router]
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: { xs: "100%", md: "100%" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          padding: "0rem 1rem",
          alignItems: "center",
          width: { xs: "100%", md: "100%" },

          display: "flex",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            width: { xs: "100%", md: "100%" },

            alignItems: "center",
            justifyContent: "space-between",
            padding: {
              xs: "0rem 1rem",
              sm: "0rem 2rem",
              md: "0rem 3rem",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center", // center the text horizontally
              alignItems: "center", // center the text vertically
              width: { xs: "50%" }, // ensures the box takes the full width
              left: { md: 0 },
              padding: {
                xs: "0 1rem", // padding for small screens
                md: "0 3rem", // padding for medium and larger screens
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "unset",
                textTransform: "none",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontSize: {
                  xs: "0.9rem",
                  sm: "1rem",
                  md: "1.1rem",
                },
                fontWeight: 400,
              }}
            >
              Juan David Piedrahita López
            </Typography>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              gap: "1rem",
            }}
          >
            <Link href="/">
              <Button
                color="inherit"
                sx={{
                  fontFamily: "unset",
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                }}
              >
                {t("home")}
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                color="inherit"
                sx={{
                  fontFamily: "unset",
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                }}
              >
                {t("projects")}
              </Button>
            </Link>

            <Link href="/reads">
              <Button
                color="inherit"
                sx={{
                  fontFamily: "unset",
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                }}
              >
                {t("reads")}
              </Button>
            </Link>

            <Link href="/writes">
              <Button
                color="inherit"
                sx={{
                  fontFamily: "unset",
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                }}
              >
                {t("writes")}
              </Button>
            </Link>
            <Select
              value={lang}
              onChange={(e) => handleChange(e.target.value)}
              size="small"
              sx={{
                border: "none",
                borderRadius: 0,
                color: "white",
                fontFamily: "unset",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&:hover": {
                  bgcolor: "gray",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  borderRadius: "0",
                },
                ".MuiSvgIcon-root ": {
                  fill: "white !important",
                },
              }}
            >
              <MenuItem value={"en"}>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  {" "}
                  English{" "}
                </Typography>
              </MenuItem>

              <MenuItem value={"es"}>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  Español
                </Typography>
              </MenuItem>
            </Select>

            <Button
              color="inherit"
              sx={{
                fontFamily: "unset",
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 400,
                bgcolor: "black",
                boxShadow: "none",
                borderRadius: "0px",
                "&:hover": {
                  bgcolor: "gray",
                },
              }}
            >
              Resume
            </Button>
          </Box>

          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              gap: "0.5rem",
            }}
          >
            <Select
              value={lang}
              onChange={(e) => handleChange(e.target.value)}
              size="small"
              sx={{
                border: "none",
                borderRadius: 0,
                color: "white",
                fontFamily: "unset",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&:hover": {
                  bgcolor: "gray",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  borderRadius: "0",
                },
                ".MuiSvgIcon-root ": {
                  fill: "white !important",
                },
              }}
            >
              <MenuItem value={"en"}>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  {" "}
                  English{" "}
                </Typography>
              </MenuItem>

              <MenuItem value={"es"}>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  Español
                </Typography>
              </MenuItem>
            </Select>

            <BurgerButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
