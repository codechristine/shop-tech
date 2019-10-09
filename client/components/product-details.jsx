import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount(id) {
    fetch(`/api/products.php?id=${this.props.clicked}`)
      .then(response => response.json())
      .then(result => {
        this.setState({ product: result[0] });
      })
      .catch(error => console.error('fetch error:', error));
  }
  render() {

    if (this.state.product) {
      let image = this.state.product.img;
      let name = this.state.product.productName;
      let price = '$' + this.state.product.productPrice;
      let shortDescription = this.state.product.productDescription;
      let longDescription = <div className="text-wrapper"><LoremIpsum p={2} /> </div>;

      return (
        <div className='container'>
          <div onClick={() => { this.props.setView('catalog', '{}'); }} className="mt-4 ml-3" >{'< Back To Catalogue'}</div>
          <div className='media mb-3 mt-1' style={{ 'width': '60%' }}>

            <img className='mr-3 mt-4' style={{ 'height': '30rem' }} src={ image } />
            <div className='col-md-8'>
              <h2 className='mt-4'>{name}</h2>
              <h4 className='mt-2'>{ price }</h4>
              <p className='mt-3'>{ shortDescription }</p>
              <button type='button' className='btn btn-dark' onClick={() => { this.props.itemAddedToCart(this.state.product); }}>Add To Cart</button>
            </div>
          </div>
          <p className='media-body'>{ longDescription }</p>
        </div>
      );
    } else {
      return <h3>PAGE NOT FOUND</h3>;
    }
  }
}

export default ProductDetails;
