import React from 'react';
import CheckoutCart from './checkout-cart';

class Confirmation extends React.Component {

  render() {

    let totalCount = 0;
    let totalCost = 0;

    this.props.cartState.forEach(product => {
      totalCount += parseFloat(product.count);
      totalCost += parseFloat(product.price);
    });

    if (this.props.cartState) {
      return (
        <>
          <h4 className='mt-5' style={{ 'textAlign': 'center', 'fontWeight': 'bold' }}>Thank you for your purchase! Confirmation #DHK024.</h4>
          <h5 style={{ 'textAlign': 'center' }}>Please note Shop Tech is a demo website and no real purchases were made.</h5>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <h3 className='mt-5 mb-2' style={{ 'color': '#f19e05e8', 'fontWeight': 'bold' }}>Order Summary</h3>
                <div style={{ 'backgroundColor': 'white', 'borderRadius': 'calc(.25rem - 1px)' }}>
                  <div className='align-items-center mt-3 p-2'>
                    <h5 style={{ 'fontWeight': 'bold' }}>Payment Summary</h5>
                    <h5 className='pt-2 pb-2'>Item Total: ${totalCost.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</h5>
                    <h6>Taxes: $0</h6>
                    <h6 style={{ 'borderBottom': '1px solid lightGrey' }}>Shipping: $0</h6>
                    <h5 className='mt-2'>Order Total: ${totalCost.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</h5>
                  </div>
                </div>
              </div>
              <div className='col-md-8'>
                <div className='' style={{ 'backgroundColor': 'white', 'borderBottom': '1px solid lightGrey', 'borderRadius': 'calc(.25rem - 1px)', 'marginTop': '6rem' }}>
                  <div className='d-flex justify-content-between align-items-center p-2'>
                    <h5 style={{ 'fontWeight': 'bold' }}>Your Item(s)</h5>
                    <h5 style={{ 'color': 'white', 'backgroundColor': '#f19e05e8', 'borderRadius': '50%', 'height': '1.7rem', 'width': '1.7rem', 'border': 'none', 'textAlign': 'center' }}>{totalCount}</h5>
                  </div>
                  {this.props.cartState.map(item => {
                    return (
                      <CheckoutCart setView={this.props.setView} id={item.id} key={item.id} item={item} />
                    );
                  })}
                </div>
                <div className='d-flex justify-content-end mt-2'>
                  <button className='btn btn-primary checkoutBtn' onClick={this.props.emptyCart}>CONTINUE SHOPPING</button>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <div style={{ 'color': '#f19e05e8', 'fontWeight': 'bold', 'marginTop': '30vh', 'padding': '1rem' }}>*disclaimer - Shop Tech is a web application built for demonstration purposes only and does not sell, provide, or distribute any products or services. Orders placed on Shop Tech will not be charged. Please do not input any personal information.</div>
          </div>
        </>
      );
    }
  }
}
export default Confirmation;
