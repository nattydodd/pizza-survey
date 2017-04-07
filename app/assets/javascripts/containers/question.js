import React from 'react';
import { Component } from 'react';
import AnswerField from '../components/answer_field';

class Question extends Component {

  handleActiveChange() {
    this.props.onNextClick(this.props.question.id + 1);
  }


  render() {
    return (
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 question-container">
         <h2>{this.props.question.question}</h2>
         <h4>{this.props.question.description}</h4>
         <h5>{this.props.question.style}</h5>
         <AnswerField
          id = {this.props.question.id}
          style = {this.props.question.style}
          options = {this.props.question.options} />
        </div>
        <button
        className="btn btn-primary"
        onClick={() => {this.handleActiveChange()}}>
        Next
        </button>
      </div>
    );
  }
}

export default Question;
