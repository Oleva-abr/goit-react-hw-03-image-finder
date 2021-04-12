import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import style from './imageGallery.module.css';

const ImageGallery = ({ hits, onHandleClick }) => {
  return (
    <ul className={style.ImageGallery}>
      {hits.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          smallImage={webformatURL}
          largeImage={largeImageURL}
          onHandleClick={onHandleClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
