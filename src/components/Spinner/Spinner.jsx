import { Component } from 'react';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './spinner.module.css';

class Spinner extends Component {
  render() {
    return (
      <Loader
        className={style.Spinner}
        type="ThreeDots"
        color="#3f51b5"
        height={120}
        width={120}
        // timeout={3000} //3 secs
      />
    );
  }
}

export default Spinner;
