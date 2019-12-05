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
    };

    this.getPhotos = this.getPhotos.bind(this);
    this.changeModalView = this.changeModalView.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.resetSlideCount = this.resetSlideCount.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    return axios.get('/api/photos/10')
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

  changeModalView() {
    const { modalIsVisible } = this.state;

    this.setState({
      modalIsVisible: !modalIsVisible,
    });
  }

  resetSlideCount() {
    const { slideCount } = this.state;

    if (slideCount !== 0) {
      this.setState({
        slideCount: 0,
      });
    }
  }

  nextImage() {
    const { slideCount, photos } = this.state;

    if (slideCount !== photos.length - 1) {
      this.setState({
        slideCount: slideCount + 1,
      });
    }
  }

  previousImage() {
    const { slideCount } = this.state;

    if (slideCount !== 0) {
      this.setState({
        slideCount: slideCount - 1,
      });
    }
  }

  renderModal() {
    const { modalIsVisible, photos, slideCount } = this.state;

    if (modalIsVisible === true) {
      return (
        <Modal
          photos={photos}
          changeModalView={this.changeModalView}
          nextImage={this.nextImage}
          previousImage={this.previousImage}
          resetSlideCount={this.resetSlideCount}
          slideCount={slideCount}
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
            <PhotoGallery photos={photos} changeModalView={this.changeModalView} />
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
