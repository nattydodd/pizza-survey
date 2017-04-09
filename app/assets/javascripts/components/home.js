import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {

    render() {

        return (
          <div className="home-component">
            <div className="container-fluid welcome">
              <div className="col-xs-10 col-xs-offset-1 welcome-inner">
                <h1 className="welcome-title">Welcome to the Pizza Survey!</h1>
                <h4>This survey was designed to collect your very important thoughts about pizza.</h4>
                <div className="welcome-arrow">
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <Link to="/survey" className="btn btn-primary">
                  Take Survey
                </Link>
              </div>
            </div>

            <div className="container">
              <div className="row detail detail-one">
                <div className="col-sm-4 detail-left">
                  <i className="detail-icon fa fa-share-square-o" aria-hidden="true"></i>
                </div>
                <div className="col-sm-7 detail-right">
                  <h4 className="detail-title">
                    This survey app is reusable.
                  </h4>
                  <p className="detail-text">
                    Though this survey is about pizza, any list of survey questions can be entered into the reducer and
                    this application will display the survey.
                    Scalability: A form could be incorporated to collect the question data (question, description and style/type) from the user.
                    It could be sent to the backend API and saved in the database, then fetched from the server instead of hardcoding it into the reducer.
                  </p>
                </div>
              </div>

              <div className="row detail detail-two">
                <div className="col-sm-4 detail-left">
                  <i className="detail-icon fa fa-mobile" aria-hidden="true"></i>
                </div>
                <div className="col-sm-7 detail-right">
                  <h4 className="detail-title">
                    This survey is responsive and mobile-first.
                  </h4>
                  <p className="detail-text">
                    This application is simple and easy to use on any device. It uses webpack to bundle all javascript files to allow for fast loading times.
                  </p>
                </div>
              </div>

              <div className="row detail detail-two">
                <div className="col-sm-4 detail-left">
                  <i className="detail-icon fa fa-cogs" aria-hidden="true"></i>
                </div>
                <div className="col-sm-7 detail-right">
                  <h4 className="detail-title">
                    This survey is built using Ruby on Rails and React.js.
                  </h4>
                  <p className="detail-text">
                    Other libraries and frameworks include:<br />
                    • Webpack, Webpack Dev Server & Babel<br />
                    • Redux<br />
                    • Database: Postgresql<br />
                    • SASS<br />
                    • Yarn and npm<br />
                    • Mocha, Chai, Enzyme & Jsdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      }

}

export default Home;
