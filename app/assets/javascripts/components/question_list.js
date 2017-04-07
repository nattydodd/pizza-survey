import React from 'react';
import { Component } from 'react';
import Question from '../containers/question';


class QuestionList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeQuestion: 1
    }
  }

  handleNext(newActive) {
    this.setState({ activeQuestion: newActive });
  }


  renderList(questions) {
    return questions.map((question, idx, array) => {
      return (
        <Question
          key = {question.id}
          question = {question}
          onNextClick = {this.handleNext.bind(this)}
          activeQuestion = {this.state.activeQuestion}
          lastQuestion = {idx === array.length - 1 ? true : false} />
      );
    });
  }

  render() {

      return (
        <div className="container">
          {this.renderList(this.props.questions)}
        </div>
      );

  };
}


export default QuestionList;
