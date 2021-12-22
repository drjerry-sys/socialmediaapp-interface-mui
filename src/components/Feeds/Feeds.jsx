import { Container } from '@material-ui/core';
import Post from '../Post/Post';
import useStyles from "./styles"

function App() {

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default App;
