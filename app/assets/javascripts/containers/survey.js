import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { createResponseId } from '../actions/index';
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

  onSubmit(props) {
     console.log(props);
     this.props.createResponseId(props);
   }

   componentWillReceiveProps(nextprops) {
     console.log(nextprops);
     this.setState({
       responseId: nextprops.responseId
     });
   }

  render() {

    const { fields: {name}, handleSubmit } = this.props;

    if (!this.state.responseId) {
      return (
        <div className="container">
          <h2>Thanks for participating!</h2>
          <h4>Please enter your name to get started</h4>

          <form id="user-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <input type="text" placeholder="Name" className="form-control" {...name} />
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
    questions: state.questions,
    responseId: state.responseId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createResponseId }, dispatch );
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'ResponseID',
  fields: ['name']
})(Survey));
