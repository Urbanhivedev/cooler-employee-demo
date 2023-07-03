import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Paper, Button } from '@mui/material';
import MyCoolerRowCard from 'src/components/my-cooler/mycooler-row-card';



export default function CoolerMembers() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Cooler | My-Coolers </title>
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
          <MyCoolerRowCard 
          name={"PAUL JONES"} 
          email={"paul.jones@target.com"} 
          joined={"01.01.2023"}
          status={"Paid"}
          />
          <MyCoolerRowCard 
          name={"PATRICIA SMITH"} 
          email={"patricia.smith@target.com"} 
          joined={"01.01.2023"}
          status={"Paid"}
          />
          <MyCoolerRowCard 
          name={"LARRY WILLIAMS"} 
          email={"larry.williams@target.com"} 
          joined={"01.01.2023"}
          status={"Not Paid"}
          />
      </Container>
    </>
  );
}