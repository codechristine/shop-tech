import React from 'react';

class CartSummaryItem extends React.Component {

  render() {

    if (this.props.items) {
      let image = this.props.items.image;
      let name = this.props.items.name;
      let price = this.props.items.price;
      let shortDescription = this.props.items.shortDescription;

      return (
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='m-2' style={{ 'width': '65%', 'border': '1px solid grey', 'backgroundColor': 'white' }} >
              <div className='media mb-3 mt-1' style={{ 'width': '100%' }}>
                <img className='ml-3 mt-4' style={{ 'height': '12rem', 'width': '12rem' }} src={image} />
                <div className='col-md-7 ml-4'>
                  <h4 className='mt-4'>{name}</h4>
                  <h5 className='mt-2'>{'$' + price}</h5>
                  <p className='mt-3'>{shortDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>No Items</div>
      );
    }
  }
}
export default CartSummaryItem;