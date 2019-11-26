
import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkoutform';
import Confirmation from './confirmationform';

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
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
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
      .then(productAdded => {
        this.getCartItems();
      })
      .catch(error => console.error('fetch error:', error));
  }
  deleteFromCart(cartItemId) {
    fetch('/api/cart.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: cartItemId
      })
    })
      .then(response => response.json())
      .then(deletedItem => {
        const updateCart = this.state.cart.filter(item => {
          return item.cartItemId !== cartItemId;
        });
        this.setState({ cart: updateCart });
      })
      .catch(error => console.error('fetch error:', error));
  }
  placeOrder(order) {
    order.cart = this.state.cart;

    fetch('/api/orders.php', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(response => response.json())
      .then(ordered => {
        this.setState({
          cart: [],
          view: {
            name: 'confirmation',
            params: {}
          }
        });
      })
      .catch(error => console.error('fetch error:', error));
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className='container'>
          <Header cartItemCount={this.state.cart.length} setView={this.setView} cartView={this.state.view.name.cart} />
          <ProductList setView={this.setView} view={this.state.view.params} />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div className='container'>
          <Header cartItemCount={this.state.cart.length} setView={this.setView} cartView={this.state.view.name.cart} />
          <ProductDetails setView={this.setView} clicked={this.state.view.params.id} itemAddedToCart={this.addToCart} />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div className='container'>
          <Header cartItemCount={this.state.cart.length} setView={this.setView} cartView={this.state.view.name.cart} />
          <CartSummary itemAddedToCart={this.addToCart} itemDeletedFromCart={this.deleteFromCart} setView={this.setView} cartState={this.state.cart} />
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div className='container'>
          <Header cartItemCount={this.state.cart.length} setView={this.setView} cartView={this.state.view.name.checkout}/>
          <CheckoutForm placeOrder={this.placeOrder} setView={this.setView} cartState={this.state.cart} />
        </div>
      );
    } else if (this.state.view.name === 'confirmation') {
      return (
        <div className='container'>
          <Header cartItemCount={this.state.cart.length} setView={this.setView} cartView={this.state.view.name.confirmation} />
          <Confirmation setView={this.setView} />
        </div>
      );
    }
  }
}
