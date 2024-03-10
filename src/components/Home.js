import React from 'react';
import '../styles/home.css';
import Grid from '@mui/material/Grid';
import { Typography, CircularProgress, Stack} from '@mui/material';
import SayisalLotoLastItem from './SayisalLotoLastItem';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function Home() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Stack>
      <Stack>
        Kazandıracak Numaralar Açıklaması
      </Stack>
      <Stack>
        <Grid item xs={12} md={6}>
          <Item className=''><SayisalLotoLastItem/></Item>
        </Grid>
      </Stack>
    </Stack>
  )
}

export default Home