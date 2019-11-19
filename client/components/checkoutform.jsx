import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: null,
      name: '',
      creditCard: '',
      shippingAddress: '',
      creditCardExp: '',
      creditCardCVC: '',
      sameAsBilling: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditCardChange = this.handleCreditCardChange.bind(this);
    this.handleShippingAddressChange = this.handleShippingAddressChange.bind(this);
    this.handleCreditCardExpChange = this.handleCreditCardExpChange.bind(this);
    this.handleCreditCardCVCChange = this.handleCreditCardCVCChange.bind(this);
    this.handleIsSameAsBillingChange = this.handleIsSameAsBillingChange.bind(this);
    this.completeOrder = this.completeOrder.bind(this);
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
  handleCreditCardExpChange(event) {
    this.setState({
      creditCardExp: event.target.value
    });
  }
  handleCreditCardCVCChange(event) {
    this.setState({
      creditCardCVC: event.target.value
    });
  }
  handleShippingAddressChange(event) {
    this.setState({
      shippingAddress: event.target.value
    });
  }
  handleIsSameAsBillingChange(event) {
    this.setState({
      sameAsBilling: true
    });
  }
  completeOrder(order) {

    this.props.placeOrder(order);

    this.setState({
      cart: [],
      name: '',
      creditCard: '',
      shippingAddress: '',
      creditCardExp: '',
      creditCardCVC: '',
      sameAsBilling: false
    });
  }
  render() {

    let totalCost = 0;
    this.props.cartState.forEach(price => {
      totalCost += parseFloat(price.price);
    });

    return (
      <form className='container'>
        <h4 className='mt-5' style={{ 'color': 'white' }}>Checkout</h4>
        <h5 className='mb-3' style={{ 'color': 'white' }}>Order Total: ${totalCost}</h5>
        <div className='col-md-8 offset-2'>
          <div style={{ 'backgroundColor': 'white' }}>
            <div className='d-flex justify-content-between align-items-center mt-4' style={{ 'height': '4rem', 'backgroundColor': 'gainsboro' }}>
              <h6 className='p-2 ml-1'>Payment Details</h6>
              <div className='display-td' >
                <img className='img-responsive pull-right p-2' src='http://i76.imgup.net/accepted_c22e0.png' />
              </div>
            </div>
            <div className='mt-2'>
              <div className='mt-5 mb-1 ml-2'>CARD HOLDER</div>
              <div className='input-group-prepend'>
                <input type='text' className='form-control mt-2' value={this.state.name} placeholder='Name On Card' onChange={this.handleNameChange}></input>
              </div>
              <div className='mt-3 mb-1 ml-2'>CARD NUMBER</div>
              <div className='input-group-prepend'>
                <input type='tel' name='cc-number' className='form-control mt-2' pattern='[0-9]' maxLength='16' value={this.state.creditCard} placeholder='0000 0000 0000 0000' onChange={this.handleCreditCardChange}></input>
                <span className='input-group-text'><i className='fa fa-credit-card' /></span>
              </div>
              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='m-2'>EXP DATE</div>
                  <input className='form-control mt-3' type='tel' name='cardExpiry' autoComplete='cc-exp' value={this.state.creditCardExp} placeholder='MM / YY' onChange={this.handleCreditCardExpChange}></input>
                  <div className='mt-2 m-2'>CVV CODE</div>
                  <input className='form-control mt-3' type='number' name='cardCVC' autoComplete='cc-cvc' value={this.state.creditCardCVC} placeholder='CVC' onChange={this.handleCreditCardCVCChange}></input>
                </div>
              </div>
              <div className='mt-3 mb-1 ml-2'>SHIPPING ADDRESS</div>
              <div className='input-group-prepend' >
                <textarea type='text' className='form-control mt-2' rows='7' value={this.state.shippingAddress} placeholder='Shipping Address' onChange={this.handleShippingAddressChange}></textarea>
              </div>
            </div>
            <div className='form-check ml-2'>
              <input className='form-check-input is-valid' type='checkbox' value='' id='defaultCheck' required onChange={this.handleIsSameAsBillingChange}></input>
              <label className='form-check-label' htmlFor='defaultCheck'>
                billing same as shipping
              </label>
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='mt-3 mb-5 cursor-pointer' style={{ 'color': 'white' }} onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Continue Shopping'}</div>
            <button className='btn btn-primary mt-3 mb-5' onClick={() => { this.completeOrder(this.props.cartState); }}> PLACE ORDER</button>
          </div>
        </div>
      </form>
    );
  }
}
export default CheckoutForm;
