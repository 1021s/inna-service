/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import PhotoGalleryItem from './PhotoGalleryItem';
import '../css-components/PhotoGallery.css';

const PhotoGallery = ({ photos, changeModalView, setImageSlideCount }) => (
  <div className="gallery-div">
    <img className="main-image" src={photos[0]} alt="random pic for house listing" onClick={changeModalView} />
    { photos.map((photo, idx) => {
      if (photos.indexOf(photo) !== 0) {
        return (
          <PhotoGalleryItem key={`${idx}${photo}`} idx={idx} photo={photo} changeModalView={changeModalView} setImageSlideCount={setImageSlideCount} />
        );
      }
    })}
    <div className="image-div" style={{ position: 'relative' }}>
      <div className="hero-text">
        <p>Interested in touring this home?</p>
        <button className="upsell-take-tour-btn" type="button">Take a tour</button>
      </div>
      <div className="upsell-image-mask" />
      <img className="upsell-image" src={photos[0]} alt="random pic for house listing" />
    </div>
  </div>
);

PhotoGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  changeModalView: PropTypes.func.isRequired,
  setImageSlideCount: PropTypes.func.isRequired,
};


export default PhotoGallery;
