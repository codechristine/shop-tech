import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkoutform';
import Confirmation from './confirmationform';
import Modal from './modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      count: 0,
      show: true,
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
    this.toggleModal = this.toggleModal.bind(this);
  }
  getCartItems() {
    fetch('/api/cart.php')
      .then(response => response.json())
      .then(result => {
        let totalCount = 0;
        result.forEach(count => {
          totalCount += parseFloat(count.count);
        });
        this.setState({
          cart: result,
          count: totalCount
        });
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
        let updatedTotalCount = 0;
        let itemCount = 0;
        const updateCart = this.state.cart.filter(item => {
          itemCount = parseFloat(item.count);
          return item.cartItemId !== cartItemId;
        });
        for (var i = 0; i < updateCart.length; i++) {
          itemCount = updateCart[i].count;
          updatedTotalCount += parseFloat(itemCount);
        }
        if (this.state.cart.length === 1) {
          this.setState({
            cart: [],
            count: 0
          });
        } else {
          this.setState({
            cart: updateCart,
            count: updatedTotalCount
          });
        }
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
          count: 0,
          view: {
            name: 'confirmation',
            params: {}
          }
        });
      })
      .catch(error => console.error('fetch error:', error));
  }
  toggleModal() {
    this.setState({
      show: false
    });
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header cartItemCount={this.state.count} setView={this.setView} cartView={this.state.view.name.cart} />
          <div className='container'>
            <ProductList setView={this.setView} view={this.state.view.params} />
          </div>
          <Modal setView={this.setView} toggleModal={this.toggleModal} show={this.state.show} onClose={this.toggleModal} />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.count} setView={this.setView} cartView={this.state.view.name.cart} />
          <div className='container'>
            <ProductDetails setView={this.setView} clicked={this.state.view.params.id} itemAddedToCart={this.addToCart} toggleModal={this.toggleModal} />
          </div>
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header cartItemCount={this.state.count} setView={this.setView} cartView={this.state.view.name.cart} />
          <div className='container'>
            <CartSummary itemAddedToCart={this.addToCart} itemDeletedFromCart={this.deleteFromCart} setView={this.setView} cartState={this.state.cart} toggleModal={this.toggleModal} show={this.state.show} onClose={this.toggleModal} />
          </div>
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header cartItemCount={this.state.count} setView={this.setView} cartView={this.state.view.name.checkout} />
          <div className='container'>
            <CheckoutForm placeOrder={this.placeOrder} setView={this.setView} cartState={this.state.cart} />
          </div>
        </div>
      );
    } else if (this.state.view.name === 'confirmation') {
      return (
        <div>
          <Header cartItemCount={this.state.count} setView={this.setView} cartView={this.state.view.name.confirmation} />
          <div className='container'>
            <Confirmation setView={this.setView} />
          </div>
        </div>
      );
    }
  }
}
