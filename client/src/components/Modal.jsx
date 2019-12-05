/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ModalContent from './ModalContent';
import '../css-components/Modal.css';

const Modal = ({ photos, changeModalView }) => (
  <div className="modal-container">
    <div className="mask" />
    <ModalContent photos={photos} changeModalView={changeModalView} />
  </div>
);

Modal.propTypes = {
  photos: PropTypes.array.isRequired,
  changeModalView: PropTypes.func.isRequired,
};

export default Modal;
