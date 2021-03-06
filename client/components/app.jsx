import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkoutform';
import Confirmation from './confirmationform';
import AcknowlegeModal from './acknowlegde-modal';

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
    this.incrementItem = this.incrementItem.bind(this);
    this.decrementItem = this.decrementItem.bind(this);
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
        const updateCart = this.state.cart.filter(item => {
          return item.cartItemId !== cartItemId;
        });
        this.setState({
          cart: updateCart
        });
      })
      .catch(error => console.error('fetch error:', error));
  }
  incrementItem(cartItemId) {
    const cart = this.state.cart.slice();

    const increment = cart.findIndex(item => cartItemId === item.id);

    if (increment !== -1) {
      cart[increment].count = parseFloat(cart[increment].count) + 1;

      fetch('/api/cart.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: cartItemId, quantity: cart[increment].count })
      })
        .then(response => response.json())
        .then(increment => {
          let incrementCart = parseFloat(this.state.count) + 1;
          this.setState({
            count: incrementCart,
            cart
          });
        })
        .catch(error => console.error('fetch error:', error));
    }
  }
  decrementItem(cartItemId) {
    const cart = this.state.cart.slice();

    const decrement = cart.findIndex(item => cartItemId === item.id);

    if (decrement !== -1) {
      cart[decrement].count = parseFloat(cart[decrement].count) - 1;

      fetch('/api/cart.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: cartItemId, quantity: cart[decrement].count })
      })
        .then(response => response.json())
        .then(decrement => {
          let decrementCart = parseFloat(this.state.count) - 1;
          if (decrementCart < 0) {
            return;
          }
          this.setState({
            count: decrementCart,
            cart
          });
        })
        .catch(error => console.error('fetch error:', error));
    }
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
          cart: ordered,
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
        <>
        <div className='container-fluid'>
          <Header cartItemCount={this.state.count} setView={this.setView} cartView={this.state.view.name.cart} />
        </div>
          <div className='container-fluid'>
            <ProductList setView={this.setView} view={this.state.view.params} />
          </div>
          <AcknowlegeModal show={this.state.show} onClose={this.toggleModal} />
        </>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <>
        <div className='container-fluid'>
          <Header cartItemCount={this.state.count} setView={this.setView} cartView={this.state.view.name.cart} />
        </div>
          <div className='container-fluid'>
            <ProductDetails setView={this.setView} clicked={this.state.view.params.id} itemAddedToCart={this.addToCart} toggleModal={this.toggleModal} />
          </div>
        </>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div className='container-fluid'>
          <Header cartItemCount={this.state.count} setView={this.setView} cartView={this.state.view.name.cart} />
          <CartSummary itemDeletedFromCart={this.deleteFromCart} setView={this.setView} cartState={this.state.cart} updateCart={this.getCartItems} increment={this.incrementItem} decrement={this.decrementItem} toggleModal={this.toggleModal} show={this.state.show} onClose={this.toggleModal} />
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div className='container-fluid'>
          <Header cartItemCount={this.state.count} setView={this.setView} cartView={this.state.view.name.checkout} />
          <CheckoutForm placeOrder={this.placeOrder} setView={this.setView} cartState={this.state.cart} />
        </div>
      );
    } else if (this.state.view.name === 'confirmation') {
      return (
        <div className='container-fluid'>
          <Header cartItemCount={this.state.count} setView={this.setView} cartView={this.state.view.name.confirmation} />
          <Confirmation setView={this.setView} cartState={this.state.cart} emptyCart={this.deleteFromCart} />
        </div>
      );
    }
  }
}
