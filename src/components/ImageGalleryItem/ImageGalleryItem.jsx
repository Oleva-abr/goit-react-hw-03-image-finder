import React from 'react';
import PropTypes from 'prop-types';

import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ smallImage, largeImage, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        onClick={() => onClick(largeImage)}
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
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
