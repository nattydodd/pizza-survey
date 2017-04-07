import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import QuestionList from '../components/question_list';


export class Survey extends Component {
  constructor(props) {
    super(props)

    this.state = {
      response: []
    }

  }

  render() {

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
