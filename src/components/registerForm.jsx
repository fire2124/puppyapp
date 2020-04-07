import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    name: Joi.string().required().min(4).max(256).label("Name"),
    surname: Joi.string().required().min(4).max(256).label("Surname"),
    email: Joi.string().email().min(5).max(256).required().label("Mail"),
    password: Joi.string().min(8).max(256).required().label("Password"),
  };

  doSubmit = async () => {
    // Call the server
    try {
      console.log(this.state.data);

      const response = await userService.register(this.state.data);
      console.log(response);

      auth.loginWithJwt(response.headers["x-auth-token"]);
      //window.location = "/";
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
        <h1>Registrácia používateľa</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Meno")}
          {this.renderInput("surname", "Priezvisko")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Heslo", "password")}
          {this.renderButton("Registrovať")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
