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
          <h1 className="results-title">Results</h1>
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
