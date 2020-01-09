import React from 'react';

class AcknowledgeModal extends React.Component {

  render() {
    const acknowledge = 'Please click confirm to acknowledge that this site is only a demo site and no real purchases can be made.';

    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className='d-flex align-items-center' show='true'>
          <div className='modalShadow'>
            <div className='modalBody'>
              <div className='modalContent' style={{ 'color': '#f19e05e8' }}>
                <h6>{acknowledge}</h6>
                <button className='btn btn-primary confirm cursor-pointer' onClick={this.props.onClose}>confirm</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default AcknowledgeModal;
