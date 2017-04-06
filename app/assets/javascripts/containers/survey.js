import React from 'react';
import { Component } from 'react';


export default class Survey extends Component {
  render() {

      return (
        <div className="container-fluid wrapper">
          {/*<TopNav />*/}
            <div className="app">
              {this.props.children}
            </div>
        </div>
      );
  }
}
