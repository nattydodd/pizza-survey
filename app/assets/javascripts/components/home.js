import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {

    render() {

        return (
          <div className="container home">
            <div className="col-xs-10 col-xs-offset-1 welcome-wrapper">
              <h1 className="welcome-title">Welcome to the Pizza Survey!</h1>
              <Link to="/survey" className="btn btn-primary">
                Take Survey
              </Link>
            </div>
          </div>
        );

      }

}

export default Home;
