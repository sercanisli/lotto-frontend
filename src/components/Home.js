import React from 'react';
import '../styles/home.css';
import Grid from '@mui/material/Grid';
import { Typography, Box, Stack, CardContent, CardMedia} from '@mui/material';
import SayisalLotoLastItem from './SayisalLotoLastItem';
import SuperLotoLastItem from './SuperLotoLastItem';
import OnNumaraLastItem from './OnNumaraLastItem';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SansTopuLastItem from './SansTopuLastItem';
import WinningNumbers from './WinningNumbers';

function Home() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box>
      <Stack>
       <WinningNumbers />
      </Stack>
      <Grid container className='homeLottosContainer' spacing={2}>
          <Grid item xs={12} md={6}>
            <Item className=''>
              <SayisalLotoLastItem/>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item className=''><SuperLotoLastItem/></Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item className=''><OnNumaraLastItem/></Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item className=''><SansTopuLastItem/></Item>
          </Grid>
      </Grid>
    </Box>
  )
}

export default Home