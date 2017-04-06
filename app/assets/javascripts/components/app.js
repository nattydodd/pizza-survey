import React from 'react';
import { Component } from 'react';
{/*import TopNav from './containers/topnav.js';*/}


export default class App extends Component {
  render() {
    return (
        <div className="app">
          {this.props.children}
        </div>
    );
  }
}
