import React from 'react';

class ProductListItem extends React.Component {

  render() {
    const productDetails = () => this.props.setView('details', this.props.item);

    if (this.props.item) {
      return (
        <div className='col-md-3'>
          <div className='card' >
            {/* style={{ 'width': '22.5rem' }} */}
            <img className='card-img-top cursor-pointer' style={{ 'height': '20rem' }} src={this.props.item.image[0]} onClick={productDetails} />
            <div className='card-body'>
              <h5 className='card-title cursor-pointer' style={{ 'fontWeight': 'bold' }} onClick={productDetails}>{this.props.item.name}</h5>
              <p className='card-text'>${this.props.item.price} USD</p>
              <p className='card-text'>{this.props.item.shortDescription}</p>
              <button type='button' className='btn btn-primary' onClick={ productDetails }>View Product Details</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
        <div className='container'>
          <div className='row align-items-center justify-content-center mt-5'>
            <div className='lds-ring'><div></div><div></div><div></div><div></div></div>
          </div>
        </div>
      </>
      );
    }
  }
}
export default ProductListItem;
