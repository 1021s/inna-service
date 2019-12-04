/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import '../css-components/PhotoGalleryItem.css';

const PhotoGalleryItem = ({ photo, changeModalView }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div className="image-div" onClick={changeModalView}>
    <img src={photo} alt="random pic for house listing" />
  </div>
);

PhotoGalleryItem.propTypes = {
  photo: PropTypes.string.isRequired,
  changeModalView: PropTypes.func.isRequired,
};

export default PhotoGalleryItem;
