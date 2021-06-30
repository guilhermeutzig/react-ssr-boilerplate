import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import '../../../setup-tests';

import LazyImage from './lazy-image';

describe('<LazyImage />', () => {
  it('It renders', () => {
    const lazyImage = shallow(
      <LazyImage src="image.jpg" alt="Alt Text" className="class" />,
    );
    expect(lazyImage).to.have.lengthOf(1);
  });

  it('Accept all required props', () => {
    const lazyImage = shallow(
      <LazyImage src="image.jpg" alt={3} className="class" />,
    );
    expect(lazyImage.props().src).to.equal('image.jpg');
    expect(lazyImage.props().alt).to.equal(3);
    expect(lazyImage.props().className).to.equal('class');
  });
});
