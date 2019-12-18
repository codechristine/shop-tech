import React from 'react';

class ConfirmAddModal extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     show: true
  //   };
  //   this.toggleModal = this.toggleModal.bind(this);
  // }
  // toggleModal() {
  //   this.setState({
  //     show: false
  //   });
  // }
  render() {
    const confirmAdd = 'Please click add to confirm adding item to cart or click cancel to cancel.';

    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className='d-flex align-items-center' show='true'>
          <div className='modalShadow'>
            <div className='modalBody'>
              <div className='modalContent' style={{ 'color': '#f19e05e8' }}>
                <h3>{confirmAdd}</h3>
                <button className='btn btn-primary confirm cursor-pointer m-3' onClick={this.props.show}>add</button>
                <button className='btn btn-primary confirm cursor-pointer m-3' onClick={this.onClose}>cancel</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default ConfirmAddModal;
