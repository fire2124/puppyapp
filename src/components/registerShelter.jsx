import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import * as userService from "../services/userService";

class RegisterShelter extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    mail: Joi.string().email().min(5).max(256).required().label("Mail"),
    password: Joi.string().min(5).max(256).required().label("Password"),
    name: Joi.string().required().min(4).max(256).label("Name"),
    address: Joi.string().required().min(4).max(256).label("Address"),
    icoDic: Joi.string().required().min(4).max(256).label("Ico/Dic"),
    ID: Joi.string().required().min(4).max(256).label("ID"),
  };

  doSubmit = async () => {
    // Call the server
    try {
      console.log(this.state.data);

      const response = await userService.register(this.state.data);
      console.log("heres");

      auth.loginWithJwt(response.headers["x-auth-token"]);
      const log = auth.loginWithJwt(response.headers["x-auth-token"]);
      console.log(log);

      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
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

export default RegisterShelter;
