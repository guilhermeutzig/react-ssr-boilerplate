import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import '../../../setup-tests';

import Button from './Button';

describe('<Button />', () => {
  it('It renders', () => {
    const button = shallow(
      <Button onClick={() => console.log('text')}>Text</Button>,
    );
    expect(button).to.have.lengthOf(1);
  });

  it('It accepts all required props', () => {
    const mockFunction = jest.fn();
    const button = shallow(<Button onClick={mockFunction}>Text</Button>);
    button.simulate('click');
    expect(mockFunction.mock.calls.length).to.equal(1);
    expect(button.text()).to.equal('Text');
  });
});
