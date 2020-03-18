import React from 'react';
import {AppBar, Button, ButtonGroup, Drawer, Toolbar, IconButoon, MenuIcon, Typography }from '@material-ui/core';




const Header = () => {

  return (

<div>
<AppBar position="static">
  <Toolbar>



    <Typography variant="h3" color='inherit' align='right'>
      Blesst Chest
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
</div>


  )


}

export default Header
