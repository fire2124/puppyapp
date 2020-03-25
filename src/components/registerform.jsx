import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email()
      .min(5)
      .max(256)
      .required()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .max(256)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .min(4)
      .label("name")
  };

  doSubmit = () => {
    //call the server const username = this.username.current.value;
    console.log("Submitted ");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
