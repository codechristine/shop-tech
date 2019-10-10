import React from 'react';

class CartSummaryItem extends React.Component {

  render() {
    return (
      <div item={this.props.itemAddedToCart} >
        <div>this.props.showItems.image</div>
        <div>this.props.showItems.name</div>
        <div>this.props.showItems.price</div>
        <div>this.props.showItems.shortDescription</div>
      </div>
    );
  }
}

export default CartSummaryItem;
