import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Paper } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import HomeBox from '../components/home/home-box';




export default function HomePage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> MDLiaison | Company Panel </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={2}>
            <Grid item xs={12} md={8} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                  border: '1px solid black'
                }}
              >
                <HomeBox type={'JOBS'} BoxIcon={WorkOutlineIcon} />
              </Paper>
            </Grid>

             <Grid item xs={12} md={8} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                  border: '1px solid black'
                }}
              >
                <HomeBox type={'PROFILE'}  BoxIcon={AccountCircleIcon}/>
              </Paper>
            </Grid>
             <Grid item xs={12} md={8} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                  border: '1px solid black'
                }}
              >
                <HomeBox type={'INBOX'}  BoxIcon={MoveToInboxIcon}/>
              </Paper>
            </Grid>
             <Grid item xs={12} md={8} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                  border: '1px solid black'
                }}
              >
                <HomeBox type={'TRAINING'}  BoxIcon={ModelTrainingIcon}/>
              </Paper>
            </Grid>
          </Grid>
      </Container>
    </>
  );
}
