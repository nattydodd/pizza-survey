import React from 'react';
import { Component } from 'react';
import AnswerField from '../components/answer_field';
require('smoothscroll-polyfill').polyfill();

class Question extends Component {


  handleActiveChange(newActive) {
    this.props.onNextClick(newActive);


  }

  componentDidMount() {

      if (this.targetElement.className === "activeQuestion") {
        console.log(this.targetElement);
      }


    this.scrollToElement(this.targetElement);
  }


  scrollToElement(pageElement) {

    window.scroll({
      top: pageElement.offsetTop,
      left: 0,
      behavior: 'smooth'
    });

 }


  render() {

    return (
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 question-container">
          <div
          className={this.props.activeQuestion === this.props.question.id ? 'activeQuestion' : 'inactiveQuestion'}
          ref={(div) => { this.targetElement = div; }}>
           <h2>{this.props.question.question}</h2>
           <h4>{this.props.question.description}</h4>
           <h5>{this.props.question.style}</h5>
           <AnswerField
            id = {this.props.question.id}
            style = {this.props.question.style}
            options = {this.props.question.options}
            disabledState = {this.props.activeQuestion === this.props.question.id ? false : true } />

          <button
          className={this.props.question.id === 1 ? 'no-button' : 'btn btn-primary'}
          onClick={() => {this.handleActiveChange(this.props.question.id - 1)}}
          disabled={this.props.activeQuestion === this.props.question.id ? false : true }>
          Back
          </button>

          <button
          className={this.props.lastQuestion === true ? 'no-button' : 'btn btn-primary'}
          onClick={() => {this.handleActiveChange(this.props.question.id + 1)}}
          disabled={this.props.activeQuestion === this.props.question.id ? false : true }>
          Next
          </button>
          </div>
        </div>
      </div>
    );
  }
}


export default Question;
