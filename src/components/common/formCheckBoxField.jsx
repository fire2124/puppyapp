import React, { Component } from "react";
import { Field } from "react-final-form";

class FormCheckBox extends Component {
    render() {
        return <div>
            <Field name={this.props.name} component="input" type="checkbox" className={this.props.className}/>
            <label className="ml-2">{this.props.label}</label>
        </div>
    }
}

export default FormCheckBox;