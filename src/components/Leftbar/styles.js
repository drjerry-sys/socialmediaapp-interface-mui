import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    container: {
        height: '100vh',
        color: "white",
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7"
        }
    },
    icons: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px"
        }
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer"
        }
    },
    text: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
            fontWeight: 500,
        }
    }
}));