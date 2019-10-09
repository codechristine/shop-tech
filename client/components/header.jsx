import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className='row pt-4'>
        <i className='fas fa-store fa-2x pt-1' />
        <h1 className='col-md-5'>Wicked Sales</h1>
        <i className="fas fa-shopping-cart fa-2x pt-2 offset-4"></i>
        <p className='ml-2'>{this.props.cartItemCount + ' item'}</p>
      </div>
    );
  }
}

export default Header;
