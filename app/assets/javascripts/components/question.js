import React from 'react';
import { Component } from 'react';
import AnswerField from './answer_field';
import { connect } from 'react-redux';

class Question extends Component {


  handleActiveChange(newActive) {
    this.props.onNextClick(newActive);
    // triggers the handleNext function that is bound to the Question List component
  }

  handleResponse(data) {
    this.props.onInputUpdate(
      {
        question : this.props.question.question,
        answer: data,
        style: this.props.question.style,
        response_id: this.props.responseId
      }
    );
  }


  render() {

    const item = this.props.question

    return (
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 question-container">
          <div className={this.props.activeQuestion === item.id ? 'activeQuestion' : 'inactiveQuestion'}>
           <h2>{item.question}</h2>
           <h4>{item.description}</h4>
           <h5>{item.style}</h5>
           <AnswerField
            id = {item.id}
            style = {item.style}
            options = {item.options}
            disabledState = {this.props.activeQuestion === item.id ? false : true }
            onInputUpdate = {this.handleResponse.bind(this)} />

          <button
            className={item.id === 1 ? 'no-button' : 'btn btn-primary'}
            onClick={() => {this.handleActiveChange(item.id - 1)}}
            disabled={this.props.activeQuestion === item.id ? false : true }>
            Back
          </button>

          <button
            className={this.props.lastQuestion === true ? 'no-button' : 'btn btn-primary'}
            onClick={() => {this.handleActiveChange(item.id + 1)}}
            disabled={this.props.activeQuestion === item.id ? false : true }>
            Next
          </button>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    responseId : state.responseId
  }
}

export default connect(mapStateToProps)(Question);
