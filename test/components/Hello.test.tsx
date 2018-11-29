import * as React from 'react';
import { shallow } from 'enzyme';
import Hello from "../../src/components/Hello";

describe('Hello', () => {
  describe('render', () => {
    test('Should render with correct name', () => {
      const wrapper = shallow(<Hello name="Bernard"/>);
      expect(wrapper.find('h1').text()).toBe('Hello Bernard');
    });
  });
});
