import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {

  render() {
    let cart = this.props.cartState;
    const itemCount = cart.reduce((runningCount, currentItemObject) => runningCount + parseFloat(currentItemObject.count), 0);
    const totalCost = cart.reduce((runningTotal, currentItemObject) => runningTotal + currentItemObject.price * currentItemObject.count, 0);

    if (this.props.cartState.length !== 0) {
      return (
        <>
          <div className='container'>
            <h3 className='mt-4 mb-2' style={{ 'color': '#f19e05e8', 'fontWeight': 'bold' }}>Shopping Cart</h3>
            {this.props.cartState.map((product, index) => {
              return <CartSummaryItem key={index} items={product} cartState={this.props.cartState} setView={this.props.setView} updateCart={this.props.updateCart} delete={this.props.itemDeletedFromCart} increment={this.props.increment} decrement={this.props.decrement} toggleModal={this.props.toggleModal} show={this.props.show} onClose={this.props.toggleModal} />;
            })}
            <div className='d-flex justify-content-between align-items-center mt-3 mb-5'>
              <h4 className='total'>Cart Total ({itemCount} Items): ${totalCost.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</h4>
              <div className='d-flex justify-content-between align-items-center'>
                <button className='btn btn-secondary checkoutBtn mr-2' onClick={() => { this.props.setView('catalog', {}); }}>CONTINUE SHOPPING</button>
                <button className='btn btn-primary checkoutBtn' onClick={() => { this.props.setView('checkout', '{}'); }}>CHECKOUT</button>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <h6 style={{ 'color': '#f19e05e8', 'fontWeight': 'bold', 'marginTop': '20vh', 'padding': '1rem', 'textAlign': 'center' }}>
              *disclaimer - Shop Tech is a web application built for demonstration purposes only and does not sell, provide, or distribute any products or services. Orders placed on Shop Tech will not be charged.
            </h6>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className='container mt-2'>
            <h3 className='mt-5 mb-2' style={{ 'color': '#f19e05e8', 'fontWeight': 'bold' }}>Shopping Cart</h3>
            <div className='container mt-2' style={{ 'backgroundColor': 'white', 'borderRadius': '0.25rem', 'borderBottom': '2px solid lightGrey' }}>
              <div className='row p-4'>
                <h4 className='mt-1'>There are no items in your cart</h4>
              </div>
            </div>
            <div className='d-flex justify-content-end mt-3 mb-5'>
              <button className='btn btn-secondary checkoutBtn mr-2' onClick={() => { this.props.setView('catalog', {}); }}>CONTINUE SHOPPING</button>
              <button className='btn btn-secondary' style={{ 'border': '0.25px solid lightGrey', 'backgroundColor': '#eeee', 'color': 'lightGrey' }}>CHECKOUT</button>
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <h6 style={{ 'color': '#f19e05e8', 'fontWeight': 'bold', 'marginTop': '50vh', 'padding': '1rem', 'textAlign': 'center' }}>
              *disclaimer - Shop Tech is a web application built for demonstration purposes only and does not sell, provide, or distribute any products or services. Orders placed on Shop Tech will not be charged.
            </h6>
          </div>
        </>
      );
    }
  }
}
export default CartSummary;
