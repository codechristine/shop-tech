import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(result => {
        // eslint-disable-next-line no-console
        console.log(result);
        this.setState({ products: result });
      })
      .catch(error => console.error('fetch error:', error));
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {

    return (
      <div className='col-md-5'>
        <table className='table table-hover table-dark'>
          <thead className='thead-light'>
            <tbody>
              <ProductListItem product={ this.state.products } />
              {/* { this.props.products.map(item => {
                // eslint-disable-next-line no-console
                console.log(item);
                return <ProductListItem key={item.id} product={ item } />;
              })} */}
            </tbody>
          </thead>
        </table>
      </div>

    );
  }
}
export default ProductList;
