/* global describe, it, expect */

import { shallow } from 'enzyme';
import React from 'react';

import App from '../../client/src/components/App';

describe('First React component test with Enzyme', () => {
  const wrapper = shallow(<App />);

  it('should have an "h1" header tag', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should have default state', () => {
    expect(wrapper.state('photos')).toEqual([]);
  });
});
