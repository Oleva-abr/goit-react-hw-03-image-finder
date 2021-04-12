import React, { Component } from 'react';
import Modal from './components/Modal';
import './App.css';
import ApiPixabay from './services/ApiPixabay';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Button from './components/Buton';
import Spinner from './components/Spinner';

class App extends Component {
  state = {
    isShowModal: false,
    hits: [],
    page: 1,
    query: '',
    img: '',
    isLoading: false,
    largeImageUrl: '',
    // largeImage: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.query;
    const nextName = this.state.query;
    if (prevName !== nextName) {
      // this.setState({ isLoading: true });
      await this.getDataApi();
    }
    this.scroll();
  }
  getDataApi = () => {
    const { query, page } = this.state;
    // console.log(query);
    this.setState({ isLoading: true });
    ApiPixabay.Api({ query, page })
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  scroll = () => {
    return window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
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
    this.setState(({ isShowModal }) => ({
      isShowModal: !isShowModal,
    }));
  };
  openModal = img => {
    this.setState({ isShowModal: true, largeImageUrl: img });
    // console.log(img);
  };

  render() {
    // console.log(this.state.hits);

    const { isShowModal, hits, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />

        <ImageGallery hits={hits} onHandleClick={this.openModal} />
        {isLoading && <Spinner />}
        {hits.length > 0 && !isLoading && <Button onClick={this.getDataApi} />}
        {isShowModal && (
          <Modal
            onClick={this.openModal}
            onClose={this.toggleModal}
            largeImageUrl={this.state.largeImageUrl}
          />
        )}
      </>
    );
  }
}

export default App;
