import React, { Component } from 'react';
import Modal from './components/Modal';
import './App.css';

class App extends Component {
  state = {
    showModal: true,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    return this.state.showModal && <Modal onClose={this.toggleModal}></Modal>;
  }
}

export default App;
