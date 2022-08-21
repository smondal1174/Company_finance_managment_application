import React from 'react';
import hrc_logo from './images/Capture1.JPG';
import abc_products_logo from './images/abc_prod.jpg';
import './Headers.css';
function Headers() {
  return (
    <div className='images'>
      
      <img className='abc_logo' src={abc_products_logo}></img>
      <h1 className='invoice_list'>Invoice List</h1>
        <img className='hrc_logo' src={hrc_logo}></img>
        
    </div>
  )
}

export default Headers
