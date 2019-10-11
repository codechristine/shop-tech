import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {

  render() {

    let totalCost = 0;
    this.props.cartState.forEach(price => {
      totalCost++;
    });

    if (this.props.cartState !== 0) {
      return (
        <div className='container'>
          <div onClick={() => { this.props.setView('catalog', '{}'); }} className="mt-4 ml-3" >{'< Back To Catalogue'}</div>
          <h3 className='mt-4 ml-5 mb-2'>MY CART</h3>
          {this.props.cartState.map(product => {
            return <CartSummaryItem key={product.id} items={product} />;
          })}
          <div className='d-flex justify-content-around mt-4 mb-5'>
            <h4 style={{ 'color': 'royalblue' }}>ITEM TOTAL: ${totalCost}</h4>
            <button onClick={() => { this.props.setView('checkout', '{}'); }} className='btn btn-primary'>CHECKOUT</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <div onClick={() => { this.props.setView('catalog', '{}'); }} className="mt-4 ml-3" >{'< Back To Catalogue'}</div>
          <h3 className='mt-4 ml-5 mb-2'>MY CART</h3>
          <h3 className='row align-items-center justify-content-center mt-7'>Cart is Empty</h3>
          <div className='d-flex justify-content-around mt-4 mb-5'>
            <h4 style={{ 'color': 'royalblue' }}>ITEM TOTAL: $0</h4>
            <button onClick={() => { this.props.setView('catalog', '{}'); }} className='btn btn-primary'>CHECKOUT</button>
          </div>
        </div>
      );
    }

  }
}

export default CartSummary;
