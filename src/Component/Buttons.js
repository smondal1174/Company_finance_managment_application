// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import './Headers.css';
// import PredictButtons from '../Component/PredictButton.js';
// import Search from '../Component/Search.js';
// function Buttons() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <PredictButtons/>
//       <Button
//       className='button'
//         style={{
//           borderWidth: '3px',
//           borderRadius: '12px',
//           display: 'inlinr-block',
//           color: 'white',
//           width:'180px',
//           marginBottom: '10px',
//           height:'40px'}}
//          variant="outlined" onClick={handleClickOpen}>
//         Analytics
//       </Button>

//       <Button
//       className='button'
//         style={{
//           borderWidth: '3px',
//           borderRadius: '12px',
//           display: 'inlinr-block',
//           color: 'white',
//           width:'230px',
//           marginBottom: '10px',
//           height:'40px'}}
//          variant="outlined" onClick={searchHandler} >
//         Advanced Search
//     </Button>

//       <input 
//       type="text" className='SearchBar' placeholder="Search by Customer id..."/>

//       <Button
//       className='button'
//         style={{
//           borderWidth: '3px',
//           borderRadius: '12px',
//           marginLeft: '80px',
//           display: 'inlinr-block',
//           color: 'white',
//           marginBottom: '10px',
//           width:'180px',
//           height:'40px'}}
//          variant="outlined" onClick={handleClickOpen}>
//         Add
//       </Button>

//       <Button
//       className='button'
//         style={{
//           borderWidth: '3px',
//           borderRadius: '12px',
//           display: 'inlinr-block',
//           color: 'white',
//           marginBottom: '10px',
//           width:'180px',
//           height:'40px'}}
//          variant="outlined" onClick={handleClickOpen}>
//         Edit
//       </Button>

//         <Button className='button'
//         style={{
//           borderWidth: '3px',
//           borderRadius: '12px',
//           display: 'inline-block',
//           marginLeft: 'auto',
//           marginRight: '0',
//           marginBottom: '10px',
//           color: 'white',
//           width:'180px',
//           height:'40px'}}
//          variant="outlined" onClick={handleClickOpen}>
//         Delete
//       </Button>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogContent>
//           <DialogContentText>
//             Do you want to delete?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>No</Button>
//           <Button onClick={handleClose}>Yes</Button>
//         </DialogActions>
//       </Dialog>
      
//     </div>
//   )
// }

// export default Buttons;