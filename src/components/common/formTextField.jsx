import React, { Component } from "react";
import { Field } from "react-final-form";

class FormTextField extends Component {
    render() {
        return <div>
            <label>{this.props.label}</label>
            <Field
                name={this.props.name}
                component="input"
                type="text"
                placeholder="Meno"
            />
        </div>
    }
}

export default FormTextField;