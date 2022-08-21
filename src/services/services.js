import axios from 'axios'

export const getData = async () =>{
    let response=await axios.get("/dataFetch");
    return response.data.Customer;
}

export const searchActor = async ({doc_id, cust_number, invoice_id, buisness_year}) => {
    let data = "doc_id=" + doc_id + "&cust_number=" + cust_number + "&invoice_id=" + invoice_id + "&buisness_year=" + buisness_year;
    let response = await axios.get("/searchData?" + data)
    return response.data.SearchedData;
}

export const AddCustomer = async ({business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id}) => {
    let data = "business_code=" + business_code + "&cust_number=" + cust_number + "&clear_date=" + clear_date + "&buisness_year=" + buisness_year + "&doc_id=" + doc_id + "&posting_date=" + posting_date + "&document_create_date=" + document_create_date + "&due_in_date=" + due_in_date + "&invoice_currency=" + invoice_currency + "&document_type=" + document_type + "&posting_id=" + posting_id + "&total_open_amount=" + total_open_amount + "&baseline_create_date=" + baseline_create_date + "&customer_payment_terms=" + cust_payment_terms + "&invoice_id=" + invoice_id;
    let response = await axios.post("/addData?" + data)
    return response.data;
}

export const updateActor = async ({ sl_no, invoice_currency, cust_payment_terms }) => {
    let data = "sl_no=" + sl_no + "&invoice_currency=" + invoice_currency + "&cust_payment_terms=" + cust_payment_terms;
    let response = await axios.get("/update?" + data);
    return response.data;
}

export const deleteActor = async (selected) => {
    let data = selected.join(',');
    let response = await axios.get("/delete?sl_no=" + data);
    return response.data;

}

export const fetch_age = async (doc_id) => {
    console.log(doc_id);
    var docaray = [parseInt(doc_id)];
        let response = await axios.post("http://127.0.0.1:5000/get_prediction",{data:docaray},{headers: {'Content-Type': 'application/json'}});
        if(response.data.length>0){
            let data = "&aging_bucket=" + response.data[0].aging_bucket + "&doc_id=" + doc_id;
            let content = await axios.get("/predUpdate?" + data);
            console.log(content.data);
            return content.data;
        }
        else
        {
            let data = "&aging_bucket=" + NaN + "&doc_id=" + doc_id;
            let content = await axios.get("/predUpdate?" + data);
            console.log(content.data);
            return content.data;
        }
}