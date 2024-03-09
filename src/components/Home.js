import React from 'react';
import '../styles/home.css';
import Grid from '@mui/material/Grid';
import { Typography, CircularProgress, Stack} from '@mui/material';


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
          <Typography className='headlinesSayisalLoto' variant='h4'>Son Çekiliş</Typography>
          <Item className='lastItemSayisalLoto'><SayisalLotoLastItem lastSayisalLoto = {lastOne}/></Item>
        </Grid>
      </Stack>
    </Stack>
  )
}

export default Home