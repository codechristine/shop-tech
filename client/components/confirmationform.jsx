import React from 'react';

class Confirmation extends React.Component {

  render() {
    return (
      <div className='container'>
        <div className='mt-3 ml-3 pt-4 mb-5 cursor-pointer' style={{ 'color': '#017BFD' }} onClick={() => { this.props.setView('catalog', '{}'); }}>{'< Continue Shopping'}</div>
        <div className='d-flex justify-content-center align-items-center'>
          <h2 className='mt-4 mb-2 offset-2'>Thank you for purchase!</h2>
        </div>
        <h4 className='d-flex justify-content-center align-items-center mt-4 offset-2'>Confirmation #DHJ024</h4>
        <h4 className='d-flex justify-content-center align-items-center mt-2 offset-2' style={{ 'color': '#f19e05e8' }}>Please note this site is a demo website and no real purchases were made.</h4>
      </div>
    );
  }
}
export default Confirmation;
