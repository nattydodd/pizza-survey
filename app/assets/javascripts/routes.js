import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/home';
import Survey from './containers/survey';
import Thankyou from './components/thankyou';
import Results from './containers/results';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="survey" component={Survey} />
    <Route path="thankyou" component={Thankyou} />
    <Route path="results" component={Results} />
  </Route>
);
