"use client";
import React, { useEffect, useState } from "react";
import { Menu, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Button from "@mui/material/Button";

import { useTranslation } from "react-i18next";

const BurgerButton = ({ cat }) => {
  const { t, lang } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [orientation, seOrientation] = useState(0);
  useEffect(() => {
    function handleresize() {
      seOrientation(window.screen.orientation.angle);
    }

    window.addEventListener("resize", handleresize);

    return () => window.removeEventListener("resize", handleresize);
  }, []);
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          "@media (orientation: portrait)": {
            display: { md: "none" },
          },
          "@media (orientation: landscape)": {
            display: { md: "none" },
          },
        }}
      >
        <IconButton onClick={handleClick}>
          <MenuIcon
            sx={{
              fontSize: "2.5rem",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiMenu-paper": {
              borderRadius: 0,
              marginTop: "0%",
              bgcolor: "black",
              color: "white",
              width: 200,
            },
          }}
        >
          {/* Languages */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              padding: "1rem 1rem",
              color: "white",
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
                Home
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
                Projects
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
                Reads
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
                Writes
              </Button>
            </Link>
          </Box>
        </Menu>
      </Box>
    </Box>
  );
};

export default BurgerButton;
