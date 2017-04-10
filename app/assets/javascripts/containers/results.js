import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchResults } from '../actions/index';
import Response from './response';

class Results extends Component {

  componentWillMount() {

    this.props.fetchResults();
  }

  renderResults(results) {
    return results.map((result) => {
      return (
        <div className="result" key={result.id}>
          <h3 className="result-name">{result.name}</h3>
          <Response id = {result.id} />
          <hr />
        </div>
      );
    });
  }

  render() {

    if (!this.props.results) {
      return (
        <div>
          Loading...
        </div>
      );
    }
      return (
        <div className="container results">
          <h2 className="results-title">
            Results
          </h2>
          <p className="results-text">Thank you to all those who participated in this pizza study.</p> 
          {this.renderResults(this.props.results)}
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    results: state.results
  }
}

export default connect(mapStateToProps, {fetchResults})(Results);
