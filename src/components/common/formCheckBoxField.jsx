import React, { Component } from "react";
import { Field } from "react-final-form";

class FormCheckBox extends Component {
    render() {
        return <div>
            <label>{this.props.label}</label>
            <Field name={this.props.name} component="input" type="checkbox" />
        </div>
    }
}

export default FormCheckBox;