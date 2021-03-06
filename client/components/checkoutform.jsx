import React from 'react';
import CheckoutCart from './checkout-cart';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      email: '',
      creditCardExp: '',
      creditCardCVC: '',
      nameValidate: true,
      creditCardValidate: true,
      zipCodeValidate: true,
      emailValidate: true,
      creditCardExpValidate: true,
      creditCardCVCValidate: true,
      inputFields: true,
      show: false
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.completeOrder = this.completeOrder.bind(this);
  }
  handleFormChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    if (name === 'name') {
      const pattern = /^[a-zA-Z]*\s?([a-zA-Z\\-]+\s)+[a-zA-Z\\-]+$/;
      if (pattern.test(value)) {
        this.setState({
          nameValidate: true,
          [name]: value
        });
      } else if (/^[\\a-zA-Z\s]{0,65}$/g.test(value)) {
        this.setState({
          nameValidate: false,
          [name]: value
        });
      } else {
        return;
      }
    }
    if (name === 'address') {
      this.setState({
        [name]: value
      });
    }
    if (name === 'city') {
      this.setState({
        [name]: value
      });
    }
    if (name === 'state') {
      this.setState({
        [name]: value.toUpperCase()
      });
    }
    if (name === 'creditCard') {
      if (value.length === 20) {
        return false;
      }
      const pattern = /^((?:4\d{3})|(?:5[1-5]\d{2})|(?:6011)|(?:3[68]\d{2})|(?:30[012345]\d))[-\s]?(\d{4})[-\s]?(\d{4})[-\s]?(\d{4}|3[4,7]\d{13})$/;

      if (pattern.test(value)) {
        this.setState({
          creditCardValidate: true,
          [name]: value
        });
      } else if (/^[\d\s]{0,20}$/g.test(value)) {
        let newValue = value.split('').join('');
        if (value.length === 4 || value.length === 9 || value.length === 14) {
          newValue += ' ';
        }
        if (value[value.length - 1] === ' ') {
          newValue = value.slice(0, -2);
        }
        this.setState({
          creditCardValidate: false,
          [name]: newValue
        });
      } else {
        return;
      }
    }
    if (name === 'zipCode') {
      if (value.length === 6) {
        return false;
      }
      const pattern = /^\d{5}$/;

      if (pattern.test(value)) {
        this.setState({
          zipCodeValidate: true,
          [name]: value
        });
      } else if (/^[\d]{0,5}$/g.test(value)) {
        this.setState({
          zipCodeValidate: false,
          [name]: value
        });
      } else {
        return;
      }
    }
    if (name === 'email') {
      const pattern = /^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/;

      if (pattern.test(value)) {
        this.setState({
          emailValidate: true,
          [name]: value
        });
      } else {
        this.setState({
          emailValidate: false,
          [name]: value
        });
      }
    }
    if (name === 'creditCardExp') {
      if (value.length === 6) {
        return false;
      }
      const pattern = /^((0[1-9])|(1[0-2]))\/(\d{2})$/;

      if (pattern.test(value)) {
        this.setState({
          creditCardExpValidate: true,
          [name]: value
        });
      } else if (/^[\d/]{0,7}$/g.test(value)) {
        this.setState({
          creditCardExpValidate: false,
          [name]: value
        });
      } else {
        return;
      }
    }
    if (name === 'creditCardCVC') {
      if (value.length === 5) {
        return false;
      }
      const pattern = /^\d{3,4}$/;

      if (pattern.test(value)) {
        this.setState({
          creditCardCVCValidate: true,
          [name]: value
        });
      } else if (/^[\d\s]{0,4}$/g.test(value)) {
        this.setState({
          creditCardCVCValidate: false,
          [name]: value
        });
      } else {
        return;
      }
    }
    this.setState({
      inputFields: true
    });
  }
  handleSubmit(e) {
    e.preventDefault();

    const { name, creditCard, creditCardExp, creditCardCVC, address, city, state, zipCode, email, nameValidate, creditCardValidate, zipCodeValidate, emailValidate, creditCardExpValidate, creditCardCVCValidate } = this.state;
    const validateInput = [name, creditCard, creditCardExp, creditCardCVC, address, city, state, zipCode, email];
    const validateArray = [nameValidate, creditCardValidate, zipCodeValidate, emailValidate, creditCardExpValidate, creditCardCVCValidate];

    for (let i = 0; i < validateArray.length; i++) {
      if (validateInput[i] === '' || validateInput[i] === '') {
        this.setState({
          inputFields: false
        });
        return;
      }
      if (!validateArray[i]) {
        return;
      }
    }
    if (this.state.inputFields) {
      this.completeOrder(this.props.cartState);
    }
  }
  completeOrder(order) {
    this.setState({
      name: '',
      creditCard: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      email: '',
      creditCardExp: '',
      creditCardCVC: ''
    });
    this.props.placeOrder(order);
  }
  render() {
    let cart = this.props.cartState;
    const itemCount = cart.reduce((runningCount, currentItemObject) => runningCount + parseFloat(currentItemObject.count), 0);
    const totalCost = cart.reduce((runningTotal, currentItemObject) => runningTotal + currentItemObject.price * currentItemObject.count, 0);
    const { name, creditCard, creditCardExp, creditCardCVC, address, city, state, zipCode, email, nameValidate, creditCardValidate, zipCodeValidate, emailValidate, creditCardExpValidate, creditCardCVCValidate } = this.state;

    return (
      <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7'>
            <form className='form' >
              <div className='payment-info'>
                <h3 className='mt-4 mb-2' style={{ 'color': '#f19e05e8', 'fontWeight': 'bold' }}>Checkout</h3>
                <div style={{ 'backgroundColor': 'white', 'borderRadius': 'calc(.25rem - 1px)' }}>
                  <div className='d-flex justify-content-between' style={{ 'height': '4rem', 'backgroundColor': 'gainsboro', 'borderRadius': 'calc(.25rem - 1px)' }}>
                    <h6 className='p-2 ml-1'>Payment Details</h6>
                    <div className='display-td'>
                      <img className='img-responsive pull-right p-2' src='http://i76.imgup.net/accepted_c22e0.png' style={{ 'width': '100%' }} alt='CC-payment-type-image'/>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <div className='mt-5 ml-2'>NAME AS DISPLAYED ON CARD</div>
                    <div className='form-group'>
                      {(nameValidate) ? null : <span className='ml-2' style={{ 'color': 'red' }}>Please enter your first and last name</span>}
                      <input name='name' className='form-control' type='text' datatype='name' maxLength='65' placeholder='Name On Card' value={name} onChange={this.handleFormChange} required></input>
                    </div>
                    <div className='mt-3 ml-2'>CARD NUMBER</div>
                    {(creditCardValidate) ? null : <span className='ml-2' style={{ 'color': 'red' }}>Please enter a valid credit card number</span>}
                    <div className='form-group d-flex justify-content-between'>
                      <input name='creditCard' className='form-control' type='text' datatype='card' maxLength='19' placeholder='0000 0000 0000 0000' value={creditCard} onChange={this.handleFormChange} required></input>
                      <span className='input-group-text'><i className='fa fa-credit-card'/></span>
                    </div>
                    <div>
                      <div className='form-goup d-flex justify-content-between align-items-center'>
                        <div className='mr-3 ml-2'>EXP DATE</div>
                        {(creditCardExpValidate) ? null : <span className='ml-2' style={{ 'color': 'red' }}>Please enter a valid expiration date</span>}
                        <input name='creditCardExp' className='form-control mt-3' type='tel' datatype='ccexpiry' placeholder='MM/YY' value={creditCardExp} onChange={this.handleFormChange} required></input>
                        <div className='m-3'>CVV CODE</div>
                        {(creditCardCVCValidate) ? null : <span className='ml-2' style={{ 'color': 'red' }}>Please enter a valid cvc number</span>}
                        <input name='creditCardCVC' className='form-control mt-3' type='text' datatype='cardCVC' maxLength='4' placeholder='CVC' value={creditCardCVC} onChange={this.handleFormChange} required></input>
                      </div>
                    </div>
                    <div className='mt-3 ml-2'>SHIPPING ADDRESS</div>
                    <div className='input-group-prepend'>
                      <textarea name='address' className='form-control' rows='4' type='tel' datatype='address' maxLength='42' placeholder='address' value={address} onChange={this.handleFormChange} required></textarea>
                    </div>
                  </div>
                  <div className='d-flex justify-content-around align-items-center mt-3'>
                    <div className='form-group'>
                      <div className='ml-2'>CITY</div>
                      <input name='city' className='form-control' type='text' datatype='city' maxLength='50' placeholder='city' value={city} onChange={this.handleFormChange} required></input>
                    </div>
                    <div className='form-group'>
                      <div className='ml-2'>STATE</div>
                      <input name='state' className='form-control' type='text' datatype='state' maxLength='2' placeholder='state' value={state} onChange={this.handleFormChange} required></input>
                    </div>
                    <div className='form-group'>
                      <div className='ml-2'>ZIP CODE</div>
                      {(zipCodeValidate) ? null : <span className='ml-2' style={{ 'color': 'red' }}>Please enter a valid zip code</span>}
                      <input name='zipCode' className='form-control' type='text' datatype='zip' maxLength='5' placeholder='00000' value={zipCode} onChange={this.handleFormChange} required></input>
                    </div>
                  </div>
                  <div className='mt-3 ml-2'>EMAIL</div>
                  <div className='form-group'>
                    {(emailValidate) ? null : <span className='ml-2' style={{ 'color': 'red' }}>Please enter a valid email</span>}
                    <input name='email' className='form-control' type='text' datatype='email' maxLength='320' placeholder='email' value={email} onChange={this.handleFormChange} required></input>
                  </div>
                </div>
                <div className='mt-3 mb-5'>
                  <div className='d-flex justify-content-end'>
                    <p className="mr-3">Please do not input any personal or sensitive information.</p>
                    <button className='btn btn-secondary checkoutBtn mr-2' onClick={() => { this.props.setView('catalog', {}); }}>CONTINUE SHOPPING</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='col-md-5'>
            <div className='d-flex justify-content-between align items-center mt-4'>
              <h3 style={{ 'color': '#f19e05e8', 'fontWeight': 'bold' }}>Cart</h3>
              <h5 style={{ 'color': 'white', 'backgroundColor': '#f19e05e8', 'borderRadius': '50%', 'height': '1.7rem', 'width': '1.7rem', 'border': 'none', 'textAlign': 'center' }}>{itemCount}</h5>
            </div>
            <div style={{ 'backgroundColor': 'white', 'borderRadius': 'calc(.25rem - 1px)' }}>
              {this.props.cartState.map(item => {
                return (
                  <CheckoutCart setView={this.props.setView} id={item.id} key={item.id} item={item} />
                );
              })}
            </div>
            <div className='d-flex justify-content-between align-items-center mt-3'>
              <h4>Total: ${totalCost.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</h4>
              <button type='submit' className='btn btn-primary' onClick={ this.handleSubmit }> PLACE ORDER</button>
            </div>
            {(this.state.inputFields) ? null : <span className='ml-2' style={{ 'color': 'red' }}>Please fill out form</span>}
          </div>
        </div>
      </div>
        <div className='d-flex justify-content-center align-items-center'>
          <h6 style={{ 'color': '#f19e05e8', 'fontWeight': 'bold', 'marginTop': '5vh', 'padding': '1rem', 'textAlign': 'center' }}>
            *disclaimer - Shop Tech is a web application built for demonstration purposes only and does not sell, provide, or distribute any products or services. Orders placed on Shop Tech will not be charged.
          </h6>
        </div>
      </>
    );
  }
}
export default CheckoutForm;
