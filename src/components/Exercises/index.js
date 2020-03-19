
import React, { Fragment } from 'react'
import { Grid, Paper, AppBar, Button, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';

import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';





const styles = {
  Paper: {
    padding: 20,

    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  }
}

export default ({ exercises }) =>

  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          <Fragment>
            <Typography
              variant="headline"
              style={{ textTransform: 'capitalize' }}
            >
              {group}
            </Typography>

            <List component="ul">
              {exercises.map(({ title }) =>
              <ListItem button component='a' href='#simple-list'>
                <ListItemText primary={title} />
              </ListItem>
            )}

            </List>
<hr></hr>
            </Fragment>
              )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography
          variant='subheader'>
          Welcome to Blesst Chest
        </Typography>
        <Typography
          variant='h4'>
          Please select a music
        </Typography>
      </Paper>
    </Grid>
  </Grid>
