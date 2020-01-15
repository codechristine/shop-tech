import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className='row' style={{ 'backgroundColor': 'rgb(54, 53, 51)' }}>
        <div className='col-md-12'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-around align-items-center'>
              <h1 className='mt-2 ml-3 cursor-pointer' style={{ 'color': 'white', 'fontFamily': 'Bungee Outline' }} onClick={() => { this.props.setView('catalog', {}); }}> Shop Tech</h1>
              <h6 className='mt-4 ml-2' style={{ 'color': '#f19e05e8', 'fontFamily': 'Crushed', 'fontWeight': 'bold' }}>A one stop shop for the latest tech products</h6>
            </div>
            <div className='d-flex justify-content-around mr-4' style={{ 'color': 'white' }}>
              <i className='fas fa-map-marker-alt fa-1x pt-3 cursor-pointer' data-toggle='tooltip' data-placement='bottom' title='nearby store'></i>
              <h6 className='mt-3 ml-2'>Nearby Store: Irvine, CA</h6>
              <i className='fas fa-shopping-cart fa-1x pt-3 ml-3 cursor-pointer' data-toggle='tooltip' data-placement='bottom' title='cart' onClick={() => { this.props.setView('cart', {}); }}></i>
              <p className='cursor-pointer' style={{ 'backgroundColor': '#f19e05e8', 'borderRadius': '50%', 'height': '1.4rem', 'width': '1.4rem', 'border': 'none', 'textAlign': 'center' }} onClick={() => { this.props.setView('cart', {}); }}>{this.props.cartItemCount}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
