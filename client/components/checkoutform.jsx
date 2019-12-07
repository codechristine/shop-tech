import React from 'react';

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
      sameAsBilling: 'off'
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.completeOrder = this.completeOrder.bind(this);
  }
  handleFormChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
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
      creditCardCVC: '',
      sameAsBilling: 'off'
    });
    this.props.placeOrder(order);
  }
  render() {
    let totalCost = 0;
    this.props.cartState.forEach(price => {
      totalCost += parseFloat(price.price);
    });

    const { name, creditCard, creditCardExp, creditCardCVC, address, city, state, zipCode, email } = this.state;

    return (
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
                  <div className='display-td' >
                    <img className='img-responsive pull-right p-2' src='http://i76.imgup.net/accepted_c22e0.png' />
                  </div>
                </div>
                <div className='mt-2'>
                  <div className='mt-5 mb-1 ml-2'>CARD HOLDER</div>
                  <div className='form-group'>
                    <input name='name' className='form-control mt-2' type='text' datatype='name' placeholder='Name On Card' value={name} onChange={this.handleFormChange} required></input>
                  </div>
                  <div className='mt-3 mb-1 ml-2'>CARD NUMBER</div>
                  <div className='form-group d-flex justify-content-between'>
                    <input name='creditCard' className='form-control mt-2' type='tel' datatype='card' maxLength='19' placeholder='0000 0000 0000 0000' value={creditCard} onChange={this.handleFormChange} required></input>
                    <span className='input-group-text'><i className='fa fa-credit-card'/></span>
                  </div>
                  <div>
                    <div className='form-goup d-flex justify-content-between align-items-center'>
                      <div className='mr-3 ml-2'>EXP DATE</div>
                      <input name='creditCardExp' className='form-control mt-3' type='tel' datatype='ccexpiry' placeholder='MM / YY' value={creditCardExp} onChange={this.handleFormChange} required></input>
                      <div className='m-3'>CVV CODE</div>
                      <input name='creditCardCVC' className='form-control mt-3' type='tel' datatype='cardCVC' maxLength='3' placeholder='CVC' value={creditCardCVC} onChange={this.handleFormChange} required></input>
                    </div>
                  </div>
                  <div className='mt-3 mb-1 ml-2'>SHIPPING ADDRESS</div>
                  <div className='input-group-prepend'>
                    <textarea name='address' className='form-control mt-2' rows='4' type='text' datatype='address' placeholder='Address' value={address} onChange={this.handleFormChange} required></textarea>
                  </div>
                </div>
                <div className='d-flex justify-content-around align-items-center mt-3'>
                  {/* <div className=''> */}
                  <div className='mr-3 ml-3'>CITY</div>
                  <div className='form-group'>
                    <input name='city' className='form-control mt-3' type='text' datatype='city' placeholder='city' value={city} onChange={this.handleFormChange} required></input>
                  </div>
                  {/* </div> */}
                  {/* <div className=''> */}
                  <div className='mr-3 ml-3'>STATE</div>
                  <div className='form-group'>
                    <input name='state' className='form-control mt-3' type='text' datatype='state' placeholder='state' value={state} onChange={this.handleFormChange} required></input>
                  </div>
                  {/* </div> */}
                  {/* <div className=''> */}
                  <div className='ml-3'>ZIP CODE</div>
                  <div className='form-group'>
                    <input name='zipCode' className='form-control mt-3' type='tel' datatype='zip' maxLength='5' placeholder='00000' value={zipCode} onChange={this.handleFormChange} required></input>
                  </div>
                  {/* </div> */}
                </div>
                <div className='ml-2'>EMAIL</div>
                <div className='form-group'>
                  <input name='email' className='form-control mt-3' type='text' datatype='email' placeholder='email' value={email} onChange={this.handleFormChange} required></input>
                </div>
                <div className='form-check ml-2'>
                  <input name='sameAsBilling' className='form-check-input is-valid mt-3' type='checkbox' id='defaultCheck' required onChange={this.handleFormChange}></input>
                  <label className='form-check-label p-2' htmlFor='defaultCheck'>
                billing same as shipping
                  </label>
                </div>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='mt-3 mb-5 cursor-pointer' onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Continue Shopping'}</div>
                <button className='btn btn-primary mt-3 mb-5' onClick={e => {
                  if (this.state.creditCard.length === 19 && this.state.creditCardCVC.length === 3 && this.state.sameAsBilling === 'on') { this.completeOrder(this.props.cartState); }
                }}> PLACE ORDER</button>
              </div>
            </div>
          </div>
          <div className='mb-4 mr-5' style={{ 'textAlign': 'center', 'color': '#f19e05e8', 'fontWeight': 'bold' }}>*disclaimer - this is a demo site. Please do not enter your personal information.</div>
        </form>
      </div>
    );
  }
}
export default CheckoutForm;
