import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className='row pt-4' style={{ 'backgroundColor': 'rgb(54, 53, 51)' }}>
        <div className='col-md-12'>
          <div className='d-flex justify-content-around align-items-center mb-3'>
            <div className='d-flex justify-content-around'>
              <i className='fas fa-store fa-3x pt-1 cursor-pointer' style={{ 'color': 'white' }} onClick={() => { this.props.setView('catalog', {}); }} />
              <h1 className='ml-3 mt-1 cursor-pointer' style={{ 'color': 'white' }} onClick={() => { this.props.setView('catalog', {}); }}> Shop Tech</h1>
            </div>
            <div className='d-flex justify-content-around'>
              <i className='fas fa-shopping-cart fa-2x pt-2 cursor-pointer' style={{ 'color': 'white' }} onClick={() => { this.props.setView('cart', {}); }}></i>
              <p className='ml-2 cursor-pointer' style={{ 'color': 'white' }} onClick={() => { this.props.setView('cart', '{}'); }}>{this.props.cartItemCount + ' item'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
