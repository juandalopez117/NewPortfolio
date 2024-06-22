import React from "react";
import { Box, Typography } from "@mui/material";
import CardReference from "./CardReference";

const users = [
  { name: "reference1", date: "date", comment: "lorem fdsf" },
  { name: "seference2", date: "date", comment: "lorem fdsf" },
];
const References = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        //height: "100vh",
        minHeight: "100vh",
        color: "black",
        padding: "2rem",
        position: "relative",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "unset",
        }}
      >
        References
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontFamily: "unset",
        }}
      >
        A little show of my work
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {users.map((user) => (
          <CardReference user={user} />
        ))}
      </Box>
    </Box>
  );
};

export default References;
