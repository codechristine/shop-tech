import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.setView = this.setView.bind(this);
  }
  getCartItems() {
    fetch('/api/cart.php')
      .then(response => response.json())
      .then(result => {
        this.setState({ cart: result });
      })
      .catch(error => console.error('fetch error:', error));
  }
  setView(name, params) {
    let userView = {
      name: name,
      params: params
    };
    this.setState({ view: userView });
  }
  componentDidMount() {
    this.getCartItems();
  }
  addToCart(product) {
    fetch('/api/cart.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(addedProduct => {
        let cartArray = [...this.state.cart];
        cartArray.push(addedProduct);
        this.setState({ cart: cartArray });
      })
      .catch(error => console.error('fetch error:', error));
  }
  render() {

    if (this.state.view.name === 'catalog') {
      return (
        <div className='container'>
          <Header cartItemCount={this.state.cart.length} />
          <ProductList cartItemCount={this.addToCart} setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div className='container'>
          <Header cartItemCount={this.state.cart.length} />
          <ProductDetails setView={this.setView} clicked={this.state.view.params.id} itemAddedToCart={ this.addToCart }/>
        </div>
      );
    }
  }
}
