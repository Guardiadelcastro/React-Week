import * as React from 'react';
import { shallow } from 'enzyme';
import NumberBoard from "../../src/components/NumberBoard";

describe('NumberBoard', () => {
  describe('render', () => {
    test('Should have + on button', () => {
      const wrapper = shallow(<NumberBoard/>);
      expect(wrapper.find('button').at(0).text()).toBe('+');
    });

    test('Should have - on button', () => {
      const wrapper = shallow(<NumberBoard/>);
      expect(wrapper.find('button').at(1).text()).toBe('-');
    });

    test('Should render two buttons', () => {
      const wrapper = shallow(<NumberBoard/>);
      expect(wrapper.find('button')).toHaveLength(2);
    });

    test('Should render 0', () => {
      const wrapper = shallow(<NumberBoard/>);
      expect(wrapper.find('p').text()).toBe('0');
    });

    test('order of elements shoulb be +, 0, -', () => {
      const wrapper = shallow(<NumberBoard/>);
      const elements = wrapper.children().map(node => node.text());
      expect(elements).toEqual(['+', '0', '-']);
    });

    test('+ button should be first child', () => {
      const wrapper = shallow(<NumberBoard/>);
      expect(wrapper.childAt(0).text()).toBe('+');
      expect(wrapper.childAt(0).is('button')).toBeTruthy();
    });

    test('p should be second child and be 0', () => {
      const wrapper = shallow(<NumberBoard/>);
      expect(wrapper.childAt(1).text()).toBe('0');
      expect(wrapper.childAt(1).is('p')).toBeTruthy();
    });

    test('- button should be third child', () => {
      const wrapper = shallow(<NumberBoard/>);
      expect(wrapper.childAt(2).text()).toBe('-');
      expect(wrapper.childAt(2).is('button')).toBeTruthy();
    });

    test('Clicking + button should add 1 to p', () => {
      const wrapper = shallow(<NumberBoard/>);
      wrapper.find('button').at(0).simulate('click');
      expect(wrapper.find('p').text()).toBe('1')
    });

    test('Clicking - button should add 1 to p', () => {
      const wrapper = shallow(<NumberBoard/>);
      wrapper.find('button').at(1).simulate('click');
      expect(wrapper.find('p').text()).toBe('-1')
    });

  });
});
