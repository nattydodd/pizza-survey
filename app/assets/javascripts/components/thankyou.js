import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

class Thankyou extends Component {

  render() {
    return (
      <div className="container thankyou-component">
        <div className="col-md-6 col-md-offset-3 thankyou-inner">
          <h2 className="thankyou-title">Thank-you for submitting your response!</h2>
          <Link to="/results" className="btn btn-primary">
            View Results
          </Link>
        </div>
      </div>
    );
  }
}

export default Thankyou;
