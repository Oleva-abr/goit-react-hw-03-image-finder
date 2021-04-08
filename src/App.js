import React, { Component } from 'react';
import Modal from './components/Modal';
import './App.css';
import ApiPixabay from './services/ApiPixabay';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';

class App extends Component {
  state = {
    results: [],
    showModal: false,
    hits: [],
    name: '',
    page: 1,
    query: '',
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
    ApiPixabay(name, page).then(images => {
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

  handleSearch = query => {
    this.setState({ query: query });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { results, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery hits={results} onClick={this.openModal} />
        {showModal && (
          <Modal largeImage={showModal} onClose={this.toggleModal} />
        )}
      </>
    );
    // this.state.showModal && <Modal onClose={this.toggleModal}></Modal>;
  }
}

export default App;
