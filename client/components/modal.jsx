import React from 'react';

class Modal extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     show: true
  //   };
  //   this.toggleModal = this.toggleModal.bind(this);
  // }
  // toggleModal() {
  //   this.setState({
  //     show: false
  //   });
  // }
  // toggleModal = () => {
  //   this.setState({
  //     show: !this.state.show
  //   });
  // }
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className='d-flex align-items-center' show='true'>
          <div className='modalShadow'>
            <div className='modalBody'>
              <div className='modalContent' style={{ 'color': '#f19e05e8' }}>
                <h3>Please click confirm to acknowledge that this site is only a demo site.</h3>
                <button className='btn btn-primary confirm cursor-pointer' onClick={this.props.onClose}>confirm</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Modal;
