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
    };

    this.getPhotos = this.getPhotos.bind(this);
    this.changeModalView = this.changeModalView.bind(this);
    this.renderModal = this.renderModal.bind(this);
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

  renderModal() {
    const { modalIsVisible, photos } = this.state;

    if (modalIsVisible === true) {
      return <Modal photos={photos} changeModalView={this.changeModalView} />;
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
