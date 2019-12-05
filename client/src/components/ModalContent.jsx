/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../css-components/ModalContent.css';

const ModalContent = ({ photos, changeModalView }) => (

  <div className="modal-content-container">
    <p className="modal-photos-link">Photos</p>
    <button className="left-btn" type="button">{'<'}</button>
    <img className="modal-image" src={photos[0]} alt="pic" />
    <button className="right-btn" type="button">{'>'}</button>
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
    <button className="exit-btn" type="button" onClick={changeModalView} >X</button>
    <p className="info">For Sale: $6,500,000 (7 beds, 9 baths, 6,838 sqft)</p>
  </div>

);

ModalContent.propTypes = {
  photos: PropTypes.array.isRequired,
  changeModalView: PropTypes.func.isRequired,
};

export default ModalContent;
