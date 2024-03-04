import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useFetchSansTopuQuery } from '../store/apis/sansTopuApi';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
import axios from 'axios';
import { Typography, CircularProgress} from '@mui/material';
import SansTopuGetRandom from './SansTopuGetRandom';
import SansTopuLastItem from './SansTopuLastItem';
import SansTopuItem from './SansTopuItem';



function SansTopu() {

  const [lastOne, setLastOne] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1);


  const handlePageChange = (event, page) => {
    setSelectedPage(page);
  };

  useEffect(() => {
    axios.get(`https://localhost:7135/api/sanstopu?pageSize=${page.pageSize}&pageNumber=${page.pageNumber}`, {
        headers: {
            'Accept':'application/json'
        }
    })
      .then(response => {
        const lastOneData = response.data[0];
        setLastOne(lastOneData);
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

  const {data, isError, isFetching} = useFetchSansTopuQuery(page);
        if(isFetching || data  === undefined){
            return (
              <CircularProgress className='spinnerSansTopu' />
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
            <Grid className='containerSansTopu' container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography className='headlinesSansTopu' variant='h4'>Kazandıracak Numaralar</Typography>
                    <Item><SansTopuGetRandom /></Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography className='headlinesSansTopu' variant='h4'>Son Çekiliş</Typography>
                    <Item className='lastItemSayisalLoto'><SansTopuLastItem lastSayisalLoto = {lastOne}/></Item>
                </Grid>
                <Grid item xs={12} md={12} >
                    <Typography className='headlinesSansTopu' variant='h5'>Tüm Çekilişler</Typography>
                    <Pagination className='paginateSansTopu' count={totalPage} color="primary" page={selectedPage}  onChange={handlePageChange}/>
                    <Item className='itemsSansTopu'  >
                        {
                            data.map((sanstopu) => {
                                return <SansTopuItem key={sanstopu.id} sanstopu = {sanstopu} />
                            })
                        }
                    </Item>
                </Grid>
            </Grid>
        </Box>
  )
}
  
export default SansTopu