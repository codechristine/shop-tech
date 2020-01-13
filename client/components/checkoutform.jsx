import React from 'react';
import CheckoutCart from './checkout-cart';
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
      const pattern = /^[a-zA-Z]*\s?([a-zA-Z\\-]+\s)+[a-zA-Z\\-]+$/;
      // const pattern = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/;
      // const pattern = /^[a-z ,.'-]+$/;
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
        [name]: value
      });
    }
    if (name === 'creditCard') {
      // const pattern = /^((4\d{3})|(5[1-5]\d{2})|(6011))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/;
      // const pattern = /^((?:4\d{3})|(?:5[1-5]\d{2})|(?:6011)|(?:3[68]\d{2})|(?:30[012345]\d))[-]?(\d{4})[-]?(\d{4})[-]?(\d{4}|3[4,7]\d{13})$/;
      const pattern = /^((?:4\d{3})|(?:5[1-5]\d{2})|(?:6011)|(?:3[68]\d{2})|(?:30[012345]\d))[-\s]?(\d{4})[-\s]?(\d{4})[-\s]?(\d{4}|3[4,7]\d{13})$/;
      // display value of input with slice
      if (pattern.test(value)) {
        this.setState({
          creditCardValidate: true,
          [name]: value
        });
      } else {
        this.setState({
          creditCardValidate: false,
          [name]: value
        });
      }
    }
    if (name === 'zipCode') {
      const pattern = /^\d{5}$/;

      if (pattern.test(value)) {
        this.setState({
          zipCodeValidate: true,
          [name]: value
        });
      } else {
        this.setState({
          zipCodeValidate: false,
          [name]: value
        });
      }
    }
    if (name === 'email') {
      // const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
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
      const pattern = /^((0[1-9])|(1[0-2]))\/(\d{2})$/;
      // maxlength on input
      // console.log(value);
      if (pattern.test(value)) {
        this.setState({
          creditCardExpValidate: true,
          [name]: value
        });
      } else {
        this.setState({
          creditCardExpValidate: false,
          [name]: value
        });
      }
    }
    if (name === 'creditCardCVC') {
      const pattern = /^\d{3,4}$/;

      if (pattern.test(value)) {
        this.setState({
          creditCardCVCValidate: true,
          [name]: value
        });
      } else {
        this.setState({
          creditCardCVCValidate: false,
          [name]: value
        });
      }
    }
  }
  handleSubmit(e) {
    e.preventDefault();

    const { nameValidate, creditCardValidate, zipCodeValidate, emailValidate, creditCardExpValidate, creditCardCVCValidate } = this.state;
    const validateArray = [nameValidate, creditCardValidate, zipCodeValidate, emailValidate, creditCardExpValidate, creditCardCVCValidate];

    for (let i = 0; i < validateArray.length; i++) {
      if (!validateArray[i]) {
        return;
      }
    }
    this.completeOrder(this.props.cartState);
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
    this.props.cartState.forEach(product => {
      totalCost += parseFloat(product.price);
    });

    const { name, creditCard, creditCardExp, creditCardCVC, address, city, state, zipCode, email, nameValidate, creditCardValidate, zipCodeValidate, emailValidate, creditCardExpValidate, creditCardCVCValidate } = this.state;

    return (
      <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7'>
            {/* <div className='ml-4 pt-4 cursor-pointer' style={{ 'color': '#017BFD' }} onClick={() => { this.props.setView('cart', '{}'); }}>{'< Back To Cart'}</div> */}
            <form className='form' onSubmit={this.handleSubmit} >
              {/* <h4 className='ml-3'>Order Total: ${totalCost} USD</h4> */}
              <div className='payment-info'>
                <h3 className='mt-5 mb-2' style={{ 'color': '#f19e05e8', 'fontWeight': 'bold' }}>Checkout</h3>
                <div style={{ 'backgroundColor': 'white', 'borderRadius': 'calc(.25rem - 1px)' }}>
                  <div className='d-flex justify-content-between' style={{ 'height': '4rem', 'backgroundColor': 'gainsboro', 'borderRadius': 'calc(.25rem - 1px)' }}>
                    <h6 className='p-2 ml-1'>Payment Details</h6>
                    <div className='display-td'>
                      <img className='img-responsive pull-right p-2' src='http://i76.imgup.net/accepted_c22e0.png' style={{ 'width': '100%' }}/>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <div className='mt-5 ml-2'>CARD HOLDER</div>
                    <div className='form-group'>
                      {(nameValidate) ? null : <span className='ml-2' style={{ 'color': 'red' }}>Please enter a valid name</span>}
                      <input name='name' className='form-control' type='text' datatype='name' maxLength='65' placeholder='Name On Card' value={name} onChange={this.handleFormChange} required></input>
                    </div>
                    <div className='mt-3 ml-2'>CARD NUMBER</div>
                    {(creditCardValidate) ? null : <span className='ml-2' style={{ 'color': 'red' }}>Please enter a valid credit card number</span>}
                    <div className='form-group d-flex justify-content-between'>
                      <input name='creditCard' className='form-control' type='number' datatype='card' maxLength='19' placeholder='0000 0000 0000 0000' value={creditCard} onChange={this.handleFormChange} required></input>
                      <span className='input-group-text'><i className='fa fa-credit-card'/></span>
                    </div>
                    <div>
                      <div className='form-goup d-flex justify-content-between align-items-center'>
                        <div className='mr-3 ml-2'>EXP DATE</div>
                        {(creditCardExpValidate) ? null : <span className='ml-2' style={{ 'color': 'red' }}>Please enter a valid expiration date</span>}
                        <input name='creditCardExp' className='form-control mt-3' type='tel' datatype='ccexpiry' placeholder='MM/YY' value={creditCardExp} onChange={this.handleFormChange} required></input>
                        <div className='m-3'>CVV CODE</div>
                        {(creditCardCVCValidate) ? null : <span className='ml-2' style={{ 'color': 'red' }}>Please enter a valid cvc number</span>}
                        <input name='creditCardCVC' className='form-control mt-3' type='number' datatype='cardCVC' maxLength='3' placeholder='CVC' value={creditCardCVC} onChange={this.handleFormChange} required></input>
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
                      <input name='zipCode' className='form-control' type='number' datatype='zip' maxLength='5' placeholder='00000' value={zipCode} onChange={this.handleFormChange} required></input>
                    </div>
                  </div>
                  <div className='mt-3 ml-2'>EMAIL</div>
                  <div className='form-group'>
                    {(emailValidate) ? null : <span className='ml-2' style={{ 'color': 'red' }}>Please enter a valid email</span>}
                    <input name='email' className='form-control' type='text' datatype='email' maxLength='320' placeholder='email' value={email} onChange={this.handleFormChange} required></input>
                  </div>
                </div>
                <div className='mt-3 mb-5'>
                  {/* <h4>Order Total: ${totalCost} USD</h4> */}
                  <div className='d-flex justify-content-end'>
                    <button className='btn btn-primary checkoutBtn mr-2' onClick={() => { this.props.setView('catalog', {}); }}>CONTINUE SHOPPING</button>
                    {/* <button type='submit' className='btn btn-primary'
                      //   this.completeOrder(this.props.cartState);
                      //   this.openModal();
                    > PLACE ORDER</button> */}
                  </div>
                </div>
              </div>
            </form>
            <div className='mb-4' style={{ 'textAlign': 'center', 'color': '#f19e05e8', 'fontWeight': 'bold' }}>*disclaimer - this is a demo site. Please do not enter your personal information.</div>
          </div>
          <div className='col-md-5'>
            <h3 className='mt-5 mb-2' style={{ 'color': '#f19e05e8', 'fontWeight': 'bold' }}>Cart</h3>
            <div style={{ 'backgroundColor': 'white', 'borderRadius': 'calc(.25rem - 1px)' }}>
              {/* <div className=''> */}
              {this.props.cartState.map(item => {
                return (
                  <CheckoutCart setView={this.props.setView} id={item.id} key={item.id} item={item} />
                );
              })}
            </div>
            <div className='d-flex justify-content-around align-items-center mt-3'>
              <h4>Total: ${totalCost} USD</h4>
              <button type='submit' className='btn btn-primary' onClick={this.handleSubmit }
                // this.completeOrder(this.props.cartState);
                // this.openModal();
              > PLACE ORDER</button>
            </div>
            {/* </div>
            </form> */}
          </div>
        </div>
      </div>
        {/* <ConfirmPlaceOrderModal show={this.state.show} onClose={this.confirmOrder} cancel={this.cancelModal} /> */}
      </>
    );
  }
}
export default CheckoutForm;
