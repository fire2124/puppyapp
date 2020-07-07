import React, { Component } from "react";
import { Field } from "react-final-form";

class FormTextField extends Component {
  render() {
    return (
      <div className="w-full max-w-xs w-64 ">
        <h1 className="text-black text-lg font-bold ">
          {" "}
          <label>{this.props.label}</label>
        </h1>
        <div className="border-b border-black my-4 w-64">
          <Field
            className={this.props.className}
            name={this.props.name}
            component="input"
            type={this.props.type}
            // placeholder={this.props.text}
          />
        </div>
      </div>
    );
  }
}

export default FormTextField;
