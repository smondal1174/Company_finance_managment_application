import React, { useState, useEffect } from 'react';
import { getData, searchActor, AddCustomer, deleteActor, updateActor, fetch_age } from '../services/services.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import Search from './Search.js';
import AddButton from './AddButton.js';
import RefreshIcon from '@mui/icons-material/Refresh';
import Deletecustomer from './Deletecustomer.js';
import EditActor from './EditActor.js';
import './Headers.css';


function DataTable() {

  const [q, setQ] = useState("");
  const [users, setUsers] = useState([]);
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [Searchopen, setSearchOpen] = useState(false)
  const [addOpen, setAddOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [disable, setDisable] = useState(false);
  const [editdisable, seteditdisable] = useState(true);
  const [deletedisable, setdeletedisable] = useState(true);
  const [predictdisable, setpredictdisable] = useState(true);
  const [predCustomer, setPredCustomer] = useState({ sl_no: "", doc_id: "" });
  const [customer, setCustomer] = useState({ sl_no: "", invoice_currency: "", cust_payment_terms: "" });
  const [addCustomer, setAddCustomer] = useState({ business_code: "", cust_number: "", clear_date: "", buisness_year: "", doc_id: "", posting_date: "", document_create_date: "", due_in_date: "", invoice_currency: "", document_type: "", posting_id: "", total_open_amount: "", baseline_create_date: "", cust_payment_terms: "", invoice_id: "" })
  const [searchCustomer, setSearchCustomer] = useState({ cust_number: "", invoice_id: "", buisness_year: "", doc_id: "" })
  const { sl_no, business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id } = users

  useEffect(()=>{
    async function fetchData(){
      let response = await getData();
    setUsers(response);
  }
  fetchData();
}
  , []);


  //For pagination 
  const handleChangePage = (event, newPage) => {
   
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //For Search
  const searchHandler = () => {
    setSearchOpen(true)
  }
  const changeSearchHandler = (e) => {
    const { name, value } = e.target;
    setSearchCustomer({ ...searchCustomer, [name]: value });
  }

  const handleSearchClose = async (option) => {
    setSearchOpen(false)
    if (option) {
      let response = await searchActor(searchCustomer);
      if (response) {
        setUsers(response)
      }
    }
  }

  //For Add
  const addHandler = () => {
    setAddOpen(true)
  }
  const changeAddHandler = (e) => {
    const { name, value } = e.target;

    setAddCustomer({ ...addCustomer, [name]: value });
  }
  const addHandleClose = async () => {
    setAddOpen(false)
    let response = await AddCustomer(addCustomer)
    if (response) {
      setAddCustomer({ business_code: "", cust_number: "", clear_date: "", buisness_year: "", doc_id: "", posting_date: "", document_create_date: "", due_in_date: "", invoice_currency: "", document_type: "", posting_id: "", total_open_amount: "", baseline_create_date: "", cust_payment_terms: "", invoice_id: "" })
    }
  }

  //For Edit
  const handleClose = async (update) => {
    if (update) {
      let response = await updateActor(customer);
      if(response){
        alert("Updated Successfully");
      }
    }
    setOpen(false);
  }

  const editHandler = () => {
    setOpen(true);
  }



  //For Check Selection
  const checkHandler = (e, sl_no) => {

    const selectedIndex = selected.indexOf(sl_no);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, sl_no);
    }
    else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    }
    else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    }
    else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);

    if (e.target.checked) {
      setDisable(true);
      seteditdisable(false);
      setdeletedisable(false);
      setpredictdisable(false);
      let editActor = users.filter(users => users.sl_no === sl_no)[0];
      let predcust = users.filter(predCustomer => predCustomer.sl_no === sl_no)[0];
      setPredCustomer(predcust);
      setCustomer(editActor);
    }
    
    else {
      setDisable(false);
      seteditdisable(true);
      setdeletedisable(true);
      setpredictdisable(true);
      setCustomer({ sl_no: "" });
    }
  }

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
    
  }


  //For Delete
  const handleDeleteClose = async (option) => {
    if (option) {
      let response = await deleteActor(selected);
      if (response) {
        alert("Deleted");
        setSelected([]);
      }
      else
        alert("Error");
    }
    setDeleteOpen(false);
  };

  const deleteHandler = () => {
    setDeleteOpen(true);
  }


  //For refresh
  const refresh = () => {
    // it re-renders the component
    window.location.reload();
  }

  //For search functionality
  function search(row) {
    setQ(row.target.value);
    setUsers(users.filter(row => (row.cust_number.toString()).indexOf(q) > -1))
  }


  const sorting = (col) => {
    if (order === "asc") {
      const sorted = [...users].sort((a, b) => (a[col] > b[col]) ? 1 : -1);
      setUsers(sorted);
      setOrder("desc");
    }
    if (order === "desc") {
      const sorted = [...users].sort((a, b) => (a[col] < b[col]) ? 1 : -1);
      setUsers(sorted);
      setOrder("asc");
    }
  }

  return (
    <div className='centreDiv'>
      <Deletecustomer open={deleteOpen} handleClose={handleDeleteClose} />

      <EditActor sl_no={customer.sl_no} invoice_currency={customer.invoice_currency} cust_payment_terms={customer.cust_payment_terms} open={open} handleClose={handleClose} changeHandler={changeHandler} />

      <AddButton open={addOpen} business_code={business_code} cust_number={cust_number} clear_date={clear_date}
        buisness_year={buisness_year} doc_id={doc_id} posting_date={posting_date} documnet_create_date={document_create_date}
        due_in_date={due_in_date} invoice_currency={invoice_currency} document_type={document_type} posting_id={posting_id}
        total_open_amount={total_open_amount} baseline_create_date={baseline_create_date} cust_payment_terms={cust_payment_terms}
        invoice_id={invoice_id} handleClose={addHandleClose} handleChange={changeAddHandler} />

      <Search doc_id={doc_id} cust_number={cust_number} invoice_id={invoice_id} buisness_year={buisness_year} open={Searchopen} handleClose={handleSearchClose} changeHandler={changeSearchHandler} />

      <Button
        className='button'
        style={{
          '&:hover': {
            backgroundColor: 'skyblue',
          },
          borderRadius: '12px',
          borderWidth: '2px',
          display: 'inlinr-block',
          color: 'white',
          borderColor: '#33ccff',
          width: '180px',
          marginBottom: '10px',
          height: '40px'
        }}
        variant="outlined" disabled={predictdisable} onClick={() => { fetch_age(predCustomer.doc_id) }}>
        Predict
      </Button>
      <Button

        className='button'
        style={{
          borderWidth: '2px',
          borderRadius: '12px',
          display: 'inlinr-block',
          color: 'white',
          width: '180px',
          borderColor: '#33ccff',
          marginBottom: '10px',
          height: '40px'
        }}
        variant="outlined">
        Analytics
      </Button>

      <Button
        className='button'
        style={{
          borderWidth: '2px',
          borderRadius: '12px',
          display: 'inlinr-block',
          color: 'white',
          borderColor: '#33ccff',
          width: '230px',
          marginBottom: '10px',
          height: '40px'
        }}
        variant="outlined" disabled={disable} onClick={searchHandler} >
        Advanced Search
      </Button>
      <RefreshIcon
        style={{
          position: 'relative',
          color: 'white',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderRadius: '8px',
          borderColor: '#33ccff',
          width: '35px',
          height: '32px',
          fontSize: '12px',
          top: '10px',
        }}
        variant="outlined" className="func_button" onClick={refresh}>Refresh</RefreshIcon>

      <input
        type="text" className='SearchBar' value={q} onChange={search} placeholder="Search by Customer id..." />

      <Button
        className='button'
        style={{
          borderWidth: '2px',
          borderRadius: '12px',
          marginLeft: '58px',
          display: 'inlinr-block',
          color: 'white',
          borderColor: '#33ccff',
          marginBottom: '7px',
          width: '180px',
          height: '40px'
        }}
        variant="outlined" disabled={disable} onClick={addHandler}>
        Add
      </Button>

      <Button
        className='button'
        style={{
          borderWidth: '2px',
          borderRadius: '12px',
          display: 'inlinr-block',
          color: 'white',
          marginBottom: '10px',
          borderColor: '#33ccff',
          width: '180px',
          height: '40px'
        }}
        variant="outlined" disabled={editdisable} onClick={editHandler}>
        Edit
      </Button>

      <Button className='button'
        style={{
          borderWidth: '2px',
          borderRadius: '12px',
          display: 'inline-block',
          marginLeft: 'auto',
          marginRight: '0',
          borderColor: '#33ccff',
          marginBottom: '10px',
          color: 'white',
          width: '180px',
          height: '40px'
        }}
        variant="outlined" disabled={deletedisable} onClick={deleteHandler}>
        Delete
      </Button>


      <TableContainer style={{ backgroundColor: '#2d424d', boxShadow: '10px', height: '380px' }} component={Paper}>

        <Table

          size="small"
          sx={{ minWidth: 500 }} aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell >
                <Checkbox style={{ color: 'white' }}
                />
              </TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("sl_no")}>sl_no</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("business_code")}>business_code</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("cust_number")}>cust_number</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("clear_date")}>clear_date</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("buisness_year")}>buisness_year</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("doc_id")}>doc_id</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("posting_date")}>posting_date</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("document_create_date")}>document_create_date</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("document_create_date1")}>document_create_date1</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("due_in_date")}>due_in_date</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("invoice_currency")}>invoice_currency</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("document_type")}>document_type</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("posting_id")}>posting_id</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("area_business")}>area_business</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("total_open_amount")}>total_open_amount</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("baseline_create_date")}>baseline_create_date</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("cust_payment_terms")}>cust_payment_terms</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("invoice_id")}>invoice_id</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("isOpen")}>isOpen</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("aging_bucket")}>aging_bucket</TableCell>
              <TableCell style={{ color: 'white' }} onClick={(e) => sorting("is_deleted")}>is_deleted</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(Customer => (
              <TableRow key={Customer.sl_no}>

                <TableCell>
                  <Checkbox style={{ color: 'white' }} onClick={(e) => checkHandler(e, Customer.sl_no)} />
                </TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.sl_no}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.business_code}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.cust_number}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.clear_date}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.buisness_year}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.doc_id}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.posting_date}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.document_create_date}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.document_create_date1}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.due_in_date}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.invoice_currency}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.document_type}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.posting_id}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.area_business}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.total_open_amount}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.baseline_create_date}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.cust_payment_terms}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.invoice_id}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.isOpen}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.aging_bucket}</TableCell>
                <TableCell style={{ color: 'white' }}>{Customer.is_deleted}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>
      <TablePagination
        style={{ color: 'white', backgroundColor: '#2d424d' }}
        className='pagination'
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={users.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}


export default DataTable
