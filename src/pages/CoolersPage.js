import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Paper, Button, Stack, Skeleton } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import HomeBox from '../components/home/home-box';
import PublicCoolerRowCard from 'src/components/public-cooler/public-cooler-card';
import { fetchGroups, fetchPublicGroup } from 'src/redux/actions/group.action';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fCurrency } from '../utils/formatNumber';
import CoolerRowCard from 'src/components/coolers/cooler-row-card';
import { fetchUserData } from 'src/redux/actions/auth.action';

//placeholder image ofr coolers
import chase from 'src/assets/images/Group_Logo.png'

export default function CoolersPage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { allGroups, publicGroups, isLoading } = useSelector((state) => state.group);

  useEffect(() => {
    console.log("employer ID is:",user.employeerID)
    dispatch(fetchGroups(user.employeerID));
  }, [])
  
  useEffect(() => {
    dispatch(fetchUserData(user.id));
  }, [])

// console.log("All GROUPS: ", allGroups);
const allCoolerGroup = allGroups?.length ? (
  allGroups.map(group => {
    return (
      <CoolerRowCard 
      groupId={group.groupId}
      name={group.groupName} 
      feeInNum={group.amount}
      fee={fCurrency(group.amount)}
      accountBal={group.accountBalance}
      count={`${group.members.length} OF ${group.noOfSavers} SAVERS`}
      status={group.members.includes(user.id) ? "View" : "Join"}
      img={chase}
      members={group.members}
      isMember={group.members.includes(user.id)}
      startDate={group.startDate}
      />
    )
  })
) : 
<>
<div className="container">
      <center><p className="center">No cooler yet</p></center>
  </div>
</>


  return (
    <>
      <Helmet>
        <title> Coolers | Groups </title>
      </Helmet>
      <Container maxWidth="xl" style={{backgroundColor: '#609AF00F'}}>
      {/* <SearchBox style={{ width: '100%' }} /> */}
      <br/>
      <Grid  container direction="row" justifyContent="flex-end" alignItems="flex-end">
      <Button variant="contained" style={{backgroundColor: "#348AED", paddingTop: '10px', paddingBottom: '10px',  paddingRight: '30px', paddingLeft: '30px'}}>
      FILTER
    </Button>
    </Grid>
      <br/>
      {
        isLoading ?
        <Stack>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
        </Stack>
        :
        allCoolerGroup
      }
  </Container>
      
     
    </>
  );
}