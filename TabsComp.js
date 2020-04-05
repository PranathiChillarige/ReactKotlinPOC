import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EventComp from './EventComp';
import ActivityComp from './Activity';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default function ScrollableTabsButtonAuto() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Events" />
          <Tab label="Activity"  />
          <Tab label="Logs"  />
          <Tab label="Analytics"  />
          <Tab label="jiopardy" />
          <Tab label="Customers"  />
          <Tab label="Item 7" />
          <Tab label="Item 8"  />
          <Tab label="Item 9" />
          <Tab label="Item 10"  />
          <Tab label="Item 11" />
          <Tab label="Item 12" />
          <Tab label="Item 13"  />
          <Tab label="Item 14"  />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       <EventComp/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ActivityComp/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item 3
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item 4
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item 5
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item 6
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item 7
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item 8
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item 9
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item 10
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item 11
      </TabPanel>
      <TabPanel value={value} index={11}>
        Item 12
      </TabPanel>
      <TabPanel value={value} index={12}>
        Item 13
      </TabPanel>
      <TabPanel value={value} index={13}>
        Item 14
      </TabPanel>
    </div>
  );
}
