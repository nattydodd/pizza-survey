import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

class Thankyou extends Component {

    render() {

        return (
          <div className="thankyou-component">
            Thank-you for submitting your response!
            <Link to="/results" className="btn btn-primary">
              View Results
            </Link>
          </div>
        );

      }

}

export default Thankyou;
