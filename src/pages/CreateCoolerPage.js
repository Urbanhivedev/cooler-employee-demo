import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
// import { Grid, Container, Typography, Paper, Button } from '@mui/material';
import { Button, TextField } from '@mui/material';
import {Box,Icon,Typography,CardMedia,CssBaseline,Grid,Container,FormControlLabel, Checkbox, makeStyles} from '@material-ui/core';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
// import CoolerBoxIMG from '../assets/images/cooler-box.png';
import CoolerBoxIMG from '../assets/images/save-money.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { notifyErrorFxn } from 'src/utils/toast-fxn';
import { uploadImage } from 'src/redux/actions/auth.action';
import { uploadGroupImage } from 'src/redux/actions/group.action';


const useStyles = makeStyles((theme) => ({
  textField: {
  padding: '8px',
   border: '0px solid grey',
  },
  paper: {
    display: "flex",
    width: "auto",
  },
  grid: {
    width: "auto",
  },
  arrow: {
    padding: theme.spacing(3),
  },
  box: {
  //   padding: theme.spacing(3),
    paddingLeft: theme.spacing(8),
  },
}));

export default function CreateCoolerPage() {
  const classes = useStyles();
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useSelector((state) => state.auth);
    let today = new Date().toISOString().slice(0, 10);
    const type = location?.state?.type;
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState({selectedFile: [], selectedFileName: []});
    const [file, setFile] = useState();
     const [state, setState] = useState({
      groupName: "",
      noOfSavers: "",
      pin: "",
      startDate: "",
      amount: "",
      status: type,
      imageUrl: "",
    })

    const handleChange = (e) => {
      const value = e.target.value;
      setState({
        ...state,
        [e.target.name]: value
      });
    }

    const handleselectedFile = event => {
      setSelectedFile({
          selectedFile: event.target.files[0],
          selectedFileName: event.target.files[0].name
      });
      setFile(URL.createObjectURL(event.target.files[0]));
  };

    const createGroup = (e) => {
      e.preventDefault();
      if(selectedFile.selectedFile.length == 0){
        notifyErrorFxn("You have not uploaded Cooler Image");
        return;
      }
      setLoading(true);
      const id = user.id;
      const name = user.firstName + " " + user.lastName;
      const email = user.email;
      const profileImg = user.imageUrl;
      const userData = {id, name, email, profileImg};
      dispatch(uploadGroupImage(state,selectedFile.selectedFile, userData, navigate, setLoading));
    }
   
  return (
    <>
      <Helmet>
        <title> Cooler | Create Cooler </title>
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
       <form onSubmit={createGroup}>
        <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
        <Grid item xs={6}>
        <center>
        <Typography variant="h4">
         <b>SPACE SAVER</b>
        </Typography>
        </center>
        <br/>
      <CardMedia
       style={{border: '1px solid black', backgroundColor: '#fff', paddingLeft: '30px', paddingRight: '30px'}}
        component="img"
        height="250"
        image={file ? file : CoolerBoxIMG}
        alt="IMG"
      />
          <center>
          <Button component="label" variant="contained" style={{minHeight: '45px', minWidth: '145px', backgroundColor: '#348AED', marginTop: '15px' }}>
            <b>UPLOAD</b>
            <input
            type="file"
            style={{ display: 'none' }}
            onChange={handleselectedFile}
            />
          </Button>
          </center>

              <br/>      
    </Grid>
       

      </Grid>

      <Grid item xs container direction="column" spacing={6} style={{paddingLeft: '100px', paddingRight: '100px'}}>
                <Grid item xs>
                  <div style={{display: 'flex', marginBottom: '-20px'}}>
                  <h2 style={{ fontSize: '19px', width: '40%'}}><b>COOLER NAME: </b></h2>
                    &nbsp; &nbsp;
                    <TextField id="outlined-basic" fullWidth label="Enter Cooler Name" variant="outlined" 
                    required
                    name="groupName"
                    value={state.groupName}
                    onChange={handleChange}
                    />
                  </div>
                  <br/><br/>
                  <div style={{display: 'flex'}}>
                  <h2 style={{ fontSize: '19px', width: '10%', border: '0px solid red'}}><b>FEE: </b></h2>
                    &nbsp; &nbsp;
                    <TextField id="outlined-basic" style={{width: '30%'}} label="Enter Fee ($)" variant="outlined" 
                    required
                    type="number"
                    name="amount"
                     value={state.amount}
                     onChange={handleChange}
                    />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <h2 style={{ fontSize: '19px', width: '10%', border: '0px solid red'}}><b>START: </b></h2>
                    &nbsp; &nbsp;
                    <TextField
                    required
                    className={classes.textField}
                    name="startDate"
                    value={state.startDate}
                    onChange={handleChange}
                    id="date"
                    label=""
                    type="date"
                    defaultValue={today}
                    sx={{ width: 220, fontSize: '20px' }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                  </div>
                  <br/>
                  <div style={{display: 'flex'}}>
                  <h2 style={{ fontSize: '19px', width: '10%', border: '0px solid red'}}><b>COUNT: </b></h2>
                    &nbsp; &nbsp;
                    <TextField id="outlined-basic" style={{width: '30%'}} label="Enter Count" variant="outlined" 
                    required
                    type="number"
                    name="noOfSavers"
                    value={state.noOfSavers}
                    onChange={handleChange}
                    />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  {type === "PRIVATE" && (
                  <>
                    <h2 style={{ fontSize: '19px', width: '10%', border: '0px solid red'}}><b>PIN: </b></h2>
                    &nbsp; &nbsp;
                    <TextField
                    required
                    id="outlined-number"
                    label="Enter Pin"
                    type="number"
                    variant="outlined"
                    name="pin"
                    value={state.pin}
                    onChange={handleChange}
                  />
                  </>
                  )}
                  </div>

                 
                </Grid>
                <div style={{border: '1px solid grey', width: '100%'}}></div>
                <br/>
                 <center>
                 <Button type="submit" disabled={loading} variant="contained" style={{minHeight: '45px', maxWidth: '100px', backgroundColor: '#348AED'}}
                 >
                    <b>{loading ? "Loading..." : "SUBMIT"}</b> 
                </Button>
                 </center>
              </Grid>
            </form>
    </>
      </Container>
    </>
  );
}
