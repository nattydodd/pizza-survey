import React from 'react';
import { Component } from 'react';

class AnswerField extends Component {

 renderFields(style, options) {
    if ( style === "multiple choice" ) {
      return options.map((option) => {
        return (
          <fieldset key={option}>
            <input type="radio" name="select" id={option} value={option} /><label>{option}</label>
          </fieldset>
        );
      });
    }

    if ( style === "free text" ) {

    }

    if ( style === "single answer" ) {

    }

  }

  render() {
    return (
      <div>
        {this.renderFields(this.props.style, this.props.options)}
      </div>
    )
  }

}

export default AnswerField;
