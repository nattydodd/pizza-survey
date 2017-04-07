import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import QuestionList from '../components/question_list';


export class Survey extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      responseId: null,
      response: []
    }

  }

  render() {

    const { field: name, handleSubmit } = this.props

    if (!this.state.responseId) {
      return (
        <div className="container">
          <h2>Thanks for participating!</h2>
          <h4>Please enter your name to get started</h4>

          <form id="user-form">
            <input type="text" placeholder="Name" className="form-control" value={this.state.value} onChange={this.handleChange} {...name} />
            <button type="submit" className="btn btn-primary login-button">Start Survey</button>
          </form>
        </div>
      );
    }

      return (
        <div className="container">
          <QuestionList questions = {this.props.questions} />
          <div className="final-submit">
            <button className="btn btn-primary">Submit!</button>
          </div>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions
  }
}

export default connect(mapStateToProps)(Survey);
