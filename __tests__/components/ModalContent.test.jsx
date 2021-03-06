/* global describe, it, expect, jest */

import { shallow } from 'enzyme';
import React from 'react';
import ModalContent from '../../client/src/components/ModalContent';

describe('Modal content test', () => {
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

  const wrapper = shallow(<ModalContent
    photos={photosMock}
    changeModalView={changeModalViewFn}
    nextImage={nextImageFn}
    previousImage={previousImageFn}
    resetSlideCount={resetSlideCountFn}
    slideCount={slideCountMock}
    replay={replayMock}
  />);

  it('should render modal content', () => {
    expect(wrapper.find('.modal-content-container')).toHaveLength(1);
  });

  it('should render image carousel', () => {
    expect(wrapper.find('.carousel-wrapper')).toHaveLength(1);
  });

  it('modal-image src should be the first image in array', () => {
    expect(wrapper.find(`img[src="${photosMock[0]}"]`)).toHaveLength(1);
  });

  it('should call function changeModalView and resetSlideCount on X(exit) button click', () => {
    wrapper.find('.exit-btn').simulate('click');

    expect(resetSlideCountFn).toHaveBeenCalled();
    expect(changeModalViewFn).toHaveBeenCalled();
  });

  it('should call function nextImage on right arrow button click', () => {
    wrapper.find('.right-btn').simulate('click');

    expect(nextImageFn).toHaveBeenCalled();
  });

  it('should call function previousImage on left arrow button click', () => {
    wrapper.find('.left-btn').simulate('click');

    expect(previousImageFn).toHaveBeenCalled();
  });

  it('should call function resetSlideCount on "photo link" click', () => {
    wrapper.find('.modal-photos-link').simulate('click');

    expect(resetSlideCountFn).toHaveBeenCalled();
  });

  it('should call function resetSlideCount on "replay" click', () => {
    wrapper.find('.right-btn').simulate('click');

    expect(resetSlideCountFn).toHaveBeenCalled();
  });
});
