import React from 'react';

class Confirmation extends React.Component {

  render() {
    return (
      <div className='container' style={{ 'color': 'white' }}>
        <div className='mt-3 ml-3 pt-4 mb-5 cursor-pointer' onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Continue Shopping'}</div>
        <div className='d-flex justify-content-center'>
          <h2 className='mt-4 ml-5 mb-2'>Thank you for your purchase!</h2>
        </div>
        <h4 className='d-flex justify-content-center align-items-center mt-2'>Confirmation #ABC123</h4>
        <h4 className='d-flex justify-content-center align-items-center mt-2'>Please check your email for order details and receipt.</h4>
      </div>
    );
  }
}
export default Confirmation;
