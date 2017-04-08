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
    let option = event.target.value;
    let valueArray = this.state.valueArray;
    let origArray = this.state.valueArray;
    let newArray = [];
    let me = this;

    console.log(`orig state`, origArray);

    (function () {
      valueArray.map((value, idx, array) => {
          if (value === option) {
            console.log(`match`);
            valueArray = array.splice(idx, 1);
          }
          return valueArray
          console.log(`new array`, valueArray);
        });

        if (!origArray.includes(option)) {
          console.log(`new selection`, option);
          valueArray.push(option);
        }
        newArray = valueArray

        sendState(me, newArray);

    })();

    function sendState(me, updatedArray) {
      console.log(`sending state`, updatedArray);
      me.setState({value: updatedArray});
      me.props.onInputUpdate(me.state.valueArray);
      console.log(`new state`, me.state.valueArray);
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
        <input type="text" disabled={this.props.disabledState} value={this.state.value} onChange={this.handleInputChange}/>
      );
    }

    if ( style === "single answer" ) {
        return (
          <select value={this.state.value} onChange={this.handleInputChange}>
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
