/* global describe, it, expect, jest */

import { shallow } from 'enzyme';
import axios from 'axios';
import React from 'react';
import App from '../../client/src/components/App';

jest.mock('axios');
const resp = {
  data: {
    Listing_id: 10,
    images: [
      'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/one.jpeg',
      'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/two.jpeg',
      'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/three.jpeg',
      'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/four.jpeg',
      'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/five.jpeg',
      'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/six.jpeg',
    ],
  },
};

axios.get.mockResolvedValue(resp);

describe('First React component test with Enzyme', () => {
  const wrapper = shallow(<App />);

  it('should have default state', () => {
    expect(wrapper.state('replay')).toBe(false);
    expect(wrapper.state('slideCount')).toBe(0);
    expect(wrapper.state('modalIsVisible')).toBe(false);
    expect(wrapper.state('photos')).toEqual(resp.data.images);
  });

  it('should render photo gallery', () => {
    expect(wrapper.find('PhotoGallery')).toHaveLength(1);
  });

  it('should render modal when renderModal function is called', () => {
    wrapper.setState({ modalIsVisible: true });
    wrapper.instance().renderModal();

    expect(wrapper.find('Modal')).toHaveLength(1);
  });
});
