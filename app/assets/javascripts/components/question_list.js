import React from 'react';
import { Component, PropTypes } from 'react';
import Question from './question';
import SideNav from './sidenav';
import axios from 'axios';
import { Link } from 'react-router';
require('smoothscroll-polyfill').polyfill();


class QuestionList extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      activeQuestion: 1,
      response: []
    }
  }

  // is a bound prop on the question component. Updates active question state.
  handleNext(newActive) {
    this.setState({ activeQuestion: newActive });
    this.scrollToElement(this.refs[newActive]);
  }

  handleResponse(data, id) {
    let response = this.state.response
    response[id] = { data }
    // response needs to have seperate objects for each question

    this.setState({ response });
  }

  scrollToElement(pageElement) {
    window.scroll({
      top: pageElement.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  calculateEmptyResponses() {
    var responses = this.state.response;
    var filtered = responses.filter((n) => {
      return n != null && n.data.answer != ""
    });
    var unAnswered = this.props.questions.length - filtered.length;

    return unAnswered;
  }

  sendResponse(data) {
    var response = this.state.response;
    response.shift();
    var answer = []

    answer = response.map((object) => {
      return object.data
    });

    answer.forEach((question) => {
      axios.post(`api/v1/responses/${this.props.responseId}/questions.json`, question)
        .then((response) => {
          this.context.router.push('/thankyou');
        })
        .catch((error) => {
          console.log(error);
        });
    })

  }

  renderList(questions) {
    return questions.map((question, idx, array) => {
      return (
        <div key={question.id} ref={question.id} >
          <Question
            question = {question}
            onNextClick = {this.handleNext.bind(this)}
            activeQuestion = {this.state.activeQuestion}
            lastQuestion = {idx === array.length - 1 ? true : false}
            onInputFinished = {this.handleResponse.bind(this)} />
         </div>
      );
    });
  }

  render() {

      return (
        <div className="row question-list-component">
          <div className="container col-xs-10 col-xs-offset-1 question-list-inner">
            {this.renderList(this.props.questions)}
            <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 final-submit" ref={this.props.questions.length + 1}>
              <h2 className="final-submit-title">All Finished? You Can Submit Your Survey Response below.</h2>
              <p className={this.calculateEmptyResponses() === 0 ? 'answer-status-none' : 'answer-status'}>
                <i className="answer-status-icon fa fa-exclamation-circle" aria-hidden="true"></i>
                &nbsp;&nbsp;You have {this.calculateEmptyResponses()} unanswered questions! Please complete the survey first.
              </p>
              <button className="btn btn-primary" onClick={() => this.handleNext(this.props.questions.length) }>Back</button>
              <button className="btn btn-primary" onClick={() => this.sendResponse(this.state.response) }>Submit!</button>
            </div>
          </div>
          <div className="col-xs-1">
            <SideNav
              questions = {this.props.questions}
              activeQuestion = {this.state.activeQuestion}
              onNextClick = {this.handleNext.bind(this)} />
          </div>
        </div>
      );

  };
}


export default QuestionList;
