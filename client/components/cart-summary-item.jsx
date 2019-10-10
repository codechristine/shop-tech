import React from 'react';

class CartSummaryItem extends React.Component {

  render() {
    return (
      <div className='container' >
        <div>this.props.items.image</div>
        <div>this.props.items.name</div>
        <div>this.props.items.price</div>
        <div>this.props.items.shortDescription</div>
      </div>
    );
  }
}

export default CartSummaryItem;
