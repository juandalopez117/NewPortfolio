import { Box, Button, Typography } from "@mui/material";
import React from "react";

const CardWrite = ({ date, title, Datacast, description }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "Left",
        color: "black",
        gap: "0.5rem",
        padding: "1rem 4rem",
      }}
    >
      <Typography
        sx={{
          fontFamily: "unset",
          fontSize: "1.1rem",
          color: "gray",
        }}
      >
        {date}
      </Typography>

      <Typography
        sx={{
          fontFamily: "unset",
          fontSize: "1.3rem",
          color: "black",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontFamily: "unset",
          fontSize: "1.2rem",
          color: "gray",
        }}
      >
        {Datacast}
      </Typography>

      <Typography
        sx={{
          fontFamily: "unset",
          fontSize: "1.2rem",
          color: "black",
        }}
      >
        {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Autem blanditiis ipsa dolore quo delectus dolor eveniet eligendi eos ut
        aperiam voluptatum deserunt perferendis cum expedita inventore facilis,
        consequatur temporibus iure?
      </Typography>

      <Button
        sx={{
          width: "fit-content",
          fontFamily: "unset",
          fontSize: "1.2rem",
          color: "black",
          borderRadius: 0,
          bgcolor: "#9b9b9b",
          textTransform: "none",
          "&:hover": {
            bgcolor: "#9b9b9b",
          },
        }}
      >
        Read More
      </Button>
    </Box>
  );
};

export default CardWrite;
