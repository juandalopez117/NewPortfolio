import { Box, Typography } from "@mui/material";
import React from "react";
import { MainPart } from "./MainPart";
import BooksList from "./booksList";
import Footer from "../common/Footer";

export const metadata = {
  title: "Reads",
};

const page = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <MainPart />
      <Box
        sx={{
          width: "100%",
          minHeight: { md: "40vh" },
          bgcolor: "white",
          color: "black",
          padding: { xs: "1rem 2rem", md: "3rem 8rem" },
          textAlign: "left",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "unset",
          }}
        >
          Books list
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "unset",
          }}
        >
          A list of my favorite books and book related to AI, Math, conding and
          data
        </Typography>

        <Typography
          sx={{
            fontFamily: "unset",
            fontSize: "1.3rem",
            marginTop: "2rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          perferendis eum repudiandae possimus dolorum neque ex voluptate
          officia, modi vel saepe corporis labore molestias officiis rerum nihil
          beatae ipsum! Doloremque.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          bgcolor: "white",
          padding: "2rem 4rem",
        }}
      >
        <BooksList />

        <Typography
          sx={{
            fontFamily: "unset",
            fontSize: "1.3rem",
            color: "black",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          perferendis eum repudiandae possimus dolorum neque ex voluptate
          officia, modi vel saepe corporis labore molestias officiis rerum nihil
          beatae ipsum! Doloremque.
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
};

export default page;
