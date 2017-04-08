import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {

    render() {

        return (
          <div className="sidenav">
            Welcome to the Pizza Survey!
            <Link to="/survey" className="btn btn-primary">
              Take Survey
            </Link>
          </div>
        );

      }

}

export default Home;
