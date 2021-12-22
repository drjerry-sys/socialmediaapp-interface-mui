import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0
    },
    title: {
        fontWeight: 700,
        color: "#555"
    },
    link: {
        marginRight: theme.spacing(2),
        color: "#555",
        fontSize: 16
    }
}));