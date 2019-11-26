import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: '',
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
      shippingAddress: '',
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

    const { name, creditCard, creditCardExp, creditCardCVC, shippingAddress } = this.state;

    return (
      <form className='container' onSubmit={this.handleSubmit}>
        <h4 className='mt-4 ml-3' style={{ 'color': 'white' }}>Checkout</h4>
        <h5 className='mb-3 ml-3' style={{ 'color': 'white' }}>Order Total: ${totalCost}</h5>
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
              <div className='form-group'>
                <input name='name' className='form-control mt-2' type='text' datatype='name' placeholder='Name On Card' value={name} onChange={this.handleFormChange} required></input>
              </div>
              <div className='mt-3 mb-1 ml-2'>CARD NUMBER</div>
              <div className='form-group'>
                <input name='creditCard' className='form-control mt-2' type='tel' datatype='card' pattern='^[0-9]{16}$' placeholder='0000 0000 0000 0000' value={creditCard} onChange={this.handleFormChange} required></input>
                <span className='input-group-text'><i className='fa fa-credit-card' /></span>
              </div>
              <div>
                <div className='form-goup d-flex justify-content-between align-items-center'>
                  <div className='m-2'>EXP DATE</div>
                  <input name='creditCardExp' className='form-control mt-3' type='tel' datatype='ccexpiry' placeholder='MM / YY' value={creditCardExp} onChange={this.handleFormChange} required></input>
                  <div className='mt-2 m-2'>CVV CODE</div>
                  <input name='creditCardCVC' className='form-control mt-3' type='number' datatype='cardCVC' placeholder='CVC' value={creditCardCVC} onChange={this.handleFormChange} required></input>
                </div>
              </div>
              <div className='mt-3 mb-1 ml-2'>SHIPPING ADDRESS</div>
              <div className='input-group-prepend' >
                <textarea name='shippingAddress' className='form-control mt-2' rows='7' type='text' datatype='address' placeholder='Shipping Address' value={shippingAddress} onChange={this.handleFormChange} required></textarea>
              </div>
            </div>
            <div className='form-check ml-2'>
              <input name='sameAsBilling' className='form-check-input is-valid' type='checkbox' id='defaultCheck' required onChange={this.handleFormChange}></input>
              <label className='form-check-label' htmlFor='defaultCheck'>
                billing same as shipping
              </label>
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='mt-3 mb-5 cursor-pointer' style={{ 'color': 'white' }} onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Continue Shopping'}</div>
            <button className='btn btn-primary mt-3 mb-5' onClick={e => {
              if (this.state.creditCard.length === 19) { this.completeOrder(this.props.cartState); }
            }}> PLACE ORDER</button>
          </div>
        </div>
      </form>
    );
  }
}
export default CheckoutForm;
