import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    divs: {
        backgroundColor: "#39495E",
        color: "#FFFFFF",
        fontFamily: "Ubuntu",
    },

    view: {
        marginLeft: "30px",
        width: "150px",
        height: "45px",
        border: "1px solid #14AFF1",
        borderRadius: "10px",
        background: "#273D49CC",
        textAlign: "center",
        fontSize: "18px",
        color: "#FFFFFF",
        textTransform: "none",
    },
    add: {
        color: "#14AFF1",
        marginTop: "30px",
        marginLeft: "638px",
        textAlign: "center",
        border: "1px solid #14AFF1",
        borderRadius: "10px",
        width: "99px",
        height: "45px",
        textTransform: "none",
        fontSize: "20px",
    },

    can: {
        color: "#FFFFFF",
        border: "1px solid #FFFFFF",
        borderRadius: "10px",
        width: "500px",
        height: "45px",
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Deletecustomer({ open, handleClose }) {
    const classes = useStyles();

    return (
        <div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle
                    className={classes.divs}
                    id="customized-dialog-title"
                    onClose={handleClose}
                >
                    Delete record(s)
                </DialogTitle>
                <DialogContent className={classes.divs} dividers>
                    <Typography gutterBottom>
                        Are you sure you want to delete the selected record[s]?
                    </Typography>

                </DialogContent>
                <DialogActions className={classes.divs}>
                    <Button className={classes.can} onClick={() => handleClose(false)} color="primary">
                        Cancel
                    </Button>
                    <Button
                        className={classes.can}
                        onClick={() => handleClose(true)}
                        color="primary"
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}