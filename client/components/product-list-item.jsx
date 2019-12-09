import React from 'react';

class ProductListItem extends React.Component {

  render() {
    const productDetails = () => this.props.setView('details', this.props.item);

    return (
      <div className='card m-2' style={{ 'width': '21rem' }}>
        <img className='card-img-top cursor-pointer' style={{ 'height': '18rem' }} src={this.props.item.image[0]} onClick={productDetails} />
        <div className='card-body'>
          <h5 className='card-title cursor-pointer' onClick={productDetails}>{this.props.item.name}</h5>
          <p className='card-text'>${this.props.item.price} USD</p>
          <p className='card-text'>{this.props.item.shortDescription}</p>
          <button type='button' className='btn btn-primary' onClick={ productDetails }>View Product Details</button>
        </div>
      </div>
    );
  }
}
export default ProductListItem;
