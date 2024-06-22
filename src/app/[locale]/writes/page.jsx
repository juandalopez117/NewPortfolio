import { Box, Divider, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import React from "react";
import { MainPart } from "./MainPart";
/* import WriteList from "./WriteList"; */
import Footer from "../common/Footer";
import Link from "next/link";
/* import CardWrite from "./CardWrite"; */

export const metadata = {
  title: "Write List",
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
          padding: "2rem 2rem",
          //minHeight: "100vh",
          justifyContent: "center",
          gap: "2rem",
          bgcolor: "white",

          color: "black",
        }}
      >
        <Link href="/writes/personal" passHref>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "unset",
            }}
          >
            Personal
          </Typography>
        </Link>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: "gray",
          }}
        />
        <Link href="/writes/research" passHref>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "unset",
            }}
          >
            Research
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{
          width: "100%",
          paddingBottom: "2rem",
          bgcolor: "white",
          //padding: "1rem rem",
          color: "black",
        }}
      >
        <Typography
          sx={{
            fontFamily: "unset",
            fontSize: "1.3rem",
            paddingTop: "2rem",
            bgcolor: "white",
            paddingLeft: { xs: "2rem", md: "8rem" },
            paddingRight: { xs: "2rem", md: "8rem" },
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
          voluptate. Ullam labore officiis quasi sapiente porro delectus
          accusantium nam voluptate dolorum fugit, error alias sequi,
          reprehenderit, cumque amet veritatis? In! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Doloremque perferendis rerum iure
          assumenda et quod atque, qui blanditiis labore officia necessitatibus
          rem, veritatis est mollitia eligendi deleniti inventore eaque ducimus?
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
};

export default page;
