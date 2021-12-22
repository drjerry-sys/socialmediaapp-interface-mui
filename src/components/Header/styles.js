import { makeStyles } from '@material-ui/core';
import { alpha } from '@material-ui/core';

export default makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    logoDesk: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        }
    },
    logoMob: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.up("sm")]: {
            width: "50%",
            display: "flex",
        },
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        [theme.breakpoints.down("sm")]: {
            display: (props)=> props.open ? "flex" : "none",
        }
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    icons: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            display: (props)=> props.open ? "none" : "flex",
        }
    },
    searchButton: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    badge: {
        marginRight: theme.spacing(2),
    },
    cancel: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }
}));