import React, { Component } from "react";
import { Field } from "react-final-form";

class FormTextField extends Component {
    render() {
        return <div class="w-full max-w-xs">
            <h1 class="text-black text-lg font-bold "> <label>{this.props.label}</label></h1>
           <div class="border-b border-black my-4">
            <Field
                className= "mr-64 focus:outline-none"
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