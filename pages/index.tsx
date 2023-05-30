import React from 'react';
import type { NextPage } from 'next'
import {
  Container,
  Typography,
  useTheme,
  Button,
  Box,
  Stack,
} from '@mui/material'

const Home: NextPage = () => {

  return (
    <>
      {/* Hero section */}
      <Box sx={{
        display: 'flex'
      }}>
        <Container
          sx={{
            pt: '30vh',
            // minHeight: '100vh',
            // mb: 12
            position: 'relative',
            zIndex: 2
          }}
        >
          <Box maxWidth="lg" sx={{ mx: 'auto' }}>
            <Typography
              variant="h1"
              sx={{ lineHeight: 0.8, fontWeight: 'bold', mb: 2 }}
              align="center"
            >
              Apps without limits
            </Typography>
            <Typography variant="h6" align="center" paragraph>
              We excel at taking complex ideas and making them simple and intuitive to use. 
            </Typography>
            <Stack
              sx={{ pt: 3 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href="/quote">Request Quote</Button>
            </Stack>

          </Box>
        </Container>
      </Box>
      {/* End hero section */}
    </>
  )
}

export default Home


