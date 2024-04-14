import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import AdminSayisalLoto from './AdminSayisalLoto';

const CreateSayisalLoto = () => {
    const [adminSayisalLotoPage, setAdminSayisalLotoPage] = useState(false);
    const [arrowBackIcon, setArrowBackIcon] = useState(true);

    const handleClick = () => {
        setAdminSayisalLotoPage(true);
        setArrowBackIcon(false);
    }
  return (
    <Box>
        {
            arrowBackIcon ? (
                <IconButton onClick={handleClick}>
                    <ArrowBackIcon />
                </IconButton>
            ) : (
                <Box>
                </Box>
            )
        }
        {
            adminSayisalLotoPage ? (
                <AdminSayisalLoto />
            ) : (
                <Box>
                </Box>
            )
        }
    </Box>
  )
}

export default CreateSayisalLoto