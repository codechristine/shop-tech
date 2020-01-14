import React from 'react';

class CheckoutCart extends React.Component {

  render() {

    const { name, price, count } = this.props.item;
    if (this.props.item) {
      return (
        <div className='p-2' style={{ 'borderBottom': '1px solid lightGrey', 'borderRadius': 'calc(.25rem - 1px)' }}>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='pl-2'>{name}</h5>
            <h5 className='pl-2'>${price}</h5>
          </div>
          <div className='d-flex justify-content-start'>
            <div className='pl-2'>
              <h6>Quantity: {count}</h6>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default CheckoutCart;
