import * as React from 'react';
import { shallow } from 'enzyme';
import NumberBoard from "../../src/components/NumberBoard";

describe('NumberBoard', () => {
  describe('render', () => {
    test('Should have a + button', () => {
      const wrapper = shallow(<NumberBoard />);
      expect(wrapper.find('button').at(0).text()).toBe('+');
    });

    test('Should have a - button', () => {
      const wrapper = shallow(<NumberBoard/>);
      expect(wrapper.find('button').at(1).text()).toBe('-');
    });

    test('Should render two buttons', () => {
      const wrapper = shallow(<NumberBoard/>);
      expect(wrapper.find('button')).toHaveLength(2);
    });

    test('Should render 0', () => {
      const wrapper = shallow(<NumberBoard/>);
      expect(wrapper.find('label').text()).toBe('0');
    });

    test('order of elements shoulb be +, 0, -', () => {
      const wrapper = shallow(<NumberBoard/>);
      const elements = wrapper.find('div').children().map(node => node.text());
      expect(elements).toEqual(['+', '0', '-']);
    });

    test('+ button should be first child', () => {
      const wrapper = shallow(<NumberBoard/>);
      expect(wrapper.find('div').childAt(0).text()).toBe('+');
      expect(wrapper.find('div').childAt(0).is('button')).toBeTruthy();
      console.log(wrapper.find('div').at(0).html())
    });

    test('label should be second child and be 0', () => {
      const wrapper = shallow(<NumberBoard/>);
      expect(wrapper.find('div').childAt(1).text()).toBe('0');
      expect(wrapper.find('div').childAt(1).is('label')).toBeTruthy();
    });

    test('- button should be third child', () => {
      const wrapper = shallow(<NumberBoard/>);
      expect(wrapper.find('div').childAt(2).text()).toBe('-');
      expect(wrapper.find('div').childAt(2).is('button')).toBeTruthy();
    });

    test('Clicking + button should add 1 to p', () => {
      const wrapper = shallow(<NumberBoard/>);
      wrapper.find('button').at(0).simulate('click');
      expect(wrapper.find('label').text()).toBe('1')
    });

    test('Clicking - button should add 1 to p', () => {
      const wrapper = shallow(<NumberBoard/>);
      wrapper.find('button').at(1).simulate('click');
      expect(wrapper.find('label').text()).toBe('-1')
    });

    test('Check that maximum is working', () => {
      const maxCounter = 100;
      const wrapper = shallow(<NumberBoard counter={maxCounter - 1} max={maxCounter}/>);
      wrapper.find('button').at(0).simulate('click');
      wrapper.find('button').at(0).simulate('click');
      expect(wrapper.find('label').text()).toBe('100');
    })

    test('Check that minimum is working', () => {
      const minCounter = -50
      const wrapper = shallow(<NumberBoard counter={minCounter + 1} min={minCounter}/>);
      wrapper.find('button').at(1).simulate('click');
      wrapper.find('button').at(1).simulate('click');
      expect(wrapper.find('label').text()).toBe('-50');
    })

  });
});
