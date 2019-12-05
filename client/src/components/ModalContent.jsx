/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../css-components/ModalContent.css';

const ModalContent = ({
  photos, changeModalView, nextImage, previousImage, resetSlideCount, slideCount,
}) => {
  const handleClick = () => {
    changeModalView();
    resetSlideCount();
  };

  return (
    <div className="modal-content-container">
      <p className="modal-photos-link">Photos</p>
      <button className="left-btn" type="button" onClick={previousImage}>{'<'}</button>
      {photos.map((photo, idx) => {
        if (photos.indexOf(photo) === slideCount) {
          return (
            <div>
              <img key={`${idx}${photo}`} className="modal-image" src={photo} alt="pic" />
              <span className="carousel-counter">{`${idx + 1} of ${photos.length}`}</span>
            </div>
          );
        }
      })}
      <button className="right-btn" type="button" onClick={nextImage}>{'>'}</button>
      <ul className="action-list">
        <li>
          <button className="take-a-tour-btn" type="button">Take a Tour</button>
        </li>
        <li>
          <button className="save-home-btn" type="button">&#10084; Save Home</button>
        </li>
        <li>
          <button className="share-btn" type="button">&#9993; Share</button>
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
};

export default ModalContent;
