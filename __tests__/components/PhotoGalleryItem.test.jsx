/* global describe, it, expect, jest */

import { shallow } from 'enzyme';
import React from 'react';
import PhotoGalleryItem from '../../client/src/components/PhotoGalleryItem';

describe('Photo Gallery Item tests', () => {
  const changeModalViewFn = jest.fn();

  const wrapper = shallow(<PhotoGalleryItem
    changeModalView={changeModalViewFn}
    photo="photo"
  />);

  it('should call function changeModalView on image wrapper click', () => {
    wrapper.find('.image-div').simulate('click');

    expect(changeModalViewFn).toHaveBeenCalled();
  });

  it('image src should be the passed down prop image', () => {
    expect(wrapper.find('img[src="photo"]')).toHaveLength(1);
  });
});
