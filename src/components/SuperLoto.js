import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SuperLotoGetRandom from './SuperLotoGetRandom';
import SuperLotoItem from './SuperLotoItem';


function SuperLoto() {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      
  return (
        <Box >
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Item><SuperLotoGetRandom/></Item>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Item>
                        <SuperLotoItem />
                    </Item>
                </Grid>
            </Grid>
        </Box>
  )
}

export default SuperLoto