"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardReference({ user }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card
      sx={{
        maxWidth: 500,
        boxShadow: 0,
        border: "1px solid gray",
        borderRadius: 0,
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#20201F" }} aria-label="recipe">
            {user.name[0].toUpperCase()}
          </Avatar>
        }
        title={user.name}
        subheader={user.date}
      />
      <CardMedia
        component="img"
        height="194"
        image="/avatar.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          quis quasi officia, deserunt illo eos obcaecati, sunt quaerat dolorum
          ab asperiores? Autem dicta distinctio repellat nam commodi assumenda
          eligendi ullam.
        </Typography>
      </CardContent>
    </Card>
  );
}
