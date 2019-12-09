import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount() {
    const id = this.props.clicked;

    fetch(`/api/products.php?id=${id}`)
      .then(response => response.json())
      .then(result => {
        this.setState({ product: result });
      })
      .catch(error => console.error('fetch error:', error));
  }
  render() {
    if (this.state.product) {
      let firstImage = this.state.product.image[0];
      let secondImage = this.state.product.image[1];
      let thirdImage = this.state.product.image[2];
      let name = this.state.product.name;
      let price = '$' + this.state.product.price;
      let shortDescription = this.state.product.shortDescription;
      let longDescription = this.state.product.longDescription;

      return (
        <div className='container' style={{ 'backgroundColor': 'white', 'width': '100vw', 'borderRadius': 'calc(.25rem - 1px)' }}>
          <div className='mt-3 ml-3 pt-4 cursor-pointer' style={{ 'color': '#017BFD' }} onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Back To Catalog'}</div>
          <div className='d-flex justify-content-around align-items-center'>
            <div className='media' style={{ 'height': '30vh' }}>
              <img className='mt-4' style={{ 'height': '24vh' }} src={firstImage} />
              <div className='col-md-6'>
                <h2 className='mt-5'>{name}</h2>
                <h4 className='mt-2'>{price} USD</h4>
                <p className='mt-3 text-wrap'>{shortDescription}</p>
                <button type='button' className='btn btn-primary' onClick={() => { this.props.itemAddedToCart(this.state.product); }}>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='d-flex justify-content-left mb-4'>
              <img className='detailsImages' style={{ 'height': '5rem', 'backgroundColor': 'grey' }} src={secondImage} />
              <img className='detailsImages' style={{ 'height': '5rem' }} src={thirdImage} />
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='media-body col-md-10 mb-5'>{longDescription}</div>
          </div>
          <div className='mb-4' style={{ 'float': 'right', 'color': '#f19e05e8', 'fontWeight': 'bold' }}>*disclaimer - this is a demo site.</div>
        </div>
      );
    } else {
      return (
        <div className='container' style={{ 'backgroundColor': 'white', 'width': '100vw', 'borderRadius': 'calc(.25rem - 1px)' }}>
          <div className='mt-3 ml-3 pt-4 cursor-pointer' style={{ 'color': '#017BFD' }} onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Back To Catalog'}</div>
          <div className='row align-items-center justify-content-center mt-5'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          </div>
          <div className='mb-4' style={{ 'float': 'right', 'color': '#f19e05e8', 'fontWeight': 'bold' }}>*disclaimer - this is a demo site.</div>
        </div>
      );
    }
  }
}
export default ProductDetails;
