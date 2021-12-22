import { Container, Modal, Tooltip, Fab, TextField, MenuItem, FormControlLabel, RadioGroup, FormLabel, Radio, Button, Snackbar, Typography } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Add as AddIcon } from '@material-ui/icons';
import { useState } from 'react';
import useStyles from './styles';

const Add = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    }

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />
    }

    return ( 
        <>
            <Tooltip>
                <Fab className={classes.fab} color="primary" onClick={()=>setOpen(true)}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <Typography variant="h5">New Post</Typography>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                            <TextField id="standard-basic" label="Title" size="small" style={{width: "100%"}} />
                        </div>
                        <div className={classes.item}>
                            <TextField id="outlined-multiline-static" variant="outlined" multiline rows={4} label="Description" defaultValue="Tell your story..." size="small" style={{width: "100%"}} />
                        </div>
                        <div className={classes.item}>
                            <TextField select label="visibility" value="Public">
                                <MenuItem value="Public">Public</MenuItem>
                                <MenuItem value="Private">Private</MenuItem>
                                <MenuItem value="Unlisted">Unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormLabel component="legend">
                                Who can comment?
                            </FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value="Everybody">
                                <FormControlLabel value="Everybody" control={<Radio size="small" />} label="Everybody" name="gender1" />
                                <FormControlLabel value="My Friends" control={<Radio size="small" />} label="My Friends" name="gender1" />
                                <FormControlLabel value="Nobody" control={<Radio size="small" />} label="Nobody" name="gender1" />
                                <FormControlLabel value="Custom" control={<Radio size="small" />} label="Custom (Premium)" disabled />
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Button variant="outlined" color="primary" style={{marginRight: 20}} onClick={()=>setOpenAlert(true)}>Create</Button>
                            <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                <Alert onClose={handleClose} severity="success">
                    successfully created !!
                </Alert>
            </Snackbar>
        </>
     );
}
 
export default Add;