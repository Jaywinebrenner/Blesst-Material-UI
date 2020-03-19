import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';


const styles = {

  Paper: {padding: 20, marginTop: 10, marginBottom: 10}
}


export default ({ exercises }) =>

<div>
<Grid container sm={12}>
 <Grid  item sm={6}>
   <Paper style={styles.Paper}>
   {exercises.map(([group, exercises]) =>
     <Typography
       variant="h4"
       style={{textTranform: 'capitalize'}}
       >
       {group}
      </Typography>
   )}
   </Paper>
 </Grid>



  <Grid item sm={6}>
    <Paper style={styles.Paper}>
    Left Pane
    </Paper>
    </Grid>
</Grid>
</div>
