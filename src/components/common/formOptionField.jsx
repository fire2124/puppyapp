import React, { Component } from "react";
import { Field } from "react-final-form";

class FormOptionField extends Component {
  render() {
    return (
      <div>
        <label className="font-bold">{this.props.label}</label>
        <div className="flex flex-wrap">
          {this.props.options.map((option) => (
            <div className="mt-2 w-1/2">
              <label>
                <Field
                  name={this.props.name}
                  component="input"
                  type={this.props.type}
                  value={option.id}
                  className={this.props.className}
                />{" "}
                {option.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FormOptionField;
