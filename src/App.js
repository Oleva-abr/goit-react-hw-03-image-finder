import React, { Component } from 'react';
import Modal from './components/Modal';
import './App.css';
import ApiPixabay from './services/ApiPixabay';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Button from './components/Buton';
import Spinner from './components/Spinner';

// console.log(ApiPixabay);
class App extends Component {
  state = {
    isShowModal: false,
    hits: [],
    page: 1,
    query: '',
    img: '',
    isLoading: false,
    // largeImage: '',
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
    ApiPixabay.Api({ query, page })
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          page: prevState.page + 1,
        }));
      })
      .then(this.scroll)
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
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
    this.setState({ isShowModal: true, largeImage: img });
    console.log(img);
  };

  render() {
    // console.log(this.state.hits);
    // this.getDataApi('cat', 1);
    const { isShowModal, hits, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />

        <ImageGallery hits={hits} onClick={this.openModal} />
        {isLoading && <Spinner />}
        {hits.length > 0 && !isLoading && <Button onClick={this.getDataApi} />}
        {isShowModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}

export default App;
