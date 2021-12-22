import { makeStyles } from '@material-ui/core';

export default makeStyles((theme)=> ({
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 150,
        [theme.breakpoints.up("sm")]: {
            height: 250,
        },
    },
    icon: {
        color: "#555"
    }
}))