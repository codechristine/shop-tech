import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className='row pt-2 pb-2'>
        <i className='fas fa-store fa-2x pt-1' />
        <h2 className='col-md-5'>Wicked Sales</h2>
      </div>
    );
  }
}

export default Header;
