import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    divs: {
        backgroundColor: "#2A3E4C",
        color: "#FFFFFF",
        fontFamily: " normal normal normal Ubuntu"
    },

    view: {

        width: "200px",
        height: "45px",
        border: "1px solid",
        borderRadius: "10px",
        backgroundColor: "#2A3E4C",
        textAlign: "center",
        fontSize: "18px",
        color: "#FFFFFF",
        margin: theme.spacing(1),
    },
    add: {
        marginLeft: "638px",
        textAlign: "center",
        border: "1px solid #14AFF1",
        borderRadius: "10px",
        width: "120px",
        height: "45px",

        color: "#FFFFFF",
        backgroundColor: "#14AFF1",
    },

    can: {
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "10px",
        width: "500px",
        height: "45px"
    },
    clear: {
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "10px",
        width: "500px",
        height: "45px"
    },

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: "#2A3E4C",

    },
    label1: {
        margin: theme.spacing(1),
        color: "#97A1A9",
    },
    text1: {
        margin: theme.spacing(1),
        border: "1px solid #356680",
        borderRadius: "10px",
        opacity: "1",
        backgroundColor: "#FFFFFF",
        borderColor: "#356680",
    },
    root1: {
        flexGrow: 1,
        width: '100%'
    },
    grid: {
        width: "100%",
        margin: "0px",

    },
}));
export default function EditActor({ open, invoice_currency, cust_payment_terms, changeHandler, handleClose }) {

    const classes = useStyles();
    return (
        <div>
            <Dialog width="50%" onClose={handleClose} aria-labelledby="form-dialog-title" open={open}>
                <DialogTitle className={classes.divs} id="form-dialog-title" onClose={handleClose}>
                    Edit Invoice
                </DialogTitle>
                <DialogContent className={classes.divs} dividers>
                    <form id="myForm" className='Form'>
                        <div style={{ padding: '10px' }}>
                            <input type="text" onChange={changeHandler} name='invoice_currency' id="sl_no" value={invoice_currency} placeholder="Invoice Currency" style={{ padding: '10px', marginRight: '10px', width: '42%' }} />
                            <input type="text" onChange={changeHandler} name='cust_payment_terms' id="cust_payment_terms" value={cust_payment_terms} placeholder="Customer Payment Terms" required style={{ padding: '10px', marginRight: '10px', width: '42%' }} />
                        </div>

                    </form>

                </DialogContent>
                <DialogActions className={classes.divs}>
                    <Button className={classes.can} id="edtcancel" onClick={() => handleClose(true)}>
                        Edit
                    </Button>
                    <Button className={classes.clear} id="edtreset" onClick={() => handleClose(false)}>
                        Cancel
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}