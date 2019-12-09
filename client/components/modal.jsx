import react from 'react';

class Modal extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  toggleModal() {
    this.setState({
      show: false
    });
  }
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className='container'>
          <div className='modalShadow'>
            <div className='modalBody'>
              <div className='modalContent'>Please click confirm to </div>
              <button className='btn btn-primary cursor-pointer' onClick={ e => { this.toggleModal(); }}>confirm</button>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Modal;
