import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {

  render() {
    let totalCost = 0;
    this.props.cartState.map(price => {
      totalCost += price.price;
    });

    if (this.props.cartState !== 0) {
      return (
        <div className='container'>
          <div onClick={() => { this.props.setView('catalog', '{}'); }} className="mt-4 ml-3" >{'< Back To Catalogue'}</div>
          <h3 className='mt-4 ml-5'>MY CART</h3>
          {this.props.cartState.map(product => {
            return <CartSummaryItem key={product.id} items={product} />;
          })}
          <h4 className='m-3 ml-5 mb-3'>ITEM TOTAL: ${totalCost}</h4>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <div onClick={() => { this.props.setView('catalog', '{}'); }} className="mt-4 ml-3" >{'< Back To Catalogue'}</div>
          <h3 className='mt-4 ml-5'>MY CART</h3>
          <h3 className='row align-items-center justify-content-center mt-7'>Cart is Empty</h3>
          <h4 className='m-3 ml-5 mb-3'>ITEM TOTAL: $0</h4>
        </div>
      );
    }

  }
}

export default CartSummary;
