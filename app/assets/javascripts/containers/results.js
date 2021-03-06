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
    if (results.length === 0) {
      return (
        <div className="result-none">
          <h3 className="results-none-title">There are no responses yet.</h3>
          <Link to="/survey" className="btn btn-primary">
            Take Survey
          </Link>
        </div>
      );
    }
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
        <div className="results-component">
          <div className="container-fluid results">
            <h1 className="results-title">
              Results
            </h1>
            <p className="results-text">
              Thank you to all those who participated in this pizza study.<br /><br />
             <i className="results-icon fa fa-chevron-down" aria-hidden="true"></i>
            </p>
          </div>
          <div className="col-md-8 col-md-offset-2 results-inner">
            {this.renderResults(this.props.results)}
          </div>
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
