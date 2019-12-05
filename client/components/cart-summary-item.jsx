import React from 'react';

class CartSummaryItem extends React.Component {

  render() {
    if (this.props.items) {
      let { count, image, name, price, shortDescription } = this.props.items;

      return (
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='mt-3' style={{ 'width': '65%', 'backgroundColor': 'white', 'borderRadius': 'calc(.25rem - 1px)' }} >
              <div className='media mb-3 mt-1' style={{ 'width': '100%' }}>
                <button type='button' className='close ml-3' aria-label='close' onClick={ e => {
                  e.preventDefault();
                  this.props.delete(this.props.items.cartItemId);
                }} >
                  <span aria-hidden='true'>&times;</span>
                </button>
                <img className='ml-3 mt-4' style={{ 'height': '30%', 'width': '30%' }} src={image} />
                <div className='col-md-7 ml-4'>
                  <h4 className='mt-4'>{name}</h4>
                  <h5 className='mt-2'>{'$' + price} USD</h5>
                  <h6 className='mt-1'>Quantity: {count}</h6>
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
            <h2 className='m-2'>no items in cart</h2>
          </div>
        </div>
      );
    }
  }
}
export default CartSummaryItem;
