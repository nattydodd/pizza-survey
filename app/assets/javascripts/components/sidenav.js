import React from 'react';
import { Component } from 'react';

class SideNav extends Component {

  handleActiveChange(newActive) {
    this.props.onNextClick(newActive);
    // triggers the handleNext function that is bound to the Question List component
  }

  renderSideNavItems(links) {
    return links.map((link, idx, array) => {
      return (
        <div className={this.props.activeQuestion === idx + 1 ? 'navItem isActive' : 'navItem isInActive'}
         key={idx}>
          <p onClick={() => {this.handleActiveChange(idx + 1)}}>{idx + 1}</p>
        </div>
      );
    });
  }

  render() {

      return (
        <div className="sidenav-component">
          {this.renderSideNavItems(this.props.questions)}
          <div className={this.props.activeQuestion === this.props.questions.length + 1 ? 'sidenav-submit isActive' : 'sidenav-submit isInActive'}>
            <p onClick={() => {this.handleActiveChange(this.props.questions.length + 1)}}>
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </p>
          </div>
        </div>
      );

    }

}


export default SideNav;
