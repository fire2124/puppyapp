import React, { Component } from "react";
import { Field } from "react-final-form";

class FormTextField extends Component {
    render() {
        return <div>
            <h1 class="text-black text-lg font-bold "> <label>{this.props.label}</label></h1>
           <div class="w-full max-w-sm">
            <Field
                className= "bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                name={this.props.name}
                component="input"
                type="text"
                placeholder={this.props.text}
            />
            </div>
        </div>
    }
}

export default FormTextField;