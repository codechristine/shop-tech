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
      let image = this.state.product.image[1];
      let name = this.state.product.name;
      let price = '$' + this.state.product.price;
      let shortDescription = this.state.product.shortDescription;
      let longDescription = <div className='text-wrapper'><LoremIpsum p={2} /> </div>;

      return (
        <div className='container' style={{ 'backgroundColor': 'white', 'width': '90%', 'height': '70%' }}>
          <div className='mt-4 ml-3 cursor-pointer' onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Back To Catalog'}</div>
          <div className='media mb-3 mt-1' style={{ 'width': '70%', 'height': '50%' }}>
            <img className='mr-2 mt-4 offset-1' style={{ 'height': '18rem' }} src={ image } />
            <div className='col-md-6 ml-5'>
              <h2 className='mt-5'>{name}</h2>
              <h4 className='mt-2'>{price}</h4>
              <p className='mt-3 text-wrap'>{shortDescription}</p>
              <button type='button' className='btn btn-primary' onClick={() => { this.props.itemAddedToCart(this.state.product); }}>Add To Cart</button>
            </div>
          </div>
          <div className='media-body col-md-10 ml-5'>{longDescription}</div>
        </div>
      );
    } else {
      return (
        <div className='container' style={{ 'backgroundColor': 'white', 'width': '90%', 'height': '70%' }}>
          <div className='mt-4 ml-3 cursor-pointer' onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Back To Catalog'}</div>
          <h3 className='row align-items-center justify-content-center mt-5'>PAGE NOT FOUND</h3>
        </div>
      );
    }
  }
}
export default ProductDetails;
