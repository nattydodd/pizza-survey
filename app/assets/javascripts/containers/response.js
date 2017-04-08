import React from 'react';
import { Component } from 'react';
import axios from 'axios';

class Response extends Component {

  constructor(props) {
    super(props);

    this.state = {
      questions: null
    }
  }

  componentWillMount() {

    axios.get(`api/v1/responses/${this.props.id}/questions.json`)
      .then((response) => {
        this.setState({
          questions: response.data
        });
      })
      .catch((response) => {
        this.setState({
          questions: null
        });
      });
  }

  renderQuestions(questions) {
    return questions.map((question) => {
      return (
        <div key={question.id}>
          <h2>{question.question}</h2>
          <h3>{question.answer}</h3>
        </div>
      );
    });
  }


  render() {
    if (!this.state.questions) {
      return (
        <div>Loading...</div>
      );
    }
      return (
        <div>
          {this.renderQuestions(this.state.questions)}
        </div>
      );

  }
}


export default (Response);
