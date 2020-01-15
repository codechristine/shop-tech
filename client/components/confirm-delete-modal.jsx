import React from 'react';

class ConfirmDeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null
    };
    this.updateCart = this.updateCart.bind(this);
  }
  updateCart(e) {
    this.props.confirmDelete(e, this.props.item.cartItemId);
    this.props.updateCart();
  }
  render() {
    const itemName = this.props.item.name;
    const confirmDelete = 'Please click delete to confirm deleting ' + `${itemName}` + ' from cart or click cancel to cancel.';

    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className='d-flex align-items-center' show='true'>
          <div className='modalShadow'>
            <div className='modalBody'>
              <div className='modalContent'>
                <h6>{confirmDelete}</h6>
                <button className='btn btn-primary confirm cursor-pointer m-3' onClick={this.updateCart}>delete</button>
                <button className='btn btn-secondary confirm cursor-pointer m-3' onClick={e => { this.props.cancel(e); }}>cancel</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default ConfirmDeleteModal;
