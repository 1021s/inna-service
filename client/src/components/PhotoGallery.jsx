/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import PhotoGalleryItem from './PhotoGalleryItem';
import '../css-components/PhotoGallery.css';

const PhotoGallery = ({ photos }) => (
  <div className="gallery-div">
    <img className="main-image" src={photos[2]} alt="random pic for house listing" />
    {photos.map((photo, idx) => (
      <PhotoGalleryItem key={`${idx}${photo}`} photo={photo} />
    ))}
  </div>
);

PhotoGallery.propTypes = {
  photos: PropTypes.array.isRequired,
};


export default PhotoGallery;
