import React, { Component } from "react";

class Select extends Component {
  render() {
    return (
      <div className="  my-4 text-black  focus:outline">
        <div>
          <label className="font-bold">{this.props.label}</label>
        </div>
        <div>
          <select
            name={this.props.name}
            id={this.props.name}
            className="form-control mt-8 w-2/3 border-b border-black"
          >
            <option value=""  />
            {this.props.options.map((option) => (
              <option key={option._id} value={option._id} >
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
export default Select;
