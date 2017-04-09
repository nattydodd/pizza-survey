import React from 'react';
import { Component } from 'react';


class AnswerField extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      valueArray: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultipleInputChange = this.handleMultipleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({value: event.target.value});
    this.props.onInputUpdate(event.target.value);
  }



  handleMultipleInputChange(event) {
  // collect the data for the array of selections
    let option = event.target.value;
    let valueArray = this.state.valueArray;
    let origArray = this.state.valueArray;
    let newArray = [];
    let me = this;

    console.log(`orig state`, origArray);
  // inner function checks if the array contains the selection already
  // if it's there already, it will remove it (box has been unchecked)
    (function () {
      valueArray.map((value, idx, array) => {
          if (value === option) {
            valueArray = array.splice(idx, 1);
          }
          return valueArray
        });
  // if it is a new selection, add it to the array
        if (!origArray.includes(option)) {
          valueArray.push(option);
        }
        newArray = valueArray
  // update the state so it can be used for the next selection
        sendState(me, newArray);

    })();

    function sendState(me, updatedArray) {
      // callback function to make sure the array data is collected first
      me.setState({value: updatedArray});
      // bound function to parent classes
      me.props.onInputUpdate(me.state.valueArray);
    }

  }


 displayRadioInputs(options) {
    return options.map((option) => {
      return (
        <div key={option}>
          <input type="checkbox" value={option} disabled={this.props.disabledState}/><label>{option}</label>
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
          <fieldset value={this.state.value} onChange={this.handleMultipleInputChange}>
            {this.displayRadioInputs(options)}
          </fieldset>
      );
    }

    if ( style === "free text" ) {
      return (
        <input className="free-text" type="text" disabled={this.props.disabledState} value={this.state.value} onChange={this.handleInputChange}/>
      );
    }

    if ( style === "single answer" ) {
        return (
          <select value={this.state.value} onChange={this.handleInputChange}>
          <option default disabled></option>
            {this.displaySelectInputs(options)}
          </select>
       );
    }

  }

  render() {
    return (
      <div className="answer-field-component">
        {this.renderFields(this.props.style, this.props.options)}
      </div>
    )
  }

}

export default AnswerField;
