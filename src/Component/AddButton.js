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

export default function AddButton({ open, business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id, handleClose, handleChange }) {
    const classes = useStyles();
    return (
        <div>
            <Dialog classes={{ paper: classes.paper }} onClose={handleClose} aria-labelledby="form-dialog-title" open={open}>
                <DialogTitle className={classes.divs} id="form-dialog-title" onClose={handleClose}>
                    Add Invoice
                </DialogTitle>
                <DialogContent className={classes.divs} dividers>

                    <form id="myForm" className='Form'>
                        <div style={{ padding: '10px' }}>
                            <input onChange={handleChange} id="business_code" label="business_code" name='business_code' value={business_code} type="text" placeholder="Business code" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />
                            <input onChange={handleChange} id="cust_number" name='cust_number' value={cust_number} label="Customer Number" type="number" placeholder="Customer No" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />
                            <input onChange={handleChange} id="clear_date" name='clear_date' value={clear_date} label="clear_date" placeholder="Clear Date" type="date" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />


                        </div>
                        <div style={{ padding: '10px' }}>
                            <input onChange={handleChange} id="buisness_year" label="buisness_year" value={buisness_year} name='buisness_year' type="number" placeholder="Business Year" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />
                            <input onChange={handleChange} id="doc_id" label="doc_id" value={doc_id} name='doc_id' type="number" placeholder="Document id" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />
                            <input onChange={handleChange} id="posting_date" label="posting_date" value={posting_date} name='posting_date' type="date" placeholder="Posting Date" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />
                        </div>

                        <div style={{ padding: '10px' }}>
                            <input onChange={handleChange} id="document_create_date" label="document_create_date" value={document_create_date} name='document_create_date' type="date" placeholder="Document create Date" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />
                            <input onChange={handleChange} id="due_in_date" label="due_in_date" value={due_in_date} name='due_in_date' type="date" placeholder="Due Date" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />
                            <input onChange={handleChange} id="invoice_currency" label="invoice_currency" value={invoice_currency} name='invoice_currency' type="text" placeholder="Invoice Currency" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />
                        </div>

                        <div style={{ padding: '10px' }}>

                            <input onChange={handleChange} id="document_type" label="document_type" value={document_type} name='document_type' type="text" placeholder="Document Type" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />
                            <input onChange={handleChange} id="posting_id" label="posting_id" value={posting_id} name='posting_id' type="number" placeholder="Posting Id" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />
                            <input onChange={handleChange} id="total_open_amount" label="total_open_amount" value={total_open_amount} name='total_open_amount' type="number" step="0.01" placeholder="Total open Amount" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />
                        </div>

                        <div style={{ padding: '10px' }}>
                            <input onChange={handleChange} id="baseline_create_date" label="baseline_create_date" value={baseline_create_date} name='baseline_create_date' type="date" placeholder="Document Create Date" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />
                            <input onChange={handleChange} id="cust_payment_terms" label="cust_payment_terms" value={cust_payment_terms} name='cust_payment_terms' type="text" placeholder="Customer Payment Term" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />
                            <input onChange={handleChange} id="invoice_id" label="invoice_id" value={invoice_id} name='invoice_id' type="number" placeholder="Invoice Id" style={{ padding: '10px', marginRight: '10px', width: '28%' }} />
                        </div>
                    </form>
                </DialogContent>
                <DialogActions className={classes.divs}>
                    <Button className={classes.can} id="addt" onClick={() => handleClose(true)} type="submit">
                        Add
                    </Button>
                    <Button className={classes.can} id="addcancel" onClick={() => handleClose(false)}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

    );
}