import React from 'react'
import './App.css'

import {
  TextField,
  Typography,
  Box,
  Container,
  Card,
  CardActions,
  CardContent,
  Grid,
} from '@mui/material'

function App() {
  return (
    <Box sx={{ bgcolor: '#262626', height: '100vh' }}>
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <Box component="header" sx={{ display: 'flex', paddingY: '.75rem' }} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: '0%',
            paddingY: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{ bgcolor: '#333333', maxWidth: 800, width: '100%', mb: 2 }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 18, fontWeight: 500, mb: 0 }}
                color="#E4E4E7"
                gutterBottom
              >
                Auto Parse Address
              </Typography>
              <Typography sx={{ fontSize: 12, mb: 2 }} color="#D4D4D8">
                This form pulls address from Google Places database and
                populates an address form with them.
              </Typography>
              <TextField
                id="search"
                label="Enter Location"
                placeholder="City, Street, Address.."
                variant="filled"
                fullWidth
                InputLabelProps={{ style: { color: 'white' } }}
                inputProps={{
                  style: { color: 'white' },
                  className: {
                    '& :-webkit-autofill': {
                      transitionDelay: '9999s',
                    },
                  },
                }}
              />
            </CardContent>
            <CardActions />
          </Card>
          <Card
            sx={{ bgcolor: '#333333', maxWidth: 800, width: '100%', mb: 2 }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    id="search"
                    label="Street Number"
                    defaultValue="8A"
                    variant="filled"
                    fullWidth
                    InputLabelProps={{ style: { color: 'white' } }}
                    inputProps={{
                      readOnly: true,
                      style: { color: 'white' },
                      className: {
                        '-webkit-text-fill-color': {
                          color: 'white',
                        },
                        '& :-webkit-autofill': {
                          transitionDelay: '9999s',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="search"
                    label="Street Address"
                    defaultValue="Koojie Street"
                    variant="filled"
                    fullWidth
                    InputLabelProps={{ style: { color: 'white' } }}
                    inputProps={{
                      readOnly: true,
                      style: { color: 'white' },
                      className: {
                        '-webkit-text-fill-color': {
                          color: 'white',
                        },
                        '& :-webkit-autofill': {
                          transitionDelay: '9999s',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="City"
                    defaultValue="Batu Gajah"
                    variant="filled"
                    fullWidth
                    InputLabelProps={{ style: { color: 'white' } }}
                    inputProps={{
                      readOnly: true,
                      style: { color: 'white' },
                      className: {
                        '-webkit-text-fill-color': {
                          color: 'white',
                        },
                        '& :-webkit-autofill': {
                          transitionDelay: '9999s',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    id="search"
                    label="State / Province"
                    defaultValue="1"
                    variant="filled"
                    fullWidth
                    InputLabelProps={{ style: { color: 'white' } }}
                    inputProps={{
                      readOnly: true,
                      style: { color: 'white' },
                      className: {
                        '-webkit-text-fill-color': {
                          color: 'white',
                        },
                        '& :-webkit-autofill': {
                          transitionDelay: '9999s',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    id="search"
                    label="Zipcode / Postcode"
                    defaultValue="35000"
                    variant="filled"
                    fullWidth
                    InputLabelProps={{ style: { color: 'white' } }}
                    inputProps={{
                      readOnly: true,
                      style: { color: 'white' },
                      className: {
                        '-webkit-text-fill-color': {
                          color: 'white',
                        },
                        '& :-webkit-autofill': {
                          transitionDelay: '9999s',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Country"
                    defaultValue="Malaysia"
                    variant="filled"
                    fullWidth
                    InputLabelProps={{ style: { color: 'white' } }}
                    inputProps={{
                      readOnly: true,
                      style: { color: 'white' },
                      className: {
                        '-webkit-text-fill-color': {
                          color: 'white',
                        },
                        '& :-webkit-autofill': {
                          transitionDelay: '9999s',
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Box component="footer" sx={{ paddingY: '.5rem' }}>
          <Typography
            gutterBottom
            style={{
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              fontSize: 12,
            }}
          >
            made and built with ♡ by uzairzahari
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default App
