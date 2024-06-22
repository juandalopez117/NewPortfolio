import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CardBook = ({ imageSrc, title, description }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%", // Ajusta el ancho según tus necesidades
        height: "100%", // Ajusta el alto según tus necesidades
        overflow: "hidden",
        color: "black",
        "&:hover .overlay": {
          top: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: "-100%",
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transition: "top 0.3s",
          padding: "1rem",
          textAlign: "left",
        }}
      >
        <Typography variant="h5" sx={{ color: "white", fontFamily: "unset" }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "white", fontFamily: "unset" }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardBook;
