import React from 'react';
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

// export default function SimpleSnackbar() {
//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button onClick={handleClick}>Open simple snackbar</Button>
//       <Snackbar
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left'
//         }}
//         open={open}
//         autoHideDuration={6000}
//         onClose={handleClose}
//         message='Note archived'
//         action={
//           <React.Fragment>
//             <Button color='secondary' size='small' onClick={handleClose}>
//               UNDO
//             </Button>
//             <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
//               <CloseIcon fontSize='small' />
//             </IconButton>
//           </React.Fragment>
//         }
//       />
//     </div>
//   );
// }

class SnackbarPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: 'hello',
      message: 'work please',
      open: false
    };
    this.snackbarClose = this.snackbarClose.bind(this);
  }
  snackbarClose(e) {
    this.setState({
      open: false
    });
  }
  render() {
    // if (!this.props.show) {
    //   return null;
    // } else {
    //   return (
    //     <div show='true'>
    //       <Snackbar
    //         anchorOrigin={{
    //           vertical: 'bottom',
    //           horizontal: 'left'
    //         }}
    //         message={<span>{this.state.message}</span>}
    //         open={this.state.open}
    //         onClose={e => this.snackbarClose }
    //         autoHideDuration={2000}
    //         action={
    //       <>
    //          <Button color='secondary' size='small' onClick={this.snackbarClose}>
    //            UNDO
    //          </Button>
    //          <IconButton key='close' size='small' aria-label='close' color='inherit' onClick={this.snackbarClose}>
    //            <CloseIcon fontSize='small' />
    //          </IconButton>
    //        </>
    //         }
    //       />
    //     </div>
    //   );
    // }

    // console.log(this.props.product);
    const productName = this.props.product.name;
    const addedProduct = `${productName}` + ' has been added to cart';

    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className='d-flex align-items-center' show='true'>
          <div className='modalShadow'>
            <div className='modalBody'>
              <div className='modalContent'>
                <h6>{addedProduct}</h6>
                <div className='ml-3 pt-4 cursor-pointer' style={{ 'color': '#017BFD', 'display': 'inline-block' }} onClick={() => { this.props.setView('catalog', {}); }}>{'< Back To Catalog'}</div>
                <button className='btn btn-primary confirm cursor-pointer m-3' onClick={() => { this.props.setView('cart', {}); }}>view cart</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default SnackbarPopup;
