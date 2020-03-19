import React from 'react';
import {AppBar, Button, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';

import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const Header = () => {

  return (

<div>
  <AppBar position="static">
    <Toolbar>

      <Typography variant="h3" color='inherit' align='right'>
        Blesst Chest
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
  <ListItem button>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="Inbox" />
  </ListItem>
  <ListItem button>
    <ListItemIcon>
      <DraftsIcon />
    </ListItemIcon>
    <ListItemText primary="Drafts" />
  </ListItem>
</List>
<Divider />
<List component="nav" aria-label="secondary mailbox folders">
  <ListItem button>
    <ListItemText primary="Trash" />
  </ListItem>

    <ListItemText primary="Spam" />

</List>


      <Button color="inherit">Login</Button>

    </Toolbar>
  </AppBar>
</div>

  )
}

export default Header
