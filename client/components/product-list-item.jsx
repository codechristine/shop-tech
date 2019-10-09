import React from 'react';

class ProductListItem extends React.Component {
  render() {

    let formatPrice = this.props.item.productPrice;
    formatPrice = '$' + formatPrice.toFixed(2);

    return (
      <div className='card m-2' style={{ 'width': '21rem' }}>
        <img className='card-img-top' style={{ 'height': '18rem' }} src={this.props.item.img} />
        <div className='card-body'>
          <h5 className='card-title'>{this.props.item.productName}</h5>
          <p className='card-text'>{formatPrice}</p>
          <p className='card-text'>{this.props.item.productDescription}</p>
          <button type='button' className='btn btn-dark' onClick={() => { this.props.add(this.props.item); }}>Add To Cart</button>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
