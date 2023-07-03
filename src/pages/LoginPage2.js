import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { Container, Chip, Typography, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from 'src/redux/actions/auth.action';

import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, CssBaseline, TextField, Grid, Button} from '@mui/material';
// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const header = {
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '29px',
  lineHeight: '30.4px',
  color: 'black',
  marginLeft: '5%'
};

const mystyle = {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '21px',
    lineHeight: '24.8px',
    color: 'black'
  };

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); 

  const userSignin = (e) => {
    e.preventDefault();
    setLoading(true);
    const user = { email, password };
    dispatch(signin(user, navigate, setLoading));
  }


  return (
    <>
      <Helmet>
        <title> Login | Cooler Web </title>
      </Helmet>

      <StyledRoot>
      <Container component="main" maxWidth="lg" style={{border: '0px solid red' }}>
        <div style={{marginLeft: '20%'}}>
        <CssBaseline /><br/><br/>
        <div style={{marginLeft: '20%'}}>
        <p style={header}>EMPLOYEE LOGIN</p>
        </div>
        <Box
          sx={{
            marginTop: 8,
            marginLeft: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center",
            border: "0px solid green",
          }}
        >
          <Box>
          <form component="form" onSubmit={userSignin} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={10} sm={3.5} sx={{mt: -1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>EMAIL:</p>
              </Grid>
              <Grid item xs={12} sm={8} style={{border: '0px solid red'}}>
                <TextField
                  variant="standard"
                  type="email"
                  style={{border: '1px solid black', width: 380, height: 45,  padding: 2}}
                  required
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={email}    
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={10} sm={3.5} sx={{mt: -1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>PASSWORD:</p>
              </Grid>
              <Grid item xs={12} sm={8} style={{border: '0px solid red'}}>
                <TextField
                  variant="standard"
                  type="password"
                  style={{border: '1px solid black', width: 380, height: 45,  padding: 2}}
                  required
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={password}    
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>

            </Grid>
            <Divider style={{color: 'black'}}>
              <Chip label="......" />
            </Divider>
            <center>
            <Grid item xs={10} sm={2.5} sx={{mr: 5}} style={{border: '0px solid red'}}>
             <Button
              type="submit"
              disabled={loading}
              // fullWidth
              variant="contained"
              style={{backgroundColor: '#348AED', color: 'white', height:"50px",   fontSize:"15px"}}
              sx={{ mt: 3, mb: 2 }}
              // onClick={() => {
                
              // }}
            >
              {loading ? "Loading..." : "SUBMIT"}
            </Button>
            </Grid>
            </center>
            </form>
          </Box>
        </Box>
        </div>
      </Container>
      </StyledRoot>
    </>
  );
}
