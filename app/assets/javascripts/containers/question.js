import React from 'react';
import { Component } from 'react';

class Question extends Component {
  render() {
    return (
        <div>
         <h1>{this.props.question.question}</h1>
         <h3>{this.props.question.description}</h3>
         <h5>{this.props.question.options}</h5>
         <h5>{this.props.question.style}</h5>
        </div>
    );
  }
}

export default Question;
