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
    this.handleDeletion = this.handleDeletion.bind(this);
    this.openModal = this.openModal.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
  }

  handleDeletion(e) {
    e.preventDefault();
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
  cancelModal() {
    this.setState({
      show: false
    });
  }
  render() {

    if (this.props.items) {
      let { image, name, price, shortDescription } = this.props.items;
      let count = parseInt(this.props.items.count);
      return (
        <>
        <div className='container mt-5' style={{ 'backgroundColor': 'white' }}>
          <div className='row d-flex justify-content-center' >
            <div className='col-md-1'>
              <div className='mt-3' style={{ 'backgroundColor': 'white', 'borderRadius': 'calc(.25rem - 1px)' }} >
                <button type='button' className='close ml-3' aria-label='close' onClick={ e => {
                  e.preventDefault();
                  // this.props.delete(this.props.items.cartItemId);
                  this.openModal();
                }} >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
            </div>
            <div className='col-md-3'>
              <img className='mt-4 w-100' src={image} />
            </div>
            <div className='col-md-7'>
              <h4 className='mt-4'>{name}</h4>
              <h5 className='mt-2'>{'$' + price} USD</h5>
              <div className='d-flex'>
                <div className='mr-2 cursor-pointer' onClick={() => {
                  // console.log(this.props.items);
                  // console.log(this.props.items.count);
                  if (this.props.items.count === 0) {
                    // console.log(this.props.items);
                    this.openModal();
                  }
                  if (this.props.items.count === 1) {
                    this.openModal();
                  }
                  this.props.decrement(this.props.items.id);
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
          <ConfirmDeleteModal show={this.state.show} onClose={this.confirmDelete} cancel={this.cancelModal} item={this.props.items} />
        </>
      );
    } else {
      return (
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <h2 className='m-2' style={{ 'color': '#f19e05e8' }}>no items in cart</h2>
          </div>
        </div>
      );
    }
  }
}
export default CartSummaryItem;
