import 'jsdom-global/register';
import React from 'react';
import {
  mount,
  shallow
} from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';

import Progress from '../src';

describe(`Progress`, () => {

  it(`renders DIV`, () => {
    const wrapper = mount( <Progress /> );
    expect(wrapper.find('div').length).toEqual(1);
  });

})