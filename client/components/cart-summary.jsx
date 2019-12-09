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
          <div className='mt-3 ml-3 pt-4 cursor-pointer' style={{ 'color': '#017BFD', 'display': 'inline-block' }} onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Back To Catalog'}</div>
          <h3 className='mt-2 ml-4 mb-2' style={{ 'color': '#f19e05e8' }}>My Cart</h3>
          {this.props.cartState.map((product, index) => {
            return <CartSummaryItem key={index} items={product} delete={this.props.itemDeletedFromCart} toggleModal={this.props.toggleModal} show={this.props.show} onClose={this.props.toggleModal} />;
          })}
          <div className='d-flex justify-content-around  align-items-center mt-3 mb-5'>
            <h4 className='total'>ITEM TOTAL: ${totalCost.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</h4>
            <button onClick={() => { this.props.setView('checkout', '{}'); }} className='btn btn-primary checkoutBtn'>CHECKOUT</button>
          </div>
          <div className='mb-4' style={{ 'textAlign': 'center', 'color': '#f19e05e8', 'fontWeight': 'bold' }}>*disclaimer - this is a demo site.</div>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <div className='mt-3 ml-3 pt-4 cursor-pointer' style={{ 'color': '#017BFD', 'display': 'inline-block' }} onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Back To Catalog'}</div>
          <h3 className='mt-4 ml-5 mb-2' style={{ 'color': '#f19e05e8' }}>MY CART</h3>
          <div className='d-flex align-items-left mb-5 ml-5'>
            <h4>ITEM TOTAL: $0 USD</h4>
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <h2>cart is empty</h2>
          </div>
          <div className='mt-5 mb-4' style={{ 'textAlign': 'center', 'color': '#f19e05e8', 'fontWeight': 'bold' }}>*disclaimer - this is a demo site.</div>
        </div>
      );
    }
  }
}
export default CartSummary;
