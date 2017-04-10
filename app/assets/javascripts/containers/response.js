import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

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
        <div className="response-inner" key={question.id}>
          <h4 className="response-question">
            <i className="response-icon fa fa-question-circle-o" aria-hidden="true"></i>
            &nbsp;&nbsp;{question.question}
          </h4>
          <h4 className="response-answer">
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            &nbsp;&nbsp;{question.answer}
          </h4>
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
        <div className={this.props.responseId === this.props.id ? 'user-response' : ''}>
          {this.renderQuestions(this.state.questions)}
        </div>
      );

  }
}

function mapStateToProps(state) {
  return {
    responseId : state.responseId
  }
}


export default connect(mapStateToProps)(Response);
