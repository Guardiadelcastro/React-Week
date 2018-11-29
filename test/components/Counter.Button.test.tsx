import * as React from 'react';
import { shallow } from 'enzyme';
import CounterButton from "../../src/components/CounterButton";

describe('CounterButton', () => {
  describe('render', () => {
    test('Should add to counter on click', () => {
      const wrapper = shallow(<CounterButton/>);
      expect(wrapper.find('button').text()).toBe('0');
    });
    test('After one click the button should', () => {
      const wrapper = shallow(<CounterButton/>);
      wrapper.find('button').simulate('click');
      expect(wrapper.find('button').text()).toBe('1');
    });
  });
});
