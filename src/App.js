import React, { Component } from 'react';
import Modal from './components/Modal';
import './App.css';
import ApiPixabay from './services/ApiPixabay';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = {
    // largeImageUrl: '',
    showModal: false,
    images: [],
    name: '',
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.name;
    const nextName = this.state.name;
    if (prevName !== nextName) {
      this.getDataApi();
    }
  }
  getDataApi = () => {
    const { name, page } = this.state;
    ApiPixabay.Api(name, page).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }));
    });
  };

  //   // .catch(error => this.setState({ error }))
  //   // .finally(() => {
  //   //   this.setState({ isLoading: false });
  //   //   window.scrollTo({
  //   //     top: document.documentElement.scrollHeight,
  //   //     behavior: 'smooth',
  //   //   });
  //   // });
  // };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    return (
      <>
        <ImageGallery images={results} onClick={this.openModal} />
        {this.state.showModal && (
          <Modal largeImage={this.state.showModal} onClose={this.toggleModal} />
        )}
      </>
    );
    // this.state.showModal && <Modal onClose={this.toggleModal}></Modal>;
  }
}

export default App;
