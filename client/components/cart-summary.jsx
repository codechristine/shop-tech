import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {

  render() {

    let totalCost = 0;
    this.props.cartState.map(price => {
      totalCost += price.price;
      totalCost = '$' + (totalCost / 100);
    });

    if (this.props.cartItemCount !== 0) {
      return (
        <div className='container'>
          <div onClick={() => { this.props.setView('catalog', '{}'); }} className="mt-4 ml-3" >{'< Back To Catalogue'}</div>
          <h2>MY CART</h2>
          {this.props.cartState.map(product => {
            return <CartSummaryItem key={product.id} items={product} />;
          })}
          <div>ITEM TOTAL: {totalCost}</div>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <div onClick={() => { this.props.setView('catalog', '{}'); }} className="mt-4 ml-3" >{'< Back To Catalogue'}</div>
          <h2>MY CART</h2>
          {/* <CartSummaryItem /> */}
          <h3 className='row align-items-center justify-content-center mt-7'>Nothing in Cart</h3>
          <div>ITEM TOTAL: $0</div>
        </div>
      );
    }

  }
}

export default CartSummary;
