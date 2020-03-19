import React from 'react';
import {AppBar, Button, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';


const Header = () => {

  return (

<div>
  <AppBar position="static">
    <Toolbar>

      <Typography variant="h3" color='inherit' align='right'>
        IBCDB
      </Typography>



      <Button color="inherit">Internet Blesst Chest Database</Button>

    </Toolbar>
  </AppBar>
</div>

  )
}

export default Header
