import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Categories from '../category/Categories'
import Main from '../Main/Main'
import Recents from '../recents/Recents'
import Rightbar from '../rightbar/Rightbar'

const Home = () => {
  return (
    <Box>
        <Main/>
        <Container>
            <Categories/>
            <hr/>
        <Stack direction={'row'} spacing={8} mt={8 } >
            <Box flex={3} sx={{padding:'18px 100px 100px 100px'}}>
                <Recents/>
            </Box>
            <Box flex={1}>
                <Rightbar/>
            </Box>
        </Stack>
        </Container>
    </Box>
  )
}

export default Home