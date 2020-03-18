import React from 'react';
import { Tabs, Paper } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';


const Footer = () => {
  return(

    <div>
    <Paper square>
  <Tabs
  value={0}
indicatorColor="primary"
    textColor="primary"

    aria-label="disabled tabs example"
  >
    <Tab label="Active" />
    <Tab label="Active" />
    <Tab label="Active" />
  </Tabs>
</Paper>
    </div>

  )
}

export default Footer
