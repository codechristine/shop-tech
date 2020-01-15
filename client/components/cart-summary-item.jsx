import React from 'react';
import ConfirmDeleteModal from './confirm-delete-modal';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
      show: false,
      quantity: true
    };
    this.openModal = this.openModal.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
  }
  openModal() {
    this.setState({
      show: true
    });
  }
  confirmDelete(e) {
    e.preventDefault();
    this.props.delete(this.props.items.cartItemId);

    this.setState({
      show: false
    });
  }
  cancelModal(e) {
    e.preventDefault();

    this.setState({
      show: false
    });
  }
  render() {
    const productDetails = () => this.props.setView('details', this.props.items);

    if (this.props.items) {
      let { image, name, price, shortDescription } = this.props.items;
      let count = parseInt(this.props.items.count);
      return (
        <>
        <div className='container mt-2' style={{ 'backgroundColor': 'white', 'borderRadius': '0.25rem', 'borderBottom': '2px solid lightGrey' }}>
          <div className='row d-flex justify-content-center' >
            <div className='col-md-1'>
              <div className='mt-3' style={{ 'backgroundColor': 'white', 'borderRadius': 'calc(.25rem - 1px)' }} >
                <button type='button' className='close ml-3' aria-label='close' onClick={ e => {
                  e.preventDefault();
                  // this.props.delete(this.props.items.cartItemId);
                  this.openModal();
                }} >
                  <span className='close' aria-label='Close' aria-hidden='true' style={{ 'fontSize': '2.5rem' }} data-toggle='tooltip' data-placement='bottom' title='remove' >&times;</span>
                </button>
              </div>
            </div>
            <div className='col-md-4 cursor-pointer'>
              <img className='w-100' src={image} onClick={productDetails} alt='product-image' />
            </div>
            <div className='col-md-7'>
              <h4 className='mt-4 cursor-pointer' onClick={productDetails}>{name}</h4>
              <h5 className='mt-2'>{'$' + price} USD</h5>
              <div className='d-flex'>
                <div className='mr-2 cursor-pointer' onClick={() => {
                  this.props.decrement(this.props.items.id);
                  if (this.props.items.count === 0) {
                    this.openModal();
                  }
                }}>
                  <i className='fas fa-minus-circle' style={{ 'color': '#017BFD' }}></i>
                </div>
                {this.state.quantity ? <h6 className='mt-1'>Quantity: {count}</h6> : '' }
                <div className='ml-2 cursor-pointer' onClick={() => { this.props.increment(this.props.items.id); }}>
                  <i className='fas fa-plus-circle' style={{ 'color': '#017BFD' }}></i>
                </div>
              </div>
              <p className='mt-3 mb-5'>{shortDescription}</p>
            </div>
          </div>
        </div>
          <ConfirmDeleteModal show={this.state.show} cartState={this.props.cartState} updateCart={this.props.updateCart} confirmDelete={this.confirmDelete} cancel={this.cancelModal} item={this.props.items} />
        </>
      );
    } else {
      return (
        <div className='container'>
          <div className='row align-items-center justify-content-center mt-5'>
            <div className='lds-ring'><div></div><div></div><div></div><div></div></div>
          </div>
        </div>
      );
    }
  }
}
export default CartSummaryItem;
