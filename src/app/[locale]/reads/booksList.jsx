import React from "react";
import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
import CardBook from "../common/Cardsbooks";
import { Grid } from "@mui/material";

function createRandboBooks() {
  const randomBooks = {
    title: faker.lorem.words(),
    author: faker.person.fullName(),
    author_image: faker.image.avatar(),
    release_date: faker.date.recent(),
    image: faker.image.urlLoremFlickr(),
    price: faker.commerce.price(),
    short_description: faker.lorem.sentence(),
    long_description: faker.lorem.paragraph(),
  };
  return randomBooks;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const BooksList = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "0rem  0rem", md: "0rem  2rem" },
      }}
    >
      <Grid container justifyContent="center">
        {arr.map((item) => {
          return (
            <Grid
              key={item}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                width: "100%",
                height: "30vh",
                padding: "0.1rem",
              }}
            >
              <CardBook
                imageSrc={createRandboBooks().image}
                title={createRandboBooks().title}
                description={createRandboBooks().short_description}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default BooksList;
