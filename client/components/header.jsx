import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className='row pt-4'>
        <i className='fas fa-store fa-3x pt-1 ml-3' style={{ 'color': 'white' }} />
        <h1 className='col-md-5' style={{ 'color': 'white' }}>Shop Tech</h1>
        <i className="fas fa-shopping-cart fa-2x pt-2 offset-4" style={{ 'color': 'white' }} onClick={() => { this.props.setView('cart', '{}'); }}></i>
        <p className='ml-2' style={{ 'color': 'white' }}>{this.props.cartItemCount + ' item'}</p>
      </div>
    );
  }
}
export default Header;
