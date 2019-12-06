/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import PhotoGallery from './PhotoGallery';
import Modal from './Modal';
import '../css-components/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      modalIsVisible: false,
      slideCount: 0,
      replay: false,
    };

    this.getPhotos = this.getPhotos.bind(this);
    this.changeModalView = this.changeModalView.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.resetSlideCount = this.resetSlideCount.bind(this);
    this.setImageSlideCount = this.setImageSlideCount.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    const parsedUrl = new URL(window.location.href);
    const id = parsedUrl.searchParams.get('id') ? parsedUrl.searchParams.get('id') : 0;
    return axios.get(`/api/photos/${id}`)
      .then((photos) => {
        this.setState({
          photos: photos.data.images,
        });
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }

  setImageSlideCount(imageIndex) {
    this.setState({
      slideCount: imageIndex,
    });
  }

  changeModalView() {
    const { modalIsVisible } = this.state;

    this.setState({
      modalIsVisible: !modalIsVisible,
    });
  }

  resetSlideCount() {
    const { slideCount, replay } = this.state;
    if (slideCount === 0 && replay) {
      this.setState({
        replay: false,
      });
    } else if (slideCount !== 0) {
      this.setState({
        slideCount: 0,
        replay: false,
      });
    }
  }

  nextImage() {
    const { slideCount, photos } = this.state;

    if (slideCount === photos.length - 1) {
      this.setState({
        replay: true,
        slideCount: slideCount + 1,
      });
    } else if (slideCount < photos.length) {
      this.setState({
        slideCount: slideCount + 1,
      });
    }
  }

  previousImage() {
    const { slideCount, photos } = this.state;

    if (slideCount !== 0) {
      this.setState({
        slideCount: slideCount - 1,
        replay: false,
      });
    } else if (slideCount === 0) {
      this.setState({
        replay: true,
        slideCount: photos.length,
      });
    }
  }

  renderModal() {
    const {
      modalIsVisible, photos, slideCount, replay,
    } = this.state;

    if (modalIsVisible === true) {
      return (
        <Modal
          photos={photos}
          changeModalView={this.changeModalView}
          nextImage={this.nextImage}
          previousImage={this.previousImage}
          resetSlideCount={this.resetSlideCount}
          slideCount={slideCount}
          replay={replay}
        />
      );
    }
    return false;
  }

  render() {
    const { photos } = this.state;
    return (
      <div>
        <div>
          {this.renderModal()}
        </div>
        <div className="photo-container">
          <div>
            <PhotoGallery
              photos={photos}
              changeModalView={this.changeModalView}
              setImageSlideCount={this.setImageSlideCount}
            />
            <div className="not-my-module">
              <p>Something goes here</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
