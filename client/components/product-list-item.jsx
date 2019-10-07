import React from 'react';

class ProductListItem extends React.Component {
  render() {
    // eslint-disable-next-line no-console
    console.log('props', this.props);
    return (
      <div>
        <div>{this.props.product.image}</div>
        <div>{this.props.product.name}</div>
        <div>{this.props.product.price}</div>
        <div>{this.props.product.description}</div>
      </div>
    );
  }
}
export default ProductListItem;
