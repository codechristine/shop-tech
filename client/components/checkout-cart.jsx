import React from 'react';

class CheckoutCart extends React.Component {

  render() {

    const { name, price, count } = this.props.item;
    if (this.props.item) {
      return (
        <div className='p-2' style={{ 'borderBottom': '1px solid lightGrey', 'borderRadius': 'calc(.25rem - 1px)' }}>
          <div className='d-flex justify-content-around align-items-center'>
            <h5>{name}</h5>
            <h5>${price}</h5>
          </div>
          <div className='pl-5'>
            <h6>Quantity:{count}</h6>
          </div>
        </div>
      );
    }
  }
}
export default CheckoutCart;
