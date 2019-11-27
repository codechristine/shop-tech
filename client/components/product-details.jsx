import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

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
      let longDescription = <div className='text-wrapper mb-3'><LoremIpsum p={3} /> </div>;

      return (
        <div className='container' style={{ 'backgroundColor': 'white', 'width': '93%', 'height': '100vh', 'borderRadius': 'calc(.25rem - 1px)' }}>
          <div className='mt-3 ml-3 pt-4 cursor-pointer' onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Back To Catalog'}</div>
          <div className='media mt-1' style={{ 'width': '100%', 'height': '29%' }}>
            <img className='mt-4 offset-1' style={{ 'height': '79%' }} src={firstImage} />
            <div className='col-md-6 ml-5'>
              <h2 className='mt-5'>{name}</h2>
              <h4 className='mt-2'>{price} USD</h4>
              <p className='mt-3 text-wrap'>{shortDescription}</p>
              <button type='button' className='btn btn-primary' onClick={() => { this.props.itemAddedToCart(this.state.product); }}>Add To Cart</button>
            </div>
          </div>
          <div className='d-flex justify-content-left offset-1 mb-4'>
            <img className='m-2 ml-5' style={{ 'height': '5rem' }} src={secondImage} />
            <img className='m-2' style={{ 'height': '5rem' }} src={thirdImage} />
          </div>
          <div className='d-flex justify-content-center'>
            <div className='media-body col-md-10'>{longDescription}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container' style={{ 'backgroundColor': 'white', 'width': '93%', 'height': '100vh', 'borderRadius': 'calc(.25rem - 1px)' }}>
          <div className='mt-3 ml-3 pt-4 cursor-pointer' onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Back To Catalog'}</div>
          <h3 className='row align-items-center justify-content-center mt-5'>PAGE NOT FOUND</h3>
        </div>
      );
    }
  }
}
export default ProductDetails;
