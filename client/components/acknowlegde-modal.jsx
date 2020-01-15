import React from 'react';

class AcknowledgeModal extends React.Component {

  render() {
    const acknowledge = 'Please click confirm to acknowledge that this site (Shop Tech) is only a demo site & no real purchases can be made.';

    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className='d-flex align-items-center' show='true'>
          <div className='modalShadow'>
            <div className='modalBody'>
              <div className='modalContent'>
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
