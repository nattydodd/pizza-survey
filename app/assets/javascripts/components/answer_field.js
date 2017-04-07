import React from 'react';
import { Component } from 'react';


class AnswerField extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({value: event.target.value});
    this.props.onInputUpdate(this.state.value);  
  }

 displayRadioInputs(options) {
    return options.map((option) => {
      return (
        <div key={option}>
          <input type="radio" value={option} disabled={this.props.disabledState}/><label>{option}</label>
        </div>
      );
    });
  }

  displaySelectInputs(options) {
    return options.map((option) => {
      return (
          <option key={option} value={option} disabled={this.props.disabledState}>{option}</option>
      );
    });
  }

 renderFields(style, options) {
    if ( style === "multiple choice" ) {
      return (
          <fieldset>
            {this.displayRadioInputs(options)}
          </fieldset>
      );
    }

    if ( style === "free text" ) {
      return (
        <input type="text" disabled={this.props.disabledState} value={this.state.value} onChange={this.handleInputChange}/>
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
