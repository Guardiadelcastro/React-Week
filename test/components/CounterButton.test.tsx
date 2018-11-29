import * as React from 'react';
import { shallow } from 'enzyme';
import CounterButton from "../../src/components/CounterButton";

describe('CounterButton', () => {
  describe('render', () => {
    test('Should show button with text 0', () => {
      const wrapper = shallow(<CounterButton/>);
      expect(wrapper.find('button').text()).toBe('0');
    });
    test('After first click the button should show 1', () => {
      const wrapper = shallow(<CounterButton/>);
      wrapper.find('button').simulate('click');
      expect(wrapper.find('button').text()).toBe('1');
    });
  });
});
