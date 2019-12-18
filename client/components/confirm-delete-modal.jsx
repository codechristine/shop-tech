import React from 'react';

class ConfirmDeleteModal extends React.Component {

  render() {
    const confirmDelete = 'Please click delete to confirm deleting item from cart or click cancel to cancel.';

    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className='d-flex align-items-center' show='true'>
          <div className='modalShadow'>
            <div className='modalBody'>
              <div className='modalContent' style={{ 'color': '#f19e05e8' }}>
                <h3>{confirmDelete}</h3>
                <button className='btn btn-primary confirm cursor-pointer m-3' onClick={this.props.onClose}>delete</button>
                <button className='btn btn-primary confirm cursor-pointer m-3' onClick={this.props.cancel}>cancel</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default ConfirmDeleteModal;
