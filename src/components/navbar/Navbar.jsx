import {
  Facebook,
  Instagram,
  Menu as MenuIcon,
  Twitter,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Grid,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";


// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });

  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Products", Link: "#" },
    { Name: "Portfolio", Link: "#" },
    { Name: "Blog", Link: "#" },
    { Name: "Contact Us", Link: "#" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <AppBar sx={{ background: "black" }}>
      <StyledToolbar>
        <SocialBox>
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialBox>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
              {item.Name}
            </Typography>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase placeholder="Search..." sx={{ color: "white" }} />
          <MenuIcon
            sx={{
              color: "white",
              display: { xs: "block", sm: "block", md: "none" },
            }}
            onClick={()=>setOpen(!open)}
          />
        </SearchBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>setOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Grid>
          {MenuItems.map((item) => (
            <MenuItem
              sx={{
                cursor: "pointer",
                fontSize: "14px",
                background: "lightblue",
                mb: "2px",
              }}
            >
              {item.Name}
            </MenuItem>
          ))}
        </Grid>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
