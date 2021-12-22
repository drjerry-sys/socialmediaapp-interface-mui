import useStyles from './styles';
import { Button, Card, CardActionArea, CardContent, CardMedia, CardActions, Typography } from "@material-ui/core";
import { Share, More as MoreIcon } from "@material-ui/icons";

const Post = () => {

    const classes = useStyles()

    return ( 
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image="" title="my post" />
                <CardContent>
                    <Typography gutterBottom variant="h5" >My First Post</Typography>
                    <Typography variant="body2" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum unde voluptatem, sequi consequatur sint ipsam odit autem veniam commodi nisi laboriosam velit illo culpa ducimus tenetur modi aperiam et.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum unde voluptatem, sequi consequatur sint ipsam odit autem veniam commodi nisi laboriosam velit illo culpa ducimus tenetur modi aperiam et.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" className={classes.icon} startIcon={<Share />}>Share</Button>
                <Button size="small" className={classes.icon} startIcon={<MoreIcon />}>Learn More</Button>
            </CardActions>
        </Card>
     );
}
 
export default Post;