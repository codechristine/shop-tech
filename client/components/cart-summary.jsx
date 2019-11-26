import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {

  render() {
    let totalCost = 0;
    this.props.cartState.forEach(product => {
      totalCost += parseFloat(product.price);
      let itemCount = 0;
      itemCount += parseFloat(product.count);
      if (itemCount > 1) {
        this.props.cartState.forEach(item => {
          totalCost *= parseFloat(item.count);
        });
      }
    });

    if (this.props.cartState.length !== 0) {
      return (
        <div className='container'>
          <div className='mt-4 ml-3 cursor-pointer' style={{ 'color': 'white' }} onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Back To Catalog'}</div>
          <h3 className='mt-4 ml-5 mb-2' style={{ 'color': 'white' }}>MY CART</h3>
          {this.props.cartState.map((product, index) => {
            return <CartSummaryItem key={index} items={product} delete={this.props.itemDeletedFromCart} />;
          })}
          <div className='d-flex justify-content-around mt-4 mb-5'>
            <h4 style={{ 'color': 'white' }}>ITEM TOTAL: ${totalCost} USD</h4>
            <button onClick={() => { this.props.setView('checkout', '{}'); }} className='btn btn-primary'>CHECKOUT</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <div className='mt-4 ml-3 cursor-pointer' style={{ 'color': 'white' }} onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Back To Catalog'}</div>
          <h3 className='mt-4 ml-5 mb-2' style={{ 'color': 'white' }}>MY CART</h3>
          <div className='d-flex align-items-left mb-5 ml-5'>
            <h4 style={{ 'color': 'white' }}>ITEM TOTAL: $0 USD</h4>
          </div>
          <div className='d-flex align-items-center mt-5 offset-5'>
            <h2 style={{ 'color': 'white' }}>cart is empty</h2>
          </div>
        </div>
      );
    }
  }
}
export default CartSummary;
