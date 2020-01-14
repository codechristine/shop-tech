import React from 'react';
import ConfirmAddModal from './confirm-add-modal';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
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
      message: ''
    };
    this.openModal = this.openModal.bind(this);
    this.confirmAdd = this.confirmAdd.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.openSnackbar = this.openSnackbar.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
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

    this.openSnackbar();
  }
  cancelModal() {
    this.setState({
      show: false
    });
  }
  closeSnackbar() {
    this.setState({
      open: false,
      message: ''
    });
  }
  openSnackbar(message) {
    this.setState({
      open: true,
      message: 'item added to cart'
    });

    // const [status, setStatusBase] = React.useState('');

    // const setStatus = msg => setStatusBase({ msg, date: new Date() });
    // return (
    //   <div className='snackbarPopup'>
    //     <h1>Hello SnackBar</h1>
    //     <button type='submit' className='primary' color='primary' onClick={() => { setStatus('success'); }} >OPEN</button>
    //     {status ? <Snackbar key={status.date} status={status.msg} /> : null}
    //   </div>
    // );
  }
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
            <div className='ml-3 pt-4 cursor-pointer' style={{ 'color': '#017BFD', 'fontWeight': 'bold' }} onClick={() => { this.props.setView('catalog', {}); }}>{'< Back To Catalog'}</div>
            <div className='row mt-4'>
              <div className='d-flex justify-content-center align-items-center'>
                <div className='col-md-2'>
                  <div className=''>
                    <img className='img-fluid' src={secondImage} />
                  </div>
                  <div className=''>
                    <img className='img-fluid' src={thirdImage} />
                  </div>
                </div>
                <div className='col-md-4'>
                  <img className='img-fluid mr-3' src={firstImage} />
                </div>
                {/* </div> */}
                <div className='col-md-3'>
                  <h2 style={{ 'fontWeight': 'bold' }}>{name}</h2>
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
            {/* </div> */}
            {/* <div className='row'>
              <div className='d-flex justify-content-center align-items-center mt-4 mb-4' >
                <div className='col-md-2'>
                  <img className='img-fluid' src={secondImage} />
                </div>
                <div className='col-md-2'>
                  <img className='img-fluid' src={thirdImage} />
                </div>
              </div>
            </div> */}
            <div className='d-flex justify-content-center'>
              <div className='media-body col-md-10 mt-5 mb-5'>{longDescription}</div>
            </div>
          </div>
          {/* </div> */}
          <div className='d-flex justify-content-center align-items-center'>
            <div style={{ 'color': '#f19e05e8', 'fontWeight': 'bold', 'marginTop': '5vh', 'padding': '1rem' }}>*disclaimer - Shop Tech is a web application built for demonstration purposes only and does not sell, provide, or distribute any products or services. Orders placed on Shop Tech will not be charged. Please do not input any personal information.</div>
          </div>
          <ConfirmAddModal show={this.state.show} onClose={this.confirmAdd} cancel={this.cancelModal} product={this.state.product} setView={this.props.setView} />
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            message={<> <CheckCircleOutlineIcon /> <span>{this.state.message}</span></>}
            open={this.state.open}
            onClose={e => this.closeSnackbar}
            autoHideDuration={2000}
            action={
              <>
                <Button variant='contained' color='default' size='small' onClick={() => { this.props.setView('cart', {}); }}>
                  View Cart
                </Button>
                <Button variant='contained' color='primary' size='small' onClick={() => { this.props.setView('catalog', {}); }}>
                  Continue Shopping
                </Button>
                <IconButton key='close' size='small' aria-label='close' color='inherit' onClick={this.closeSnackbar}>
                  <CloseIcon fontSize='small' />
                </IconButton>
              </>
            }
          />
        </>
      );
    } else {
      return (
        <>
          <div className='container'>
            <div className='ml-3 pt-4 cursor-pointer' style={{ 'color': '#017BFD' }} onClick={() => { this.props.setView('catalog', {}); }}>{'< Back To Catalog'}</div>
            <div className='row align-items-center justify-content-center mt-5'>
              <div className='lds-ring'><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
        </>
      );
    }
  }
}
export default ProductDetails;
