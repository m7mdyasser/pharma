import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

function AboutUs() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulated data
  const simulatedData = {
    companyName: 'PharmaPro',
    description: 'We are a licensed online pharmacy dedicated to providing convenient and affordable access to a wide range of medications. We believe everyone deserves easy access to healthcare, and our streamlined online platform makes it simple to refill prescriptions, explore medication options, and learn more about your health.',
  };

  useEffect(() => {
    // Simulate data fetching delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <a href="#about" style={{ textDecoration: 'none' }}>
                <Button variant="contained" style={{ backgroundColor: 'blue', color: 'white' }}>
                  About Us
                </Button>
              </a>
            </Grid>
            <Grid item>
              <a href="#ourteam" style={{ textDecoration: 'none' }}>
                <Button variant="contained" style={{ backgroundColor: 'blue', color: 'white' }}>
                  Our Team
                </Button>
              </a>
            </Grid>
            <Grid item>
              <a href="#life" style={{ textDecoration: 'none' }}>
                <Button variant="contained" style={{ backgroundColor: 'blue', color: 'white' }}>
                  Life At PharmaPro
                </Button>
              </a>
            </Grid>
            <Grid item>
              <a href="#careers" style={{ textDecoration: 'none' }}>
                <Button variant="contained" style={{ backgroundColor: 'blue', color: 'white' }}>
                  Careers
                </Button>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4" style={{ color: 'blue', textAlign: 'center' }}>About Us</Typography>
            </Grid>
            {loading ? (
              <Grid item>
                <CircularProgress />
              </Grid>
            ) : (
              <>
                <Grid item>
                  <Typography variant="h4" style={{ color: 'blue', textAlign: 'center' }}>{simulatedData.companyName}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" style={{ textAlign: 'center' }}>{simulatedData.description}</Typography>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutUs;
