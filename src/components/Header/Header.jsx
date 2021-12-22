import useStyles from './styles';
import { useState } from 'react';
import { Search, Mail, Notifications, Cancel } from '@material-ui/icons';
import { AppBar, Toolbar, Typography, InputBase, Badge, Avatar } from '@material-ui/core';

function App() {

  const [open, setOpen] = useState(false)

  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoDesk}>ySocial</Typography>
        <Typography variant="h6" className={classes.logoMob}>Socialy</Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={()=>setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchButton} onClick={()=>setOpen(true)} />
          <Badge badgeContent={4} color="secondary" className={classes.badge}><Mail /></Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}><Notifications /></Badge>
          <Avatar alt="profile-pic" src="" />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default App;
