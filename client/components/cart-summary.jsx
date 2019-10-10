import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {

  render() {

    if (this.props.cart) {
      return (
        <div className='container'>
          <div onClick={() => { this.props.setView('catalog', '{}'); }} className="mt-4 ml-3" >{'< Back To Catalogue'}</div>
          <h2>MY CART</h2>
          <CartSummaryItem showItems={this.props.cartClicked}/>
          <div>ITEM TOTAL:</div>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <div onClick={() => { this.props.setView('catalog', '{}'); }} className="mt-4 ml-3" >{'< Back To Catalogue'}</div>
          <h2>MY CART</h2>
          <CartSummaryItem />
          <h3 className='row align-items-center justify-content-center mt-7'>Nothing in Cart</h3>
          <div>ITEM TOTAL: $0</div>
        </div>
      );
    }

  }
}

export default CartSummary;
