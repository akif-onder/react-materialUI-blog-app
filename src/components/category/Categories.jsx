import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Kids from "../../utils/kids.jpg";
import Men from "../../utils/mens.jpg";
import Women from "../../utils/womens.jpg";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
});

const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  backgroundColor: "white",
  opacity: 0.8,
  // textAlign:'center',
});

const Categories = () => {
  return (
    <Box>
      <Stack direction={{xs:"column", sm: 'row'}} spacing={4} mt={5}>
        <StyledBox sx={{ backgroundImage: `url(${Kids})` }}>
          <StyledTypography variant="h3" align="center">
            Kids
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${Men})` }}>
          <StyledTypography variant="h3" align="center">
            Men
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${Women})` }}>
          <StyledTypography variant="h3" align="center">
            Women
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
