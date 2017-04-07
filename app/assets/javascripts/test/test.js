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
      const wrapper = shallow(<App/>);
      expect(wrapper.find(TopNav)).to.have.length(1);
    });

    describe('Survey', function() {
      it('should render the component called Question List', function() {
        const wrapper = shallow(<Survey/>);
        expect(wrapper.find(QuestionList)).to.have.length(1);
      });
      it('should have an initial state of empty/null for all responses', function() {
        const wrapper = shallow(<Survey/>);
        console.log(wrapper.state().response);
        expect(wrapper.state().response).to.deep.equal([]);
      });
      it('should have a submit button that sends data to the API using the state', function() {
        const wrapper = shallow(<Survey/>);
        wrapper.find('button').simulate('click');
        // integrate nock
      });
      it('should update the state of responses each time the Question component updates', function() {
        const wrapper = mount(<Survey/>);
        // integrate sinon and spy to test lifecycle
      });


      describe('QuestionList', function() {
        it('should render the SideNav component', function() {
          const wrapper = shallow(<Survey/>);
          expect(wrapper.find(SideNav)).to.have.length(1);
        });
        it('Should render a list of questions', function() {

        });
        it('Should have an initial state of 1 for active question', function() {
          const wrapper = shallow(<QuestionList/>);
          expect(wrapper.state().activeQuestion).to.equal(1);
        });
        it('Should update the state of active question if a SideNav button is clicked', function() {

        });
        it('Should update the state of active question if a next button is clicked', function() {

        });
        it('Should update the state of active question if a back button is clicked', function() {

        });

        describe('SideNav', function() {
          it('Should have an initial state of 1 for activeLink', function() {

          });
          it('Should have an onClick handler on each link', function() {

          });
          it('Should update the activeLink state if a link is clicked', function() {

          });
          it('Should update activeLink state every time the activeQuestion state is changed', function() {

          });
          it('Should have an opacity of 1 for active links, and 0.5 fir inactive', function() {

          });
        });

        describe('Question', function() {
          it('Should have a back button, unless the question ID is 1', function() {

          });
          it('Should have a next button, unless the question ID is === questions.length', function() {

          });
          it('Should have an initial active state of inactive, unless the question ID is 1', function() {

          });
          it('Should have an initial active state of active, if the question ID is 1', function() {

          });
          it('If it has a next button, onClick this should update the activeQuestion state + 1', function() {

          });
          it('If it has a back button, onClick this should update the activeQuestion state - 1', function() {

          });
          it('If the active state is inActive, the fields should be disabled and the opacity of the component should be 0.5 ', function() {

          });

          describe('AnswerField', function() {
            it('Should render the correct type of input field depending on the question style', function() {

            });
            it('Should update the response state of the survey whenever an input is changed', function() {

            });
          });

        });
      });
    });
});
