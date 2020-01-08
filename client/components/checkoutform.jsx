import React from 'react';
// import ConfirmPlaceOrderModal from './place-order-modal';

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
      show: false
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.completeOrder = this.completeOrder.bind(this);
    // this.openModal = this.openModal.bind(this);
    // this.confirmOrder = this.confirmOrder.bind(this);
    // this.cancelModal = this.cancelModal.bind(this);
  }
  handleFormChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'name') {
      // const pattern = /^[a-zA-Z]+([a-zA-Z]\s*)*$/;
      // const pattern = /^[a-z]*\s?([a-z\\-]+\s)+[a-z\\-]+$/;
      // const pattern = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/;
      const pattern = /^[a-z,.'-]+$/;

      if (pattern.test(value)) {
        this.setState({
          nameValidate: true,
          [name]: value
        });
      } else {
        this.setState({
          nameValidate: false,
          [name]: value
        });
      }
    }
    if (name === 'creditCard') {
      // const pattern = /^((4\d{3})|(5[1-5]\d{2})|(6011))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/;
      const pattern = /^((?:4\d{3})|(?:5[1-5]\d{2})|(?:6011)|(?:3[68]\d{2})|(?:30[012345]\d))[-]?(\d{4})[-]?(\d{4})[-]?(\d{4}|3[4,7]\d{13})$/;
      if (pattern.test(value)) {
        this.setState({
          nameValidate: true,
          [name]: value
        });
      } else {
        this.setState({
          nameValidate: false,
          [name]: value
        });
      }
    }
    if (name === 'zipCode') {
      const pattern = /^\d{5}$/;

      if (pattern.test(value)) {
        this.setState({
          nameValidate: true,
          [name]: value
        });
      } else {
        this.setState({
          nameValidate: false,
          [name]: value
        });
      }
    }
    if (name === 'email') {
      // const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      const pattern = /^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/;

      if (pattern.test(value)) {
        this.setState({
          nameValidate: true,
          [name]: value
        });
      } else {
        this.setState({
          nameValidate: false,
          [name]: value
        });
      }
    }
    if (name === 'creditCardExp') {
      const pattern = /^((0[1-9])|(1[0-2]))\/(\d{2})$/;

      if (pattern.test(value)) {
        this.setState({
          nameValidate: true,
          [name]: value
        });
      } else {
        this.setState({
          nameValidate: false,
          [name]: value
        });
      }
    }
    if (name === 'creditCardCVC') {
      const pattern = /^\d{3,4}$/;

      if (pattern.test(value)) {
        this.setState({
          nameValidate: true,
          [name]: value
        });
      } else {
        this.setState({
          nameValidate: false,
          [name]: value
        });
      }
    }
  }
  handleSubmit(e) {
    e.preventDefault();
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
  // openModal() {
  //   this.setState({
  //     show: true
  //   });
  // }
  // confirmOrder(order) {
  //   this.props.placeOrder(order);
  //   this.completeOrder(this.props.cartState);

  //   this.setState({
  //     show: false
  //   });
  // }
  // cancelModal() {
  //   this.setState({
  //     show: false
  //   });
  // }
  render() {
    let totalCost = 0;
    this.props.cartState.forEach(price => {
      totalCost += parseFloat(price.price);
    });

    const { name, creditCard, creditCardExp, creditCardCVC, address, city, state, zipCode, email, nameValidate, creditCardValidate, zipCodeValidate, emailValidate, creditCardExpValidate, creditCardCVCValidate } = this.state;

    return (
      <>
      <div className='checkout'>
        <div className='mt-3 ml-3 pt-4 cursor-pointer' style={{ 'color': '#017BFD' }} onClick={() => { this.props.setView('cart', '{}'); }}>{'< Back To Cart'}</div>
        <form className='container' onSubmit={this.handleSubmit}>
          <h3 className='mt-2 ml-2' style={{ 'color': '#f19e05e8' }}>Checkout</h3>
          <h5 className='mt-2 mb-3 ml-2'>Order Total: ${totalCost} USD</h5>
          <div className='d-flex justify-content-center'>
            <div className='col-md-8'>
              <div className='mt-3' style={{ 'backgroundColor': 'white', 'borderRadius': 'calc(.25rem - 1px)' }}>
                <div className='d-flex justify-content-between align-items-center mt-4' style={{ 'height': '4rem', 'backgroundColor': 'gainsboro', 'borderRadius': 'calc(.25rem - 1px)' }}>
                  <h6 className='p-2 ml-1'>Payment Details</h6>
                  <div className='display-td'>
                    <img className='img-responsive pull-right p-2' src='http://i76.imgup.net/accepted_c22e0.png' style={{ 'width': '100%' }}/>
                  </div>
                </div>
                <div className='mt-2'>
                  <div className='mt-5 mb-1 ml-2'>CARD HOLDER</div>
                  <div className='form-group'>
                    {(nameValidate) ? null : <span style={{ 'color': 'red' }}>Please enter a valid name</span>}
                    <input name='name' className='form-control mt-2' type='text' datatype='name' maxLength='65' placeholder='Name On Card' value={name} onChange={this.handleFormChange} required></input>
                  </div>
                  <div className='mt-3 mb-1 ml-2'>CARD NUMBER</div>
                  <div className='form-group d-flex justify-content-between'>
                    {(creditCardValidate) ? null : <span style={{ 'color': 'red' }}>Please enter a valid credit card number</span>}
                    <input name='creditCard' className='form-control mt-2' type='tel' datatype='card' maxLength='19' placeholder='0000 0000 0000 0000' value={creditCard} onChange={this.handleFormChange} required></input>
                    <span className='input-group-text'><i className='fa fa-credit-card'/></span>
                  </div>
                  <div>
                    <div className='form-goup d-flex justify-content-between align-items-center'>
                      <div className='mr-3 ml-2'>EXP DATE</div>
                      {(creditCardExpValidate) ? null : <span style={{ 'color': 'red' }}>Please enter a valid expiration date</span>}
                      <input name='creditCardExp' className='form-control mt-3' type='tel' datatype='ccexpiry' placeholder='MM / YY' value={creditCardExp} onChange={this.handleFormChange} required></input>
                      <div className='m-3'>CVV CODE</div>
                      {(creditCardCVCValidate) ? null : <span style={{ 'color': 'red' }}>Please enter a valid cvc number</span>}
                      <input name='creditCardCVC' className='form-control mt-3' type='number' datatype='cardCVC' maxLength='3' placeholder='CVC' value={creditCardCVC} onChange={this.handleFormChange} required></input>
                    </div>
                  </div>
                  <div className='mt-3 mb-1 ml-2'>SHIPPING ADDRESS</div>
                  <div className='input-group-prepend'>
                    <textarea name='address' className='form-control mt-2' rows='4' type='tel' datatype='address' maxLength='42' placeholder='Address' value={address} onChange={this.handleFormChange} required></textarea>
                  </div>
                </div>
                <div className='d-flex justify-content-around align-items-center mt-3'>
                  <div className='mr-3 ml-3'>CITY</div>
                  <div className='form-group'>
                    <input name='city' className='form-control mt-3' type='text' datatype='city' maxLength='50' placeholder='city' value={city} onChange={this.handleFormChange} required></input>
                  </div>
                  <div className='mr-3 ml-3'>STATE</div>
                  <div className='form-group'>
                    <input name='state' className='form-control mt-3' type='text' datatype='state' maxLength='2' placeholder='CA' value={state} onChange={this.handleFormChange} required></input>
                  </div>
                  <div className='ml-3'>ZIP CODE</div>
                  <div className='form-group'>
                    {(zipCodeValidate) ? null : <span style={{ 'color': 'red' }}>Please enter a valid zip code</span>}
                    <input name='zipCode' className='form-control mt-3' type='number' datatype='zip' maxLength='5' placeholder='00000' value={zipCode} onChange={this.handleFormChange} required></input>
                  </div>
                </div>
                <div className='ml-2'>EMAIL</div>
                <div className='form-group'>
                  {(emailValidate) ? null : <span style={{ 'color': 'red' }}>Please enter a valid email</span>}
                  <input name='email' className='form-control mt-3' type='text' datatype='email' maxLength='254' placeholder='email' value={email} onChange={this.handleFormChange} required></input>
                </div>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='mb-5 cursor-pointer' onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Continue Shopping'}</div>
                <button className='btn btn-primary mb-5' onClick={e => {
                  if (this.state.creditCard.length === 19 && this.state.creditCardCVC.length === 3) {
                    this.completeOrder(this.props.cartState);
                    // this.openModal();
                  }
                }}> PLACE ORDER</button>
              </div>
            </div>
          </div>
          <div className='mb-4' style={{ 'textAlign': 'center', 'color': '#f19e05e8', 'fontWeight': 'bold' }}>*disclaimer - this is a demo site. Please do not enter your personal information.</div>
        </form>
      </div>
        {/* <ConfirmPlaceOrderModal show={this.state.show} onClose={this.confirmOrder} cancel={this.cancelModal} /> */}
      </>
    );
  }
}
export default CheckoutForm;
