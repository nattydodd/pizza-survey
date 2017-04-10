# README

This is a survey application that renders pre-written survey questions. The responses are collected via client-side interaction, and posted to a backend API (built in Rails). All survey results can be fetched from the server and viewed from the application frontend.

Tools Used:

* Ruby version 2.3.1
* Rails 5.0.2
* React 15.4.2
* Webpack 2.3.3 + Babel
* webpack-dev-server
* Database: postgresql
* SASS
* Responders gem to assist with returning json response from api requests
* Yarn and npm

Additional Dependencies:
* react-router
* redux-form
* react-redux
* redux-promise
* axios

Testing Libraries
* Mocha
* Chai
* Enzyme
* jsdom

--

To Setup Dev Env:
* $ sudo npm install -g nodemon
* $ sudo npm install -g node-sass
* $ npm install webpack -g
* $ gem install foreman

Dev Database Initialization:
* Ensure postgresql is running locally
* $ Rails db:setup

To Start Dev Server:
* $ foreman start -f Procfile.dev

To run test suite:
* $ npm test
