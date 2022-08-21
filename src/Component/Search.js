import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    divs: {
        backgroundColor: "#2A3E4C",
        color: "#FFFFFF",
        fontFamily: " normal normal normal Ubuntu"
    },
    paper: {
        minWidth: "900px",
    },

    view: {
        width: "200px",
        height: "45px",
        //border:"1px solid",
        borderRadius: "10px",
        backgroundColor: "#2A3E4C",
        textAlign: "center",
        fontSize: "18px",
        color: "#FFFFFF",
        margin: theme.spacing(1),

    },

    addbt: {
        color: "#FFFFFF",
        textAlign: "center",
        border: "1px solid #14AFF1",
        borderRadius: "5px",
        width: "200px",
        height: "45px",
        fontSize: "20px",
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

    rootmain: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: "#2A3E4C",
        color: "#FFFFFF"

    },

    label1: {
        margin: theme.spacing(1),
        color: "#97A1A9",
    },
    text1: {
        border: "1px solid #356680",
        borderRadius: "10px",
        opacity: "1",
        backgroundColor: "white",
        borderColor: "#356680",
        color: "Black"
    },

    root1: {
        flexGrow: 1,
        width: '100%',

    },
    grid: {
        width: "100%",
        margin: "0px",
        color: "#FFFFFF"


    },
}));
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },

});

function Search({ open, doc_id, cust_number, invoice_id, buisness_year, handleClose, changeHandler }) {
    const classes = useStyles();

    return (
        <div>
            <Dialog classes={{ paper: classes.paper }} onClose={handleClose} aria-labelledby="form-dialog-title" open={open}>
                <DialogTitle className={classes.divs} id="form-dialog-title" onClose={handleClose}>
                    Advanced Search
                </DialogTitle>
                <DialogContent className={classes.divs} dividers>

                    <form id="myForm" className='Form'>

                        <div style={{ padding: '10px', paddingLeft: '70px' }}>
                            <input onChange={changeHandler} id="doc_id" label="doc_id" value={doc_id} name='doc_id' type="number" placeholder="Document id" style={{ padding: '10px', marginRight: '10px', width: '42%' }} />
                            <input onChange={changeHandler} id="cust_number" name='cust_number' value={cust_number} label="Customer Number" type="number" placeholder="Customer No" style={{ padding: '10px', marginRight: '10px', width: '42%' }} />
                        </div>

                        <div style={{ padding: '10px', paddingLeft: '70px' }}>
                            <input onChange={changeHandler} id="invoice_id" label="invoice_id" value={invoice_id} name='invoice_id' type="number" placeholder="Invoice Id" style={{ padding: '10px', marginRight: '10px', width: '42%' }} />
                            <input onChange={changeHandler} id="buisness_year" label="buisness_year" value={buisness_year} name='buisness_year' type="number" placeholder="Business Year" style={{ padding: '10px', marginRight: '10px', width: '42%' }} />

                        </div>
                    </form>
                </DialogContent>
                <DialogActions className={classes.divs}>
                    <Button className={classes.can} id="addt" onClick={() => handleClose(true)} type="submit">
                        Search
                    </Button>
                    <Button className={classes.can} id="addcancel" onClick={() => handleClose(false)}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Search