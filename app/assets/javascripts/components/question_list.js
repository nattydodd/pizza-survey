import React from 'react';
import { Component } from 'react';
import Question from './question';
import SideNav from './sidenav';
require('smoothscroll-polyfill').polyfill();


class QuestionList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeQuestion: 1
    }
  }

  // is a bound prop on the question component. Updates active question state.
  handleNext(newActive) {
    this.setState({ activeQuestion: newActive });
    this.scrollToElement(this.refs[newActive]);
  }

  scrollToElement(pageElement) {
    window.scroll({
      top: pageElement.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  renderList(questions) {
    return questions.map((question, idx, array) => {
      return (
        <div key={question.id} ref={question.id} >
          <Question
            question = {question}
            onNextClick = {this.handleNext.bind(this)}
            activeQuestion = {this.state.activeQuestion}
            lastQuestion = {idx === array.length - 1 ? true : false} />
         </div>
      );
    });
  }

  render() {

      return (
        <div className="row">
          <div className="container col-xs-10 col-xs-offset-1">
            {this.renderList(this.props.questions)}
          </div>
          <div className="col-xs-1">
            <SideNav
              questions = {this.props.questions}
              onNextClick = {this.handleNext.bind(this)} />
          </div>
        </div>
      );

  };
}


export default QuestionList;
