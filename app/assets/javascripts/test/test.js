var assert = require('assert');
import React from 'react';
import App from '../components/app';
import Survey from '../containers/survey';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('App', function() {
    it('should always render the TopNav Component', function() {
      const wrapper = mount(<App/>);
      expect(wrapper.find(TopNav)).to.have.length(1);
    });
    it('should render 3 child components for the 3 pages of the app', function() {
      const wrapper = shallow(<App/>);
      expect(wrapper.props().children).to.have.length(3);
    });

    describe('Survey', function() {
      it('should render the component called Question List', function() {
        const wrapper = mount(<Survey/>);
        expect(wrapper.find(QuestionList)).to.have.length(1);
      });
      it('should have an initial state of empty/null for all responses', function() {
        const wrapper = mount(<Survey/>);
        expect(wrapper.state().responses).to.equal({});
      });
      it('should fetch the questions from the reducer upon mounting', function() {
        const wrapper = mount(<Survey/>);
        // integrate chai as promised
      });
      it('should have a submit button the sends data to the API using the state', function() {
        const wrapper = mount(<Survey/>);
        wrapper.find('button').simulate('click');
        // integrate chai as promised
      });
      it('should update the state of responses each time the Question component updates', function() {
        const wrapper = mount(<Survey/>);
        // integrate sinon and spy to test lifecycle
      });
      it('should render the SideNav component', function() {
        const wrapper = mount(<Survey/>);
        expect(wrapper.find(SideNav)).to.have.length(1);
      });
    });
});
