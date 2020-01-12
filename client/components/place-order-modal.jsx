import React from 'react';

class ConfirmPlaceOrderModal extends React.Component {

  render() {
    const confirmOrder = 'Please click confirm to confirm placing order or cancel to cancel.';

    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className='d-flex align-items-center' show='true'>
          <div className='modalShadow'>
            <div className='modalBody'>
              <div className='modalContent'>
                <h6>{confirmOrder}</h6>
                <button className='btn btn-primary confirm cursor-pointer m-3' onClick={this.props.onClose}>confirm</button>
                <button className='btn btn-primary confirm cursor-pointer m-3' onClick={this.props.cancel}>cancel</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default ConfirmPlaceOrderModal;
