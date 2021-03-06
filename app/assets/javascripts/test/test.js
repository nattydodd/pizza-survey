var assert = require('assert');
import React from 'react';
import App from '../components/app';
import configureMockStore from 'redux-mock-store';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import TopNav from '../containers/topnav';
import SideNav from '../components/sidenav';
import { Question } from '../components/question';
import ConnectedSurvey, { Survey } from '../containers/survey';
import QuestionList from '../components/question_list';
import reducers from '../reducers';

import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import redux from 'redux';
import nock from 'nock';


const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

const testQuestion = [{
    id: 3,
    question: 'What is the name of your favourite pizza place?',
    description: 'Please enter the name',
    options: null,
    style: 'free text'
  },
  {
    id: 4,
    question: 'How would you rate this pizza survey?',
    description: 'Please choose your rating (1 = Could Be Better, 5 = Excellent)',
    options: [
      1,
      2,
      3,
      4,
      5
    ],
    style: 'single answer'
  }
]

const testResponse = [
  {
    question: "test",
    answer: "test",
    style: "test",
    response_id: 1
  },
  {
    question: "test",
    answer: "test",
    style: "test",
    response_id: 1
  }
]


describe('App', function() {
    it('should always render the TopNav Component', function() {
      const wrapper = shallow(<App/>);
      expect(wrapper.find(TopNav)).to.have.length(1);
    });

    describe('Survey', function() {
      it('should render the component called Question List', function() {
        const wrapper = mount(
          <Provider store={createStoreWithMiddleware(reducers)}>
            <ConnectedSurvey />
          </Provider>
        );
        if (wrapper.state.responseId) {
          expect(wrapper.find(QuestionList)).to.have.length(1);
        }

      });
      it('should have an initial state of null for responseId', function() {
        const wrapper = mount(
          <Provider store={createStoreWithMiddleware(reducers)}>
            <ConnectedSurvey />
          </Provider>
        );
        expect(wrapper.state.responseId).to.equal(undefined);
      });
      it('should have a form with submit button that sends name to the API, and returns a responseID', function() {
        const wrapper = mount(
          <Provider store={createStoreWithMiddleware(reducers)}>
            <ConnectedSurvey />
          </Provider>
        );

       expect(wrapper.props().handleSubmit).to.be.defined;
       expect(wrapper.props().createResponseId).to.be.defined;

        if (!wrapper.state.responseId) {

          expect(wrapper.find('button')).to.have.length(1);

          // need to test post request

        }

      });
      it('should update the state of responseID after the form is submitted', function() {
        const wrapper = mount(<Survey/>);
        // integrate sinon and spy to test lifecycle
      });


      describe('QuestionList', function() {
        const wrapper = mount(
            <Provider store={createStoreWithMiddleware(reducers)}>
              <QuestionList questions = {testQuestion} />
            </Provider>
          );

          wrapper.setState({
            response : testResponse
          })

        it('should render the SideNav component', function() {
          expect(wrapper.find(SideNav)).to.have.length(1);
        });

        it('Should render a list of questions, equal to the length of the number of survey questions', function() {
            expect(wrapper.find(Question)).to.have.length(2);
          });

        it('Should show a message if there are unanswered questions', function() {
            expect(wrapper.find('answer-status-none')).to.have.length(0);
        });


        it('Should update the state of active question if a SideNav button is clicked', function() {

        });
        it('Should update the state of active question if a next button is clicked', function() {

        });
        it('Should update the state of active question if a back button is clicked', function() {

        });
        // it('Should have an initial state of [] for responses', function() {
        //
        // });
        it('Should have a submit button that sends the responses to the API', function() {

        });

        describe('SideNav', function() {
          const wrapper = mount(
            <SideNav questions = {testQuestion} />
          );
          it('Should have an initial state of 1 for activeLink', function() {
            expect(wrapper.props().activeLink).to.equal(1);
          });
          it('Should have an onClick handler on each link', function() {
            var link = wrapper.find('.isActive');
            link.props().onClick().to.be.defined;
          });
          it('Should update the activeLink state if a link is clicked', function() {

          });
          it('Should update activeLink state every time the activeQuestion state is changed', function() {

          });

        });

        describe('Question', function() {
          const wrapper = mount(
                <Question
                question = {testQuestion[0]}
                activeQuestion = {1}
                id = {2}
                />
            );

          it('Should have an initial state of 1 for active question', function() {

            expect(wrapper.props().activeQuestion).to.equal(1);
          });

          it('Should have a back button, unless the question ID is 1', function() {
            expect(wrapper.find(''))
          });
          it('Should have a next button', function() {

          });
          it('Should have an initial className of inactive, unless the question ID is 1', function() {

          });
          it('Should have an initial className of active, if the question ID is 1', function() {

          });
          it('If it has a next button, onClick this should update the activeQuestion state + 1', function() {

          });
          it('If it has a back button, onClick this should update the activeQuestion state - 1', function() {

          });
          it('If the active state is inActive, the fields should be disabled', function() {

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

    describe('Results', function() {
      it('Should fetch the results from the API', function() {

      });
      it('Should render a list of responses using the fetched data', function() {

      });
      describe('Response', function() {
        it('After mounting, should fetch a list of questions and answers using the responseID that corresponds to the response', function() {

        });
        it('Should update the state of questions after fetching the data', function() {

        });
      });
    });
});
