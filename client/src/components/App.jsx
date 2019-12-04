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
    };

    this.getPhotos = this.getPhotos.bind(this);
  }

  // need to create get to update state with data
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

  render() {
    const { photos } = this.state;
    return (
      <div>
        <div>
          <Modal photos={photos} />
        </div>
        <div className="photo-container">
          <div>
            <PhotoGallery photos={photos} />
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
