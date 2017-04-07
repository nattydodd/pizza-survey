import React from 'react';
import { Component } from 'react';



class AnswerField extends Component {

 displayRadioInputs(options) {
    return options.map((option) => {
      return (
        <div key={option}>
          <input type="radio" value={option} /><label>{option}</label>
        </div>
      );
    });
  }

  displaySelectInputs(options) {
    return options.map((option) => {
      console.log(option);
      return (
          <option key={option} value={option}>{option}</option>
      );
    });
  }

 renderFields(style, options, id) {
    if ( style === "multiple choice" ) {
      return (
          <fieldset>
            {this.displayRadioInputs(options)}
          </fieldset>
      );
    }

    if ( style === "free text" ) {
      return (
        <input type="text" />
      );
    }

    if ( style === "single answer" ) {
        return (
          <select>
            {this.displaySelectInputs(options)}
          </select>
       );
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
