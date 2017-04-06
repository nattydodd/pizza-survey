import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';


class Survey extends Component {
  render() {

      return (
        <div className="container">
          <h1>{this.props.questions[0].question}</h1>
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
