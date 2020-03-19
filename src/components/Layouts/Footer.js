import React from 'react';
import { Tabs, Paper } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';


const Footer = ({ muscles, onSelect, category }) => {

  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0
  return(

    <div>
    <Paper square>
  <Tabs
    value={index}
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
