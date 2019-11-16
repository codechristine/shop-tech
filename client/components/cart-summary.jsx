import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {

  render() {

    let totalCost = 0;
    this.props.cartState.forEach(price => {
      totalCost += parseFloat(price.price);
    });

    if (this.props.cartState !== 0) {
      return (
        <div className='container'>
          <div className='mt-4 ml-3 cursor-pointer' style={{ 'color': 'white' }} onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Back To Catalogue'}</div>
          <h3 className='mt-4 ml-5 mb-2' style={{ 'color': 'white' }}>MY CART</h3>
          {this.props.cartState.map((product, index) => {
            return <CartSummaryItem key={index} items={product} />;
          })}
          <div className='d-flex justify-content-around mt-4 mb-5'>
            <h4 style={{ 'color': 'white' }}>ITEM TOTAL: ${totalCost}</h4>
            <button onClick={() => { this.props.setView('checkout', '{}'); }} className='btn btn-primary'>CHECKOUT</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <div className='mt-5 ml-3' style={{ 'color': 'white' }} onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Back To Catalogue'}</div>
          <h3 className='mt-5 ml-5 mb-5' style={{ 'color': 'white' }}>MY CART</h3>
          <h3 className='mt-5' style={{ 'color': 'red' }}>Cart is Empty</h3>
          <div className='d-flex justify-content-around mt-4 mb-5'>
            <h4 style={{ 'color': 'white' }}>ITEM TOTAL: $0</h4>
          </div>
        </div>
      );
    }
  }
}
export default CartSummary;
