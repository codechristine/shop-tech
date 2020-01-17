import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }
  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(result => {
        this.setState({ products: result });
      })
      .catch(error => console.error('fetch error:', error));
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    if (this.state.products.length > 0) {
      return (
        <>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='row'>
              {this.state.products.map(item => {
                return (
                  <ProductListItem setView={this.props.setView} id={item.id} key={item.id} item={item} />
                );
              })}
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <h6 style={{ 'color': '#07617d', 'fontWeight': 'bold', 'marginTop': '5vh', 'padding': '1rem', 'textAlign': 'center' }}>
              *disclaimer - Shop Tech is a web application built for demonstration purposes only and does not sell, provide, or distribute any products or services. Orders placed on Shop Tech will not be charged.
            </h6>
          </div>
        </>
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
export default ProductList;
