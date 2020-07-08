import React, { Component } from "react";
import { Field } from "react-final-form";

var iPlus = 0;
var iMinus = 0;

class FormNumberField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onPlus: 0,
      onMinus: 0,
      value: 0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
  }

  handleInputChange() {
    let val = this.state.onPlus + this.state.onMinus;
    if (val <= 0) val = 0;
    this.setState({value: val});
    console.log("this is Handle:", this.state.value);

  }

  handlePlus() {
    iPlus += 1;
    this.setState({ onPlus: iPlus });
    console.log(this.state.onPlus);
  }
  handleMinus() {
    iMinus -= 1;
    this.setState({ onMinus: iMinus });
    console.log(this.state.onMinus);
  }

  render() {
    return (
      <div className="xl:flex xl:flex-no-wrap xl:justify-center mt-5 ">
        <div className="justify-between input-group plus-minus-input">
          <div className="input-group-button">
            {/* <button
              name="firstMinus"
              type="button"
              className="button hollow circle fa fa-minus"
              data-quantity="minus"
              data-field="quantity"
              onClick={this.handleMinus}
            ></button> */}
          </div>
        </div>
        <div className="justify-between">
          <Field
            name="numOfPeopleInHousehold"
            component="input"
            type="number"
            step={1}
            min={0}
            className="w-10  border-b border-black text-center"
            // value={this.state.value}
            // onChange={this.handleInputChange}
            
          />
        </div>
        <div className="justify-between input-group plus-minus-input">
          <div className="input-group-button flex1">
            {/* <button
              type="button"
              className="button hollow circle fa fa-plus"
              data-quantity="plus"
              data-field="quantity"
              onClick={this.handlePlus}
            ></button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default FormNumberField;
