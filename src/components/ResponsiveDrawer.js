import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AdminSayisalLoto from './AdminSayisalLoto';
import AdminSuperLoto from './AdminSuperLoto';
import AdminOnNumara from './AdminOnNumara';

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const renderContent = () => {
    switch (selectedIndex) {
      case 0:
        return <AdminSayisalLoto />;
      case 1:
        return <AdminSuperLoto />;
      case 2:
        return <AdminOnNumara />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemText primary="Sayisal Loto" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemText primary="Super Loto" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemText primary="On Numara" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemText primary="Şans Topu" />
              </ListItemButton>
            </List>
            <Divider />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          {renderContent()}
        </Grid>
      </Grid>
    </Box>
  );
}
