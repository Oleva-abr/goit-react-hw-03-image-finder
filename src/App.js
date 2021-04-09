import React, { Component } from 'react';
import Modal from './components/Modal';
import './App.css';
import ApiPixabay from './services/ApiPixabay';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
// console.log(ApiPixabay);
class App extends Component {
  state = {
    showModal: false,
    hits: [],
    page: 1,
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.query;
    const nextName = this.state.query;
    if (prevName !== nextName) {
      this.getDataApi();
      // this.getDataApi('cat', 1);
    }
  }
  getDataApi = () => {
    const { query, page } = this.state;
    // console.log(query);
    ApiPixabay.Api({ query, page }).then(hits => {
      this.setState(prevState => ({
        hits: [...prevState.hits, ...hits],
        page: prevState.page + 1,
      }));
    });
  };

  handleSearch = query => {
    this.setState({
      query: query,
      page: 1,
      hits: [],
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    // console.log(this.state.hits);
    // this.getDataApi('cat', 1);
    const { showModal, hits } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery hits={hits} onClick={showModal} />
        {showModal && (
          <Modal largeImage={showModal} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

export default App;
