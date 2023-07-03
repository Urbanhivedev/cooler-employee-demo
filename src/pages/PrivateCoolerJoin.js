import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
// import { Grid, Container, Typography, Paper, Button } from '@mui/material';
import { Button, TextField } from '@mui/material';
import {Box,Icon,Typography,CardMedia,CssBaseline,Grid,Container,FormControlLabel, Checkbox} from '@material-ui/core';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
// import CoolerBoxIMG from '../assets/images/cooler-box.png';
import CoolerBoxIMG from '../assets/images/save-money.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { notifyErrorFxn } from 'src/utils/toast-fxn';
import { joinPrivateGroup } from 'src/redux/actions/group.action';


export default function PrivateCoolerJoin() {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const location = useLocation();
    const [pin, setPin] = useState(null);
    const { user } = useSelector((state) => state.auth);
    const { isLoading } = useSelector((state) => state.group);
    const groupData = location.state?.groupData;

      
      const handleSubmit = (e) => {
        e.preventDefault();
        if(parseInt(pin) === parseInt(groupData.groupPin)){
          let today = new Date().toLocaleDateString()
         dispatch(joinPrivateGroup(groupData?.groupId, user, today, navigate));
        }else{
          notifyErrorFxn("Incorrect Pin")
        }
      }

  return (
    <>
      <Helmet>
        <title> Cooler | Join Private Cooler </title>
      </Helmet>

      <Container maxWidth="xl">
      <CssBaseline/> 

       {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
       <Grid container spacing={3}>
        <Grid item xs={3}>
        <Button variant="contained" style={{minHeight: '45px', minWidth: '55px', backgroundColor: '#348AED', }}
              onClick={() => {
                navigate(-1);
              }}>
                <ArrowBackIcon />
                Back
            </Button>
        </Grid>
      </Grid>
       <>
       <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
        <Grid item xs={6}>
        <CardMedia
       style={{border: '1px solid black', backgroundColor: '#fff', paddingLeft: '30px', paddingRight: '30px'}}
        component="img"
        height="250"
        image={groupData?.img ? groupData.img : CoolerBoxIMG}
        alt="Paella dish"
      />

           <Grid item xs container direction="column" spacing={0} justifyContent="center" alignItems="center">
                <Grid item xs>
                  <div style={{display: 'flex', border: '0px solid red', marginBottom: '-20px'}}>
                  <h2 style={{ fontSize: '19px'}}><b>NAME: </b></h2>
                    &nbsp; &nbsp;
                  <p style={{ fontSize: '17px'}}>{groupData?.name.toUpperCase()}</p>
                  </div>
                  <div style={{display: 'flex', marginBottom: '-20px'}}>
                  <h2 style={{ fontSize: '19px'}}><b>FEE: </b></h2>
                    &nbsp; &nbsp;
                  <p style={{ fontSize: '17px'}}>{groupData?.fee}</p>
                  </div>
                  
                  <div style={{display: 'flex', marginBottom: '-10px' }}>
                  <h2 style={{ fontSize: '19px'}}><b>COUNT: </b></h2>
                    &nbsp; &nbsp;
                  <p style={{ fontSize: '17px'}}>{groupData?.count}</p>
                  </div>

                  <div style={{display: 'flex' }}>
                  <h2 style={{ fontSize: '19px'}}><b>START: </b></h2>
                    &nbsp; &nbsp;
                  <p style={{ fontSize: '17px'}}>{groupData?.startDate}</p>
                  </div>

                  <div style={{display: 'flex' }}>
                  <h2 style={{ fontSize: '19px'}}><b>PIN: </b></h2>
                    &nbsp; &nbsp;
                  <TextField
                    required
                    id="outlined-number"
                    label="-"
                    type="number"
                    variant="outlined"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{border: '1px solid black'}}
                  />
                  </div>
                </Grid>
                <br/>
                <div style={{border: '1px solid grey', width: '100%'}}></div>
                <br/>
                 <Button disabled={isLoading} type="submit" variant="contained" style={{minHeight: '45px', minWidth: '145px', backgroundColor: '#348AED', }}>
                    <b>{isLoading ? "Loading..." : "SUBMIT"}</b> 
                </Button>
              </Grid>
      
    </Grid>
      </Grid>
      </form>
    </>
      </Container>
    </>
  );
}
