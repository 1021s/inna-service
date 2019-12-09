/* global describe, it, expect, jest */

import { shallow } from 'enzyme';
import React from 'react';
import Modal from '../../client/src/components/Modal';

describe('Modal tests', () => {
  const photosMock = [
    'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/one.jpeg',
    'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/two.jpeg',
    'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/three.jpeg',
    'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/four.jpeg',
    'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/five.jpeg',
    'https://immersive-photo-bucket.s3.us-west-2.amazonaws.com/images/10/six.jpeg',
  ];

  const changeModalViewFn = jest.fn();
  const nextImageFn = jest.fn();
  const previousImageFn = jest.fn();
  const resetSlideCountFn = jest.fn();
  const slideCountMock = 0;
  const replayMock = false;

  const wrapper = shallow(<Modal
    photos={photosMock}
    changeModalView={changeModalViewFn}
    nextImage={nextImageFn}
    previousImage={previousImageFn}
    resetSlideCount={resetSlideCountFn}
    slideCount={slideCountMock}
    replay={replayMock}
  />);

  it('should render modal', () => {
    expect(wrapper.find('.modal-container')).toHaveLength(1);
    expect(wrapper.find('.mask')).toHaveLength(1);
  });

  it('should render modal content', () => {
    expect(wrapper.find('ModalContent')).toHaveLength(1);
  });

  it('should set overflow to "auto" after function componentWillUnmount is called', () => {
    wrapper.instance().componentWillUnmount();
  });
});
