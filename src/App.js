import React, { Component } from 'react';
import Modal from './components/Modal';
import './App.css';

class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    return <>{showModal && <Modal onClose={this.toggleModal} />}</>;
  }
}

export default App;
