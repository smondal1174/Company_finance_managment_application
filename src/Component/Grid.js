import React,{useState, useEffect} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {getData} from '../services/services.js';
import Buttons from '../Component/Buttons.js';
import './Headers.css';
function Grid() {

  const cols =[       { field: "id", hide:true },
  { field: "sl_no", headerName: "sl_no", width: 80 },
  { field: "business_code", headerName: "Business Code", width: 120 },
  { field: "cust_number", headerName: "Customer number", width: 120 },
  { field: "clear_date", headerName: "Clear Date", width: 120 },
  { field: "buisness_year", headerName: "buisness year", width: 120 },
  { field: "doc_id", headerName: "doc_id", width: 120 },
  { field: "posting_date", headerName: "posting date", width: 120 },
  { field: "document_create_date", headerName: "document create date", width: 180 },
  { field: "document_create_date1", headerName: "document create date1", width: 180 },
  { field: "due_in_date", headerName: "due in date", width: 120 },
  { field: "invoice_currency", headerName: "invoice currency", width: 120 },
  { field: "document_type", headerName: "document type", width: 120 },
  { field: "posting_id", headerName: "posting id", width: 120 },
  { field: "area_business", headerName: "area business", width: 120 },
  { field: "total_open_amount", headerName: "total open amount", width: 120 },
  { field: "baseline_create_date", headerName: "baseline create date", width: 120 },
  { field: "cust_payment_terms", headerName: "cust payment terms", width: 120 },
  { field: "invoice_id", headerName: "invoice id", width: 120 },
  { field: "isOpen", headerName: "isOpen", width: 120 },
  { field: "is_deleted", headerName: "is deleted", width: 120 }];

  const [users, setUsers] = useState([]);
  const [pageSize, setPageSize] = React.useState(10);
  useEffect(() => {
    getData().then(users => {
      setUsers(users);
    });
  },[]);
  
 

  
  const rows=users.map(Customer=>{
    return {
      id: Customer.sl_no,
      sl_no: Customer.sl_no,
      business_code: Customer.business_code,
      cust_number: Customer.cust_number,
      clear_date: Customer.clear_date,
      buisness_year: Customer.buisness_year,
      doc_id: Customer.doc_id,
      posting_date: Customer.posting_date,
      document_create_date: Customer.document_create_date,
      document_create_date1: Customer.document_create_date1,
      due_in_date: Customer.due_in_date,
      invoice_currency: Customer.invoice_currency,
      document_type: Customer.document_type,
      posting_id: Customer.posting_id,
      area_business: Customer.area_business,
      total_open_amount: Customer.total_open_amount,
      cust_payment_terms: Customer.cust_payment_terms,
      invoice_id: Customer.invoice_id,
      isOpen: Customer.isOpen,
      is_deleted: Customer.is_deleted,
      
  };
  });
  return (

    <div className='mainGrid'>
      <Buttons/>
    <DataGrid   style={{
      height: '450px',
      
      color:'white'}}

      sx={{
      boxShadow: 10,
      border: 0,
      }}
      
    checkboxSelection
    rows={rows}
    columns={cols}
    pageSize={pageSize}
    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
    pagination
    rowsPerPageOptions={[10, 15, 20]}
    />
    
    </div>
  )
}

export default Grid