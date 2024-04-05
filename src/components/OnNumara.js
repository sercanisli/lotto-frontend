import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useFetchOnNumaraQuery } from '../store/apis/onNumaraApi';
import '../styles/onNumara.css';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
import axios from 'axios';
import { Typography, CircularProgress} from '@mui/material';
import OnNumaraGetRandom from './OnNumaraGetRandom';
import OnNumaraLastItem from './OnNumaraLastItem';
import OnNumaraItem from './OnNumaraItem';

function OnNumara() {

  const [totalPage, setTotalPage] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageChange = (event, page) => {
    setSelectedPage(page);
  };

  useEffect(() => {
    axios.get(`https://localhost:7135/api/onnumara/GetAllNumbersArrayForOnNumaraAsync/?pageSize=${page.pageSize}&pageNumber=${page.pageNumber}`, {
        headers: {
            'Accept':'application/json'
        }
    })
      .then(response => {
        const xPaginationHeader = response.headers['x-pagination'];
        const xPaginationData = JSON.parse(xPaginationHeader);
        const totalPage = xPaginationData.TotalPage;
        setTotalPage(totalPage);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const page = {
    pageSize:10,
    pageNumber:selectedPage
  }

  console.log(totalPage);


  const {data, isError, isFetching} = useFetchOnNumaraQuery(page);
        if(isFetching || data  === undefined){
            return (
              <Box  style={{ width: '100%', height: '100vh' }} >
                <CircularProgress className='spinnerOnNumara' />
              </Box>
            )
        }
    console.log(data);
    

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


  return (
    <Box >
            <Grid className='containerOnNumara' container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography className='headlinesOnNumara' variant='h4'>Kazandıracak Numaralar</Typography>
                    <Item className='lastItemOnNumara'><OnNumaraGetRandom /></Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography className='headlinesOnNumara' variant='h4'>Son Çekiliş</Typography>
                    <Item className='lastItemOnNumara'><OnNumaraLastItem/></Item>
                </Grid>
                <Grid item xs={12} md={12} >
                    <Typography className='headlinesOnNumara' variant='h5'>Tüm Çekilişler</Typography>
                    <Pagination className='paginateOnNumara' count={totalPage} color="primary" page={selectedPage}  onChange={handlePageChange}/>
                    <Item className='itemsOnNumara'  >
                        {
                            data.map((onNumara) => {
                                return <OnNumaraItem key={onNumara.id} onNumara = {onNumara} />
                            })
                        }
                    </Item>
                </Grid>
            </Grid>
        </Box>
  )
}

export default OnNumara