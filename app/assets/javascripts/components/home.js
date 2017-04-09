import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {

    render() {

        return (
          <div className="col-xs-10 col-xs-offset-1 welcome">
            <h1>Welcome to the Pizza Survey!</h1>
            <Link to="/survey" className="btn btn-primary">
              Take Survey
            </Link>
          </div>
        );

      }

}

export default Home;
