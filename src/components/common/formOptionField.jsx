import React, { Component } from "react";
import { Field } from "react-final-form";

class FormOptionField extends Component {
    render() {
        return <div>
            <label>{this.props.label}</label>
            <div>
                {this.props.options.map(option =>
                    <label>
                        <Field
                            name={this.props.name}
                            component="input"
                            type={this.props.type}
                            value={option.id}
                        />{' '}
                        {option.name}
                    </label>
                )}
            </div>
        </div>
    }
}

export default FormOptionField;