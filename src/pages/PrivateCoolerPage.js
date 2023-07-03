import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Paper, Button, Stack, Skeleton } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import HomeBox from '../components/home/home-box';
import PrivateCoolerRowCard from 'src/components/private-cooler/private-cooler-card';
import { fetchPrivateGroup, fetchPublicGroup } from 'src/redux/actions/group.action';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fCurrency } from '../utils/formatNumber';




export default function PrivateCoolerPage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { privateGroups, isLoading } = useSelector((state) => state.group);

  useEffect(() => {
    dispatch(fetchPrivateGroup());
  }, [])


console.log("PRIVATE GROUPS: ", privateGroups);
const privateCoolerGroup = privateGroups?.length ? (
  privateGroups.map(group => {
    return (
      <PrivateCoolerRowCard 
      groupId={group.groupId}
      groupPin={group.pin}
      name={group.groupName} 
      fee={fCurrency(group.amount)}
      count={`${group.members.length} OF ${group.noOfSavers} SAVERS`}
      status={"Join"}
      img={group.imageUrl}
      isMember={group.members.includes(user.id)}
      startDate={group.startDate}
      />

    )
  })
) : 
<>
<div className="container">
      <center><p className="center">No private cooler yet</p></center>
  </div>
</>


  return (
    <>
      <Helmet>
        <title> Cooler | Private-Coolers </title>
      </Helmet>
      <Container maxWidth="xl">
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
        privateCoolerGroup
      }
  </Container>
      
     
    </>
  );
}