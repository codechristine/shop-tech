import React from 'react';
import ConfirmAddModal from './confirm-add-modal';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import SnackbarPopup from './snackbar';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      show: false,
      open: false,
      message: 'please work'
    };
    this.openModal = this.openModal.bind(this);
    this.confirmAdd = this.confirmAdd.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
    // this.snackbarPopup = this.snackbarPopup.bind(this);
  }
  componentDidMount() {
    const id = this.props.clicked;

    fetch(`/api/products.php?id=${id}`)
      .then(response => response.json())
      .then(result => {
        this.setState({ product: result });
      })
      .catch(error => console.error('fetch error:', error));
  }
  openModal() {
    this.setState({
      show: true
    });
  }
  confirmAdd() {
    this.props.itemAddedToCart(this.state.product);
    this.setState({
      show: false
    });
    return (
      <Snackbar show={!this.state.show} product={this.state.product} setView={this.props.setView} />
    );
  }
  cancelModal() {
    this.setState({
      show: false
    });
  }
  closeSnackbar(e) {
    this.setState({
      open: false
    });

  }
  // snackbarPopup() {
  //   const [status, setStatusBase] = React.useState('');

  //   const setStatus = msg => setStatusBase({ msg, date: new Date() });
  //   return (
  //     <div className='snackbarPopup'>
  //       <h1>Hello SnackBar</h1>
  //       <button type='submit' className='primary' color='primary' onClick={() => { setStatus('success'); }} >OPEN</button>
  //       {status ? <Snackbar key={status.date} status={status.msg} /> : null}
  //     </div>
  //   );
  // }
  render() {
    if (this.state.product) {
      let firstImage = this.state.product.image[0];
      let secondImage = this.state.product.image[1];
      let thirdImage = this.state.product.image[2];
      let name = this.state.product.name;
      let price = '$' + this.state.product.price;
      let shortDescription = this.state.product.shortDescription;
      let longDescription = this.state.product.longDescription;

      return (
        <>
        <div className='container-fluid' style={{ 'backgroundColor': 'white' }}>
          <div className='ml-3 pt-4 cursor-pointer' style={{ 'color': '#017BFD' }} onClick={() => { this.props.setView('catalog', {}); }}>{'< Back To Catalog'}</div>
          <div className='row mt-4'>
            <div className='d-flex justify-content-center align-items-center' >
              <div className='col-md-4' >
                <img className='img-fluid mr-3' src={firstImage} />
              </div>
              <div className='col-md-6'>
                <h2>{name}</h2>
                <h6 className='mt-4'>{price} USD</h6>
                <p className='mt-3 text-wrap'>{shortDescription}</p>
                <button type='button' className='btn btn-primary' onClick={() => {
                  this.openModal();
                // this.props.itemAddedToCart(this.state.product);
                }
                }>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='d-flex justify-content-left align-items-center mt-4 mb-4 offset-1' >
              <div className='col-md-2'>
                <img className='img-fluid' src={secondImage} />
              </div>
              <div className='col-md-2'>
                <img className='img-fluid' src={thirdImage} />
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='media-body col-md-10 mb-5'>{longDescription}</div>
          </div>
          <div className='mb-4' style={{ 'float': 'right', 'color': '#f19e05e8', 'fontWeight': 'bold' }}>*disclaimer - this is a demo site.</div>
        </div>
          <ConfirmAddModal show={this.state.show} onClose={this.confirmAdd} cancel={this.cancelModal} product={this.state.product} setView={this.props.setView} />
          {/* <SnackbarPopup show={this.state.show} onClose={this.confirmAdd} cancel={this.cancelModal} product={this.state.product} setView={this.props.setView}/> */}
           <Snackbar
             anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'left'
             }}
             message={<span>{this.state.message}</span>}
             open={this.state.open}
             onClose={e => this.snackbarClose }
             autoHideDuration={2000}
             action={
          <>
             <Button color='secondary' size='small' onClick={this.snackbarClose}>
               UNDO
             </Button>
             <IconButton key='close' size='small' aria-label='close' color='inherit' onClick={this.snackbarClose}>
               <CloseIcon fontSize='small' />
             </IconButton>
           </>
             }
           />
          </>
      );
    } else {
      return (
        <div className='container' style={{ 'backgroundColor': 'white' }}>
          <div className='ml-3 pt-4 cursor-pointer' style={{ 'color': '#017BFD' }} onClick={() => { this.props.setView('catalog', {}); }}>{'< Back To Catalog'}</div>
          <div className='row align-items-center justify-content-center mt-5'>
            <div className='lds-ring'><div></div><div></div><div></div><div></div></div>
          </div>
          <div className='mb-4' style={{ 'float': 'right', 'color': '#f19e05e8', 'fontWeight': 'bold' }}>*disclaimer - this is a demo site.</div>
        </div>
      );
    }
  }
}
export default ProductDetails;
