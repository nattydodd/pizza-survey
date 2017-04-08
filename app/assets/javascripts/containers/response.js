import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResponse } from '../actions/index';
import axios from 'axios';

class Results extends Component {

  constructor(props) {
    super(props);

    this.state = {
      response: {}
    }
  }

  componentWillMount() {

    axios.get(`api/v1/responses/${this.props.id}/questions.json`)
      .then((response) => {
        this.setState({
          response: response
        });
      })
      .catch((response) => {
        this.setState({
          response: null
        });
      });
  }


  render() {
    if (!this.state.response) {
      return (
        <div>Loading...</div>
      );
    }
      return (
        <div>
          <h2>{this.state.response.question}</h2>
          <h3>{this.state.response.answer}</h3>
        </div>
      );

  }
}

function mapStateToProps(state) {
  return {
    response : state.response
  }
}

export default connect(mapStateToProps, {fetchResponse})(Results);
