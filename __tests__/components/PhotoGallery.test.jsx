/* global describe, it, expect, jest */

import { shallow } from 'enzyme';
import React from 'react';
import PhotoGallery from '../../client/src/components/PhotoGallery';

describe('Photo Gallery test', () => {
  const photosMock = [
    'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/one.jpeg',
    'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/two.jpeg',
    'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/three.jpeg',
    'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/four.jpeg',
    'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/five.jpeg',
    'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/six.jpeg',
  ];

  const changeModalViewFn = jest.fn();
  const setImageSlideCountFn = jest.fn();

  const wrapper = shallow(<PhotoGallery
    photos={photosMock}
    changeModalView={changeModalViewFn}
    setImageSlideCount={setImageSlideCountFn}
  />);

  it('should call function changeModalView on image click', () => {
    wrapper.find('.main-image').simulate('click');

    expect(changeModalViewFn).toHaveBeenCalled();
  });

  it('should render photo gallery item component', () => {
    expect(wrapper.find('PhotoGalleryItem')).toHaveLength(5);
  });

  // it('image src should be the third image in array', () => {
  //   expect(wrapper.find(`img[src="${photosMock[2]}"]`)).toHaveLength(1);
  // });
});
