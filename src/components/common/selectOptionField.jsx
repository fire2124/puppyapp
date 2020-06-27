import React, { Component } from "react";
import { Field } from "react-final-form";

class SelectOptionField extends Component {
  render() {
    return (
      <div className="  my-4 text-black  focus:outline">
            <label className="font-bold">{this.props.label}</label>
            <Field name={this.props.name} component="select" className="form-control mt-8 w-2/3 border-b border-black">
              <option />
              {this.props.options.map((option) => (
                <option value={option.id}>{option.name}</option>
              ))}
            </Field>
      </div>
    );
  }
}
export default SelectOptionField;
