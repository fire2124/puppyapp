import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class RegisterFormShelter extends Form {
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
    address: Joi.string()
      .required()
      .min(4)
      .max(256)
      .label("Address"),
    icoDic: Joi.string()
      .required()
      .min(4)
      .max(256)
      .label("Ico/Dic"),
    ID: Joi.string()
      .required()
      .min(4)
      .max(256)
      .label("ID")
  };

  doSubmit = () => {
    //call the server const username = this.username.current.value;
    console.log("Submitted ");
  };

  render() {
    return (
      <div>
        <h1>Registrácia útulku</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Meno útulku")}
          {this.renderInput("address", "Adresa")}
          {this.renderInput("icoDic", "Ičo/Dič")}
          {this.renderInput("ID", "ID")}
          {this.renderInput("mail", "Email")}
          {this.renderInput("password", "Heslo", "password")}
          {this.renderButton("Registrovať")}
        </form>
      </div>
    );
  }
}

export default RegisterFormShelter;
