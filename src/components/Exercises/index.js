
import React, { Fragment } from 'react'
import { Grid, Paper, AppBar, Button, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';
import ReactPlayer from 'react-player'

import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const styles = {
  Paper: {
    padding: 20,

    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    height: 500,
    overflowY: 'auto'
  }
}

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = 'Welcome to Blesst Chest',
    description = 'Please select a music on left',
    url = '',
    img = 'http://xrayrecords.org/img/b-chest-new.jpg'
  }
}) =>

  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group
              ? <Fragment key={group}>
                  <Typography
                    variant="headline"
                    style={{ textTransform: 'capitalize' }}
                  >
                    {group}
                  </Typography>
                  <List component="ul">
                    {exercises.map(({ id, title }) =>
                      <ListItem
                        key={id}
                        button
                        onClick={() => onSelect(id)}
                      >
                        <ListItemText primary={title} />
                      </ListItem>
                    )}
                  </List>
                </Fragment>
              : null

          )}
        </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography
          variant='h4'>
          {title}
        </Typography>

        <Typography
          variant='subheader'>
          {description}
        </Typography>
        <br></br>
<img src={img} alt="boohoo" className="img"/>
        <ReactPlayer url={url}playing />
      </Paper>
    </Grid>
  </Grid>
