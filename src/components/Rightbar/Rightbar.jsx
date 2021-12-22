import { Divider, Container, Typography, Avatar, ImageList, ImageListItem, Link } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import useStyles from './styles';

function App() {

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="subtitle1" className={classes.title} gutterBottom>Online Friends</Typography>
      <AvatarGroup max={4} style={{marginBottom: 20}}>
        <Avatar alt="name">N</Avatar>
        <Avatar alt="name">F</Avatar>
        <Avatar alt="name">J</Avatar>
        <Avatar alt="name">P</Avatar>
        <Avatar alt="name">L</Avatar>
      </AvatarGroup>
      <Typography variant="subtitle1" className={classes.title} gutterBottom>Gallery</Typography>
      <ImageList rowHeight={160} style={{marginBottom: 20}} className={classes.imageList} cols={3}>
        <ImageListItem>
          <img src="" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="" alt="" />
        </ImageListItem>
      </ImageList>
      <Typography variant="subtitle1" className={classes.title} gutterBottom>Categories</Typography>
      <Link href="#" className={classes.link} variant="body2">Sport</Link>
      <Link href="#" className={classes.link} variant="body2">Food</Link>
      <Link href="#" className={classes.link} variant="body2">Music</Link>
      <Divider flexItem  style={{marginBottom: 5}}/>
      <Link href="#" className={classes.link} variant="body2">Movies</Link>
      <Link href="#" className={classes.link} variant="body2">Science</Link>
      <Link href="#" className={classes.link} variant="body2">Life</Link>
    </Container>
  );
}

export default App;
