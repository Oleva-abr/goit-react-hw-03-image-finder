import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }
  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, alt } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <h1>Modal</h1>

        <div className="Modal">
          <img src={largeImageURL} alt={alt} />
        </div>
      </div>,
      modalRoot,
    );
  }
}
export default Modal;
