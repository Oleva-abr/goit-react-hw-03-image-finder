import React from 'react';
import PropTypes from 'prop-types';

import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ smallImage, largeImage, onHandleClick }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        onClick={() => onHandleClick(largeImage)}
        src={smallImage}
        alt=""
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
