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
    return (
      <div className='row mt-3'>
        {this.state.products.map(item => {
          return (
            <ProductListItem setView={this.props.setView} id={item.id} key={item.id} item={item} />
          );
        })}
      </div>
    );
  }
}
export default ProductList;
