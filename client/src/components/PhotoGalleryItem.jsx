/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import '../css-components/PhotoGalleryItem.css';

const PhotoGalleryItem = (
  {
    photo, changeModalView, setImageSlideCount, idx,
  },
) => {
  const handleClick = (photoIdx) => {
    setImageSlideCount(photoIdx);
    changeModalView();
  };

  return (
    <div className="image-div" onClick={() => { handleClick(idx); }}>
      <img src={photo} alt="random pic for house listing" style={{ width: '100%' }} />
    </div>
  );
};

PhotoGalleryItem.propTypes = {
  photo: PropTypes.string.isRequired,
  changeModalView: PropTypes.func.isRequired,
  setImageSlideCount: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired,
};

export default PhotoGalleryItem;
