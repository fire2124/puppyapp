import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../common/form";

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
    mail: Joi.string()
      .email()
      .min(5)
      .max(256)
      .required()
      .label("Mail"),
    password: Joi.string()
      .min(5)
      .max(256)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .min(4)
      .max(256)
      .label("Name"),
    surname: Joi.string()
      .required()
      .min(4)
      .max(256)
      .label("Surname")
  };

  doSubmit = () => {
    //call the server const username = this.username.current.value;
    console.log("Submitted ");
  };

  render() {
    return (
      <div>
        <h1>Registrácia používateľa</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Meno")}
          {this.renderInput("surname", "Priezvisko")}
          {this.renderInput("mail", "Email")}
          {this.renderInput("password", "Heslo", "password")}
          {this.renderButton("Registrovať")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
