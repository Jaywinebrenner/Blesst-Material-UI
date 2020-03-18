import React from 'react';
import { Tabs, Paper } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';


const Footer = ({ muscles}) => {
  return(

    <div>
    <Paper square>
  <Tabs
    value={0}
    indicatorColor="primary"
    textColor="primary"
    aria-label="disabled tabs example"
    centered
  >
      <Tab label='all' />
    {muscles.map( group =>
      <Tab label={group} />

    )}

  </Tabs>
</Paper>
    </div>

  )
}

export default Footer
