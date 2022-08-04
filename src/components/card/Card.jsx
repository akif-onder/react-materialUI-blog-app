import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Card = ({cardImage}) => {
  return (
    <Box>
         <CardMedia
            component="img"
            height="100%"
            image={cardImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              align="center"
              component="div"
              color={"tomato"}
            >
              PERFUMES
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              align="center"
              component="div"
            >
              Wearing this will make everyone love you.
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              align="center"
              component="div"
              color={"text.secondary"}
            >
              It's women love.
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              align="center"
              component="div"
              color={"text.secondary"}
            ></Typography>
          </CardContent>
    </Box>
  )
}

export default Card