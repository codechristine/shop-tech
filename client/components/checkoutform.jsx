import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditCardChange = this.handleCreditCardChange.bind(this);
    this.handleShippingAddressChange = this.handleShippingAddressChange.bind(this);
  }
  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleCreditCardChange(event) {
    this.setState({
      creditCard: event.target.value
    });
  }
  handleShippingAddressChange(event) {
    this.setState({
      shippingAddress: event.target.value
    });
  }
  render() {

    return (
      <form className='container'>
        <h3>Checkout</h3>
        <h4>Order Total: $</h4>
        <div className=''>
          <div>Name:
            <input type='text' value={this.state.name} onChange={this.handleNameChange}></input>
          </div>
          <label>Credit Card:
            <input type='text' value={this.state.creditCard} onChange={this.handleCreditCardChange}></input>
          </label>
          <label>Shipping Address:
            <input type='text' value={this.state.shippingAddress} onChange={this.handleShippingAddressChange}></input>
          </label>
          <button onClick={() => { this.props.setView('catalog', '{}'); }}>Place Order</button>
        </div>
      </form>
    );
  }
}

export default CheckoutForm;
