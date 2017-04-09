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
     this.props.createResponseId(props);
   }

   componentWillReceiveProps(nextprops) {
     this.setState({
       responseId: nextprops.responseId
     });
   }

  render() {

    const { fields: {name}, handleSubmit } = this.props;

    if (!this.state.responseId) {
      return (
        <div className="container">
          <div className="col-md-6 col-md-offset-3 signup">
            <h2>Thanks for participating!</h2>
            <h4>Please enter your name to get started</h4>

            <form id="user-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}` }>
                <input type="text" placeholder="Name" className="form-control" {...name} />
                <div className="text-help">
                  {name.touched ? name.error : ''}
                </div>
                <button type="submit" className="btn btn-primary login-button">Start Survey</button>
              </div>
            </form>
          </div>
        </div>
      );
    }

      return (
        <div className="container">
          <QuestionList
            questions = {this.props.questions}
            responseId = {this.props.responseId}/>
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

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'You must enter a name';
  }

  return errors;
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'ResponseID',
  fields: ['name'],
  validate
})(Survey));
