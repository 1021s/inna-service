/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../css-components/ModalContent.css';

const ModalContent = ({
  photos, changeModalView, nextImage, previousImage, resetSlideCount, slideCount, replay,
}) => {
  const handleClick = () => {
    changeModalView();
    resetSlideCount();
  };

  return (
    <div className="modal-content-container">
      <p className="modal-photos-link" onClick={resetSlideCount}>Photos</p>
      <button className="left-btn" type="button" onClick={previousImage}>{'<'}</button>
      <div className="carousel-wrapper">
        <div className="image-carousel-wrapper">
          {photos.length !== slideCount && (
            <div>
              <img key={`${slideCount}`} className="modal-image" src={photos[slideCount]} alt="pic" onClick={nextImage} />
              <span className="carousel-counter">{`${slideCount + 1} of ${photos.length}`}</span>
            </div>
          )}
          {photos.length === slideCount && (
            <div style={{ position: 'relative' }}>
              <div className="modal-hero-text">
                <p>Interested in touring this home?</p>
                <button className="upsell-modal-take-tour-btn" type="button">Take a tour</button>
              </div>
              <div className="upsell-modal-image-mask" />
              <img className="modal-image" src={photos[0]} alt="random pic for house listing" />
            </div>
          )}
        </div>
      </div>
      {replay
        && <button className="right-btn" type="button" onClick={resetSlideCount}>&#x27F2;</button>}
      {!replay
        && <button className="right-btn" type="button" onClick={nextImage}>{'>'}</button>}
      <ul className="action-list">
        <li>
          <button className="take-a-tour-btn" type="button">Take a Tour</button>
        </li>
        <li>
          <button className="save-home-btn" type="button">&#10084; Save Home</button>
        </li>
        <li>
          <span className="share-icon-mail">&#9993;</span>
          <button className="share-btn" type="button">
            Share
          </button>
        </li>
      </ul>
      <button className="exit-btn" type="button" onClick={handleClick}>X</button>
      <p className="info">For Sale: $6,500,000 (7 beds, 9 baths, 6,838 sqft)</p>
    </div>
  );
};

ModalContent.propTypes = {
  photos: PropTypes.array.isRequired,
  changeModalView: PropTypes.func.isRequired,
  nextImage: PropTypes.func.isRequired,
  previousImage: PropTypes.func.isRequired,
  resetSlideCount: PropTypes.func.isRequired,
  slideCount: PropTypes.number.isRequired,
  replay: PropTypes.bool.isRequired,
};

export default ModalContent;
