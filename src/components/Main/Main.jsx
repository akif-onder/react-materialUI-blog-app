import { Box, Typography } from "@mui/material";
import React from "react";
import Store from '../../utils/store.jpg';

const Main = () => {
  return (
    <Box>
      <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        Fashions<span style={{ color: "red" }}>Blog</span>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 900 }}>
        We make you look the better of you!
      </Typography>
      <Box sx={{
        backgroundImage:`url(${Store})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        backgroundPosition:'center',
        backgroundAttachment:'fixed',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        height: 600,
        width:'100%',
       

      }}>
        <Box sx={{width:{xs:'100%', sm: '70%', md:'40%'}, padding: {xs:3, sm:5, md: 10}}}>
        <Box sx={{background:"white", opacity: '0.8'}}>
            <Typography variant="h6" color={'tomato'} align='center' pt={8}>
                Trending Styles
            </Typography>
            <Typography variant="h4" align="center">
                Life is boring without fashion!
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
                We love to change your style.
            </Typography>
        </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Main;
