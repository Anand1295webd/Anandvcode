import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { makeStyles } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TvIcon from '@mui/icons-material/Tv';
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyles= makeStyles({
    root:{
        width:100,
        position:"fixed",
        bottom:0,
        backgroundcolor:"#2d313a",
        zIndex:100
    },
    
});

export default function SimpleBottomNavigation() {
    const classes=useStyles();

  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        //showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="trending" icon={<WhatshotIcon/>} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<TvIcon/>} />
      </BottomNavigation>
    </Box>
  );
}
