import React from 'react';
import Snackbar from './snackbar';

class ConfirmAddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    // console.log('hello');
    this.props.onClose();

    this.setState({
      show: true
    });
  }
  render() {
    const productName = this.props.product.name;
    const confirmAdd = 'Please click add to confirm adding ' + `${productName}` + ' to cart or click cancel to cancel.';

    if (!this.props.show) {
      return null;
    } else {
      return (
        <>
        <div className='d-flex align-items-center' show='true'>
          <div className='modalShadow'>
            <div className='modalBody'>
              <div className='modalContent'>
                <h6>{confirmAdd}</h6>
                {/* <button className='btn btn-primary confirm cursor-pointer m-3' onClick={this.props.onClose}>add</button> */}
                <button className='btn btn-primary confirm cursor-pointer m-3' onClick={() => {
                  this.openModal();
                }}>add</button>
                <button className='btn btn-primary confirm cursor-pointer m-3' onClick={this.props.cancel}>cancel</button>
              </div>
            </div>
          </div>
        </div>
          <Snackbar show={this.state.show} product={this.props.product} setView={this.props.setView} />
        </>
      );
    }
  }
}
export default ConfirmAddModal;
