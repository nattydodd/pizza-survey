var assert = require('assert');
import React from 'react';
import App from '../components/app';
import configureMockStore from 'redux-mock-store'

import ConnectedSurvey, { Survey } from '../containers/survey';
import QuestionList from '../components/question_list';
import QuestionsReducer from '../reducers/reducer_questions';

import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import redux from 'redux';
import nock from 'nock';




describe('App', function() {
    it('should always render the TopNav Component', function() {
      const wrapper = mount(<App/>);
      expect(wrapper.find(TopNav)).to.have.length(1);
    });

    describe('Survey', function() {
      it('should render the component called Question List', function() {
        const wrapper = mount(<Survey/>);
        expect(wrapper.find(QuestionList)).to.have.length(1);
      });
      it('should have an initial state of empty/null for all responses', function() {
        const wrapper = mount(<Survey/>);
        expect(wrapper.state().response).to.equal([]);
      });


      it('should have a submit button the sends data to the API using the state', function() {
        const wrapper = mount(<Survey/>);
        wrapper.find('button').simulate('click');
        // integrate nock
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
