import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
});

const Footer = () => {
  return (
    <Box sx={{ background: "black", height: "300px" }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={10}
        padding={8}
      >
        <Box>
          <Typography
            variant="h5"
            marginBottom={1}
            color={"white"}
            align="center"
          >
            fashions<span style={{ color: "red" }}>Blog</span>
          </Typography>
          <Typography marginBottom={1} color={"white"} align="center">
            Copyright © 2022 Akif
          </Typography>
          <Typography marginBottom={3} color={"white"} align="center">
            All Rights Reserved
          </Typography>
          <Typography marginBottom={1} color={"white"} align="center">
            <SocialBox sx={{ display: "flex", justifyContent: "space-around" }}>
              <Facebook sx={{cursor: 'pointer'}}/>
              <Instagram sx={{cursor: 'pointer'}} />
              <Twitter sx={{cursor: 'pointer'}} />
            </SocialBox>
          </Typography>
        </Box>
        <Box>
          <Typography
            fontWeight={900}
            marginBottom={1}
            color={"white"}
            align="center"
          >
            Company
          </Typography>
          <Typography marginBottom={1} color={"white"} align="center">
            Blog
          </Typography>
          <Typography marginBottom={1} color={"white"} align="center">
            About Us
          </Typography>
          <Typography marginBottom={1} color={"white"} align="center">
            Contact Us
          </Typography>
        </Box>
        <Box>
          <Typography
            fontWeight={900}
            marginBottom={1}
            color={"white"}
            align="center"
          >
            Categories
          </Typography>
          <Typography marginBottom={1} color={"white"} align="center">
            Kids
          </Typography>
          <Typography marginBottom={1} color={"white"} align="center">
            Men
          </Typography>
          <Typography marginBottom={1} color={"white"} align="center">
            Women
          </Typography>
        </Box>
        <Box>
          <Typography
            fontWeight={900}
            marginBottom={1}
            color={"white"}
            align="center"
          >
            Support
          </Typography>
          <Typography marginBottom={1} color={"white"} align="center">
            Legal Policy
          </Typography>
          <Typography marginBottom={1} color={"white"} align="center">
            Privacy Policy
          </Typography>
          <Typography marginBottom={1} color={"white"} align="center">
            Terms of Services
          </Typography>
        </Box>
      </Stack>
      
    </Box>
  );
};

export default Footer;
