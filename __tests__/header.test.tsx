import React from 'react';
import { mount } from 'enzyme';

import NavigationProps from '../components/navigation'


test('hello world', () => {
    const wrapper = mount(<NavigationProps />);
    expect(wrapper.text()).toMatch('Hello Jest!');
});

test('hello world', () => {
    const wrapper = 'hello'
    expect(wrapper).toBe('hello');
});