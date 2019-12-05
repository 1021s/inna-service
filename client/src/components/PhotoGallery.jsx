/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import PhotoGalleryItem from './PhotoGalleryItem';
import '../css-components/PhotoGallery.css';

const PhotoGallery = ({ photos, changeModalView }) => (
  <div className="gallery-div">
    <img className="main-image" src={photos[2]} alt="random pic for house listing" onClick={changeModalView} />
    {photos.map((photo, idx) => (
      <PhotoGalleryItem key={`${idx}${photo}`} photo={photo} changeModalView={changeModalView} />
    ))}
  </div>
);

PhotoGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  changeModalView: PropTypes.func.isRequired,
};


export default PhotoGallery;
