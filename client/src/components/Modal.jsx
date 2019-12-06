/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ModalContent from './ModalContent';
import '../css-components/Modal.css';

class Modal extends React.Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  render() {
    const {
      photos,
      changeModalView,
      nextImage,
      previousImage,
      resetSlideCount,
      slideCount,
      replay,
    } = this.props;

    return (
      <div className="modal-container">
        <div className="mask" />
        <ModalContent
          photos={photos}
          changeModalView={changeModalView}
          nextImage={nextImage}
          previousImage={previousImage}
          resetSlideCount={resetSlideCount}
          slideCount={slideCount}
          replay={replay}
        />
      </div>
    );
  }
}

Modal.propTypes = {
  photos: PropTypes.array.isRequired,
  changeModalView: PropTypes.func.isRequired,
  nextImage: PropTypes.func.isRequired,
  previousImage: PropTypes.func.isRequired,
  resetSlideCount: PropTypes.func.isRequired,
  slideCount: PropTypes.number.isRequired,
  replay: PropTypes.bool.isRequired,
};

export default Modal;
