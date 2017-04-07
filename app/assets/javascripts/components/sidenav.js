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
        <div key={idx}>
          <p onClick={() => {this.handleActiveChange(idx + 1)}}>{idx + 1}</p>
        </div>
      );
    });
  }

  render() {

      return (
        <div className="sidenav">
          {this.renderSideNavItems(this.props.questions)}
        </div>
      );

    }

}


export default SideNav;
