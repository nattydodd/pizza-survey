import React from 'react';
import { Component } from 'react';
import Question from '../containers/question';


class QuestionList extends Component {

  renderList(questions) {
    return questions.map((question) => {
      return (
        <Question key={question.id} question = {question} />
      );
    });
  }

  render() {

      return (
        <div>
            {this.renderList(this.props.questions)}
        </div>
      );

  };
}


export default QuestionList;
