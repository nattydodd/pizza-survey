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

  sendResponse(data) {
    var response = this.state.response;
    response.shift();
    var answer = []
    {/*remove first blank element from array
      and refactor array so it just contains an array of data objects */}
    answer = response.map((object) => {
      return object.data
    });

    console.log(answer);
    answer.forEach((question) => {
      axios.post(`api/v1/responses/${this.props.responseId}/questions.json`, question)
        .then((response) => {
          console.log("success");
          this.context.router.push('/thankyou');
        })
        .catch((response) => {
          console.log("fail");
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
              <h1 className="final-submit-title">All Finished? You Can Submit Your Survey Response below.</h1>
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
