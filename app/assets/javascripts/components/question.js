import React from 'react';
import { Component } from 'react';
import AnswerField from './answer_field';
import { connect } from 'react-redux';

export class Question extends Component {

  constructor(props) {
    super(props);

    this.state = {
      response: {}
    }
  }


  handleActiveChange(newActive) {
    this.props.onNextClick(newActive);

    // triggers the handleNext function that is bound to the Question List component
  }

  handleResponse(data) {

    let response = {
      question : this.props.question.question,
      answer: data.constructor === Array ? data.toString() : data,
      style: this.props.question.style,
      response_id: this.props.responseId
    }

    this.props.onInputFinished(response, this.props.question.id);
  }


  render() {

    const item = this.props.question

    return (
      <div className="row question-component">
        <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 question-inner">
          <div className={this.props.activeQuestion === item.id ? 'questionItem isActive' : 'questionItem isInActive'}>
           <h2 className="questionItem-question">{item.id}. {item.question}</h2>
           <h4 className="questionItem-description">{item.description}</h4>
           <AnswerField
            id = {item.id}
            style = {item.style}
            options = {item.options}
            disabledState = {this.props.activeQuestion === item.id ? false : true }
            onInputUpdate = {this.handleResponse.bind(this)} />

            <div className="button-container">
              <button
                className={item.id === 1 ? 'no-button' : 'btn btn-primary'}
                onClick={() => {this.handleActiveChange(item.id - 1)}}
                disabled={this.props.activeQuestion === item.id ? false : true }>
                Back
              </button>

              <button
                className="btn btn-primary"
                onClick={() => { this.handleActiveChange(item.id + 1)}}
                disabled={this.props.activeQuestion === item.id ? false : true }>
                Next
              </button>
            </div>
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
