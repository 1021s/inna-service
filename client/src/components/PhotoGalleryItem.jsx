import React from 'react';
import PropTypes from 'prop-types';
import '../css-components/PhotoGalleryItem.css';

const PhotoGalleryItem = ({ photo }) => (
  <div className="image-div">
    <img src={photo} alt="random pic for house listing" />
  </div>
);

PhotoGalleryItem.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default PhotoGalleryItem;
