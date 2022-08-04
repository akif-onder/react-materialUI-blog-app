import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import postImage from "../../utils/postimage.jpg";
import cardImage from '../../utils/parfumes.jpg'
import Card from "../card/Card";

const Rightbar = () => {
  return (
    <Box>
      <Typography align="center" bgcolor={"black"} color={"white"}>
        Most Popular Posts
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
      </List>
      <Divider variant="inset" component={'li'}/>
      <Typography align="center" bgcolor={"black"} color={"white"}>
        About Us
      </Typography>
      <Card cardImage={cardImage}/>
    </Box>
  );
};

export default Rightbar;
