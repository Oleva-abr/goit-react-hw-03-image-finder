import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
      this.componentWillUnmount(){
          
    }
  }
  render() {
    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          {this.props.children}
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}
export default Modal;
