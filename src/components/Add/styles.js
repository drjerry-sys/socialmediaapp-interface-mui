import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=> ({
    fab: {
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    container: {
        width: 500,
        height: 600,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        paddingTop: "10px",
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down("sm")]: {
            height: '100vh',
            width: '100vw',
        }
    },
    item: {
        paddingTop: theme.spacing(3)
    }
}))