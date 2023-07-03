import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Iconify from '../components/iconify';

import Piggy from '../assets/images/piggy2.jpg';
import Money from '../assets/images/money.jpg';
import LoginForm from 'src/components/login/LoginForm';
import CoolerEntryIMG from '../assets/images/cooler-entry.jpg';
import RegisterForm from 'src/components/register/RegisterForm';

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));



export default function RegisterPage() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Register | Cooler Web </title>
      </Helmet>

      <StyledRoot>

        
      {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              <span className='wave' style={{color: '#348AED'}}>*Cooler*</span> your guaranteed back up plan
            </Typography>
            <img src={CoolerEntryIMG} alt="login" />
            {/* <img src="/assets/illustrations/illustration_login.png" alt="login" /> */}
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Register on Cooler(<span style={{color: '#348AED'}}>Employee</span>)
            </Typography>

            <RegisterForm />
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Already have an account? {''}
              <Link href='/login' variant="subtitle2">Login</Link>
            </Typography>
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
