import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Checkbox,
} from "@mui/material";
import { MoreVert, Share, Favorite, FavoriteBorder } from "@mui/icons-material";

const Post = () => {
  return (
    <>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Chicken and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://media.cnn.com/api/v1/images/stellar/prod/211006114703-best-meal-delivery-service-freshly.jpg?q=x_2,y_0,h_900,w_1599,c_crop/h_720,w_1280"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
