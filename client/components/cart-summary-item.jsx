import React from 'react';
import Modal from './modal';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: null,
      count: null,
      show: true
    };
    // this.incrementItem = this.incrementItem.bind(this);
    // this.decrementItem = this.decrementItem.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
    this.confirmDeletion = this.confirmDeletion.bind(this);
  }
  // incrementItem() {
  //   this.setState({
  //     clicks: this.state.clicks + 1
  //   });
  // }
  // decrementItem() {
  //   this.setState({
  //     clicks: this.state.clicks - 1
  //   });
  // }
  handleDeletion(e) {
    e.preventDefault();
  }
  confirmDeletion(e) {
    this.props.delete(this.props.items.cartItemId);

    if (!this.props.show) {
      return null;
    } else {
      return (
        <Modal />
      );
    }
    // const itemDeleted = e.target.value;
    // const value = e.target.value;
    // Item removal from cart should require confirmation of deleted from user.
    // Confirmation prompt should identify which item the user is deleting.
    // this.setState({
    //   [itemDeleted]: value
    // });
  }
  render() {

    if (this.props.items) {
      let { image, name, price, shortDescription } = this.props.items;

      let count = parseInt(this.props.items.count);
      // console.log(count);
      let incrementItem = () => {
        this.setState({
          count: count + 1
        });
      };
      let decrementItem = () => {

        if (this.state.count <= 0) {
          this.setState({
            count: 0
          });
        } else {
          this.setState({
            count: this.state.count - 1
          });
        }
      };
      // let toggleClicks = () => {
      //   this.setState({
      //     show: !this.state.show
      //   });
      // };
      return (
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='mt-3' style={{ 'backgroundColor': 'white', 'borderRadius': 'calc(.25rem - 1px)' }} >
              <div className='media mb-3 mt-1'>
                <button type='button' className='close ml-3' aria-label='close' onClick={ e => {
                  e.preventDefault();
                  // this.props.delete(this.props.items.cartItemId);
                  this.confirmDeletion();
                }} >
                  <span aria-hidden='true'>&times;</span>
                </button>
                <img className='ml-3 mt-4' style={{ 'height': '30%', 'width': '30%' }} src={image} />
                <div className='col-md-7 ml-4'>
                  <h4 className='mt-4'>{name}</h4>
                  <h5 className='mt-2'>{'$' + price} USD</h5>
                  <div className='d-flex'>
                    <div className='mr-2 cursor-pointer' onClick={decrementItem}>
                      <i className='fas fa-minus-circle' style={{ 'color': '#017BFD' }}></i>
                    </div>
                    {this.state.show ? <h6>{this.state.count}</h6> : '' }
                    <h6 className='mt-1'>Quantity: {count}</h6>
                    {/* {this.state.show ? <h6 className='mt-1'>Quantity: {count}</h6> : '' } */}
                    <div className='ml-2 cursor-pointer' onClick={incrementItem}>
                      <i className='fas fa-plus-circle' style={{ 'color': '#017BFD' }}></i>
                    </div>
                  </div>
                  <p className='mt-3'>{shortDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
