import './App.css';
import Header from './components/Header/Header';
import { Grid, makeStyles } from '@material-ui/core';
import Leftbar from './components/Leftbar/Leftbar';
import Feeds from './components/Feeds/Feeds';
import Rightbar from './components/Rightbar/Rightbar';
import Add from './components/Add/Add';

function App() {

  const useStyles = makeStyles((theme)=> ({
    right: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      }
    }
  }))

  const classes = useStyles()

  return (
    <div className="App">
      <Header />
      <Grid container>
        <Grid item sm={2} xs={2}><Leftbar /></Grid>
        <Grid item sm={7} xs={10}><Feeds /></Grid>
        <Grid item sm={3} className={classes.right}><Rightbar /></Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
