import { Box, Divider, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import React from "react";
import { MainPart } from "./MainPart";
import WriteList from "./WriteList";
import Footer from "../../common/Footer";
export const metadata = {
  title: "Research",
};

function createRandomPapers() {
  const randomBooks = {
    date: faker.date.past().toLocaleDateString(),
    title: "Database: " + faker.lorem.words(),
    Datacast: "Datacast",
    description: faker.lorem.sentence(),
  };
  return randomBooks;
}

const arr = [1, 2, 3, 4, 5, 6];

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
          Write List
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "unset",
          }}
        >
          My pubications and personal writings related to AI, Math, conding and
          data, in an integral way
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
          padding: "1rem 8rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "unset",
            //fontSize: "1.3rem",
            //marginTop: "2rem",
            color: "black",
          }}
        >
          Recent entries
        </Typography>

        <Divider sx={{ width: "90%", bgcolor: "black" }} />

        <WriteList />

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
